<template>
	<label>
		<input
			type="radio"
			v-bind="$attrs"
			class="radio"
			:checked="shouldBeChecked"
			@change="updateInput"
			:value="value"
		>

		{{ label }}
	</label>
</template>

<script>
	export default {
		name: 'Radio',
		inheritAttrs: false,
		model: {
			prop: 'modelValue',
			event: 'change'
		},
		props: {
			value: {
				required: true,
			},
			modelValue: {
				default: ''
			},
			label: {
				type: String,
				required: true
			}
		},
		computed: {
			shouldBeChecked()
			{
				return this.modelValue === this.value;
			}
		},
		methods: {
			updateInput()
			{
				this.$emit('change', this.value)
			}
		}
	}
</script>