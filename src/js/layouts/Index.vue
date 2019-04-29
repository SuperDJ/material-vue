<template>
	<div>
		<app-bar fixed :title="title" :action="drawerTrigger">
			<icon icon="person"/>

			<tooltip content="GitHub" bottom>
				<a href="//github.com/SuperDJ/material-vue" target="_blank">
					<icon icon="code"/>
				</a>
			</tooltip>
		</app-bar>

		<main class="container">
			<router-view/>
		</main>

		<drawer :active="drawerActive" modal>
			<ul>
				<li><router-link :to="{name: 'Index'}">Home</router-link></li>
				<li><router-link :to="{name: 'Iconography'}">Home</router-link></li>
			</ul>
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
			Drawer: () => import('../components/NavigationDrawer'),
			Tooltip: () => import('../components/Tooltip')
		}
	}
</script>