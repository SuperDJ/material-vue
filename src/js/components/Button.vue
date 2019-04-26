<template>
    <button class="button" @[click]="action" :class="classObject" v-bind="$attrs">
        <icon v-if="icon && iconPosition && iconPosition === 'left'" :icon="icon"/>

        {{ content }}

        <icon v-if="icon && iconPosition && iconPosition === 'right'" :icon="icon"/>
    </button>
</template>

<script>
    export default {
    	name: 'Button',
		inheritAttrs: false,
        props: {
    		action: {
    			type: Function,
				required: false
			},
			active: {
				type: Boolean,
				required: false,
			},
			contained: {
				type: Boolean,
				required: false,
			},
			content: {
				type: String,
				required: true,
			},
            icon: {
    			type: String,
                required: false,
            },
            iconPosition: {
    			type: String,
                required: false,
            },
			outlined: {
				type: Boolean,
				required: false,
			},
			text: {
				type: Boolean,
				required: false,
			},
        },
        computed: {
            classObject() {
                return {
                    'button--text': this.text,
                    'button--outlined': this.outlined,
                    'button--contained': this.contained,
					'button--text--icon-left': this.text && this.icon && this.iconPosition === 'left',
					'button--outlined--icon-left': this.outlined && this.icon && this.iconPosition === 'left',
					'button--contained--icon-left': this.contained && this.icon && this.iconPosition === 'left',
					'button--text--icon-right': this.text && this.icon && this.iconPosition === 'right',
					'button--outlined--icon-right': this.outlined && this.icon && this.iconPosition === 'right',
					'button--contained--icon-right': this.contained && this.icon && this.iconPosition === 'right',
                    'button--active': this.active
                }
            },
            click()
            {
            	return this.action ? 'click' : null;
            }
		},
		components: {
			'Icon': () => import('./Icon')
		},
    }
</script>