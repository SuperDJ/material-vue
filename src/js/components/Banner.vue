<template>
    <div class="banner" :class="classObject">
        <div class="banner__image" v-if="image">
            <img :src="imageSource" alt="placeholder">
        </div>

        <div class="banner__content">
            {{ content }}
        </div>

        <div class="banner__actions" v-if="actions">
			<Button
				text
				v-for="(action, i) of actions"
				:action="action.action"
				:content="action.content"
				:class="{'md-down-hide': i === actions.length -1}"
			/>
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'Banner',
        props: {
			actions: {
				type: Array,
				required: false,
			},
			content: {
				type: String,
				required: true,
			},
			image: {
				type: String,
				required: false,
			},
			multi: {
				type: Boolean,
				required: false,
			},
    	    single: {
    	    	type: Boolean,
				required: false,
			},
        },
        computed: {
    	    classObject()
            {
            	return {
            	    'banner--single-line': this.single,
            	    'banner--multi-line': this.multi,
            	    'banner--image-multi-line': this.image,
                }
            }
        },
        components: {
    		'Button': () => import('../components/Button')
        }
    }
</script>