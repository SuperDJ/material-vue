<template>
    <header class="app-bar" :class="{'app-bar--fixed': fixed, 'app-bar--drawer-fixed': drawerFixed}">
        <icon icon="menu" :action="action" />

        <h1 class="app-bar__title">{{ title }}</h1>

        <div class="app-bar__actions">
            <slot/>
        </div>
    </header>
</template>

<script>
    export default {
    	name: 'AppBar',
    	props: {
			action: {
				type: Function,
				required: true,
			},
			drawerFixed: {
				type: Boolean,
				required: false,
				default: false,
			},
			fixed: {
				type: Boolean,
				required: false,
				default: false
			},
			title: {
    			type: String,
                required: true,
            },
        },
        components : {
    		'Icon': () => import('../components/Icon')
        }
    }
</script>