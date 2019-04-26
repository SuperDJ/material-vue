<template>
	<div>
		<app-bar fixed :title="title" :action="drawerTrigger"/>

		<main class="container">
			<router-view/>
		</main>

		<drawer :active="drawerActive">

		</drawer>
	</div>
</template>

<script>
	export default {
    	name: 'Index',
		data() {
    		return {
    			drawerActive: false
			}
		},
		methods: {
			drawerTrigger: function ()
			{
				this.drawerActive = !this.drawerActive;
			}
		},
        computed: {
    		title()
            {
            	return this.$route.meta.title
            }
        },
		components: {
    		AppBar: () => import('../components/AppBar'),
			Icon: () => import('../components/Icon'),
			Drawer: () => import('../components/NavigationDrawer')
		}
	}
</script>