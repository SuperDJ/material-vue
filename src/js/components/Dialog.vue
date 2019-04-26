<template>
    <div class="dialog" :class="classObject">
        <div class="dialog__header">{{ title }}</div>

        <form @submit.prevent="action">
            <div class="dialog__content">
                <slot></slot>
            </div>

            <div class="dialog__actions">
                <Button :content="contentCancel" text :action="onCancel ? onCancel : null" v-if="contentCancel" :type="typeCancel"/>
                <Button :content="contentConfirm" text :action="onConfirm ? onConfirm : null" v-if="contentConfirm" :type="typeConfirm"/>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
    	name: 'Dialog',
        props: {
    		active: {
    		    type: Boolean,
                required: true,
            },
			action: {
				type: Function,
				required: false,
			},
			alert: {
    			type: Boolean,
				required: false
			},
			confirm: {
    			type: Boolean,
				required: false
			},
			contentCancel: {
				type: String,
				required: false,
			},
			contentConfirm: {
				type: String,
				required: false,
			},
			fullScreen: {
    			type: Boolean,
				required: false
			},
            onCancel: {
    			type: Function,
                required: false,
            },
			onConfirm: {
				type: Function,
				required: false,
			},
			scroll: {
				type: Boolean,
				required: false
			},
			simple: {
    			type: Boolean,
				required: false,
			},
			title: {
				type: String,
				required: true,
			},
            typeCancel: {
    			type: String,
                required: false,
            },
			typeConfirm: {
				type: String,
				required: false,
			},
        },
        components: {
    		'Button': () => import('./Button')
        },
        computed: {
    		classObject()
            {
            	return {
            		'dialog--active': this.active,
                    'dialog--scroll': this.scroll,
                    'dialog--simple': this.simple,
                    'dialog--alert': this.alert,
                    'dialog--confirm': this.confirm,
                    'dialog--full-screen': this.fullScreen
                }
            }
        }
    }
</script>
