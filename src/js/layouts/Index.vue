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
				<drawer-item :to="{name: 'Index'}" content="Home"/>
				<drawer-item to="#" content="Getting started"/>
				<drawer-item to="#" content="Getting started"/>
				<drawer-item to="https://superdj.github.io/material/layout/grid.html" />
				<drawer-item :to="{name: 'Iconography'}" content="Iconography"/>
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
			DrawerItem: () => import('../components/DrawerItem'),
			Tooltip: () => import('../components/Tooltip')
		}
	}
</script>