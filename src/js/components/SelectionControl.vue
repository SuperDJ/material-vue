<template>
	<label>
		<input
			type="checkbox"
			v-bind="$attrs"
		   	:class="{'checkbox': checkbox, 'switch' : switches}"
		   	v-if="checkbox || switches"
		   	:checked="shouldBeChecked"
	   		@change="updateInput"
			:value="value"
		>
		{{ label }}
	</label>
</template>

<script>
	export default {
		name: 'checkbox',
		inheritAttrs: false,
		model: {
			prop: 'modelValue',
			event: 'change'
		},
		props: {
			checkbox: {
				type: Boolean,
				default: true
			},
			switches: {
				type: Boolean,
				default: false
			},
			value: {
				required: true,
			},
			modelValue: {
				default: false,
			},
			label: {
				type: String,
				required: true,
			},

			/* We set `true-value` and `false-value` to the default true and false so
			 * we can always use them instead of checking whether or not they are set.
			 * Also can use camelCase here, but hyphen-separating the attribute name
			 * when using the component will still work
			 */
			trueValue: {
				default: true
			},
			falseValue: {
				default: false
			}
		},
		computed: {
			shouldBeChecked()
			{
				if( this.modelValue instanceof Array )
				{
					return this.modelValue.includes( this.value );
				}

				return this.modelValue === this.trueValue;
			}
		},
		methods: {
			updateInput( event )
			{
				let isChecked = event.target.checked;

				if( this.modelValue instanceof Array )
				{
					let newValue = [ ...this.modelValue ];

					if( isChecked )
					{
						newValue.push( this.value );
					} else {
						newValue.splice( newValue.indexOf( this.value ), 1 );
					}

					this.$emit( 'change', newValue );
				} else {
					this.$emit( 'change', isChecked ? this.trueValue : this.falseValue );
				}
			}
		}
	}
</script>