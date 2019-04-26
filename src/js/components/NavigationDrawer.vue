<template>
    <nav class="drawer" :class="{'drawer--active': active, 'drawer--fixed': fixed}">
        <slot></slot>
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
            }
        }
    }
</script>