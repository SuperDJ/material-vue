<template>
    <nav class="menu" :class="{'menu--active': active}">
        <slot />
    </nav>
</template>

<script>
    export default {
    	name: 'Menu',
        props: {
            active: {
            	type: Boolean,
                required: true,
            }
        }
    }
</script>