<template>
    <div class="banner" :class="classObject">
        <div class="banner__image" v-if="image && imageSource && imageSource.length > 0">
            <img :src="imageSource" alt="placeholder">
        </div>

        <div class="banner__content">
            {{ content }}
        </div>

        <div class="banner__actions">
			<Button text :action="action1" :content="action1Text" v-if="action1 && action1Text" />

            <Button text :action="action2" :content="action2Text" v-if="action2 && action2Text" class="md-down-hide" />
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'Banner',
        props: {
			action1: {
				type: Function,
				required: false,
			},
			action1Text: {
				type: String,
				required: false,
			},
			action2: {
				type: Function,
				required: false,
			},
			action2Text: {
				type: String,
				required: false,
			},
			content: {
				type: String,
				required: true,
			},
			image: {
				type: Boolean,
				required: false,
			},
			imageSource: {
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