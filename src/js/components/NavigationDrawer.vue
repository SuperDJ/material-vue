<template>
    <nav class="drawer" :class="classObject">
		<ul>
        	<slot></slot>
		</ul>
    </nav>
</template>

<script>
    export default {
    	name: 'NavigationDrawer',
    	props: {
            active: {
    			type: Boolean,
                required: true,
                default: false
            },
            fixed: {
    			type: Boolean,
                required: false,
                default: false
            },
			modal: {
            	type: Boolean,
				required: false,
			}
        },
		computed: {
    		classObject()
			{
				return {
					'drawer--active': this.active,
					'drawer--fixed': this.fixed,
					'drawer--modal': this.modal,
				}
			}
		}
    }
</script>