<template>
    <div class="card">
        <img src="" class="card__thumbnail" :alt="title">

        <div class="card__header">{{ title }}</div>

        <div class="card__text">
            <slot/>
        </div>

        <div class="card__actions" v-if="actions">
			<s-button text :action="action.action" content="action.content" v-for="(action, i) of actions"/>
		</div>
    </div>
</template>

<script>
    export default {
    	name: 'Card',
        props: {
    		title: {
    			type: String,
                required: true,
            },
            thumbnail: {
    			type: String,
                required: false,
            },
			actions: {
    			type: Object,
				required: false,
			}
        },
		components: {
    		SButton: () => import('./Button'),
		}
    }
</script>