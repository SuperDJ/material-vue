<template>
    <div class="text-field" :class="classObject">
        <input
            :type="type"
            :id="id"
            class="text-field__input"
            :value="value"
            @input="updateInput"
            v-if="type !== 'textarea' && type !== 'select'"
			v-bind="$attrs"
        >

        <textarea
            :id="id"
            class="text-field__input"
            :value="value"
			v-bind="$attrs"
            @input="updateInput"
            v-if="type === 'textarea' && type !== 'select'"
		></textarea>


        <label class="text-field__label" :for="id">{{ label }}</label>

        <div class="text-field__helper-text" v-if="helper && helper.length > 0">
            {{ helper }}
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'TextField',
		inheritAttrs: false,
        props: {
            type: {
            	type: String,
                required: false,
				default: 'text'
            },
			filled: {
            	type: Boolean,
				required: false,
			},
			outlined: {
            	type: Boolean,
				required: false,
			},
			id: {
            	type: String,
				required: true,
			},
            label: {
            	type: String,
                required: true,
            },
            select: {
            	type: Boolean,
                required: false
            },
            helper: {
                type: String,
                required: false,
            },
            error: {
            	type: Boolean,
                required: false
            },
			value: {
            	default: ''
			}
        },
        methods: {
    		updateInput()
			{
				this.$emit('input', this.value);
			}
        },
        computed: {
    	    classObject()
            {
            	return {
            	    'text-field--filled': this.filled,
                    'text-field--outlined': this.outlined,
                    'text-field--select': this.select,
                    'text-field--helper-text': this.helper && this.helper.length > 0,
                    'text-field--invalid': this.error,
                    'text-field--active': this.shouldBeActive,
                }
            },

			shouldBeActive()
			{
				console.log(this.value);

				return this.value && this.value.length > 0;
			}
        }
    }
</script>