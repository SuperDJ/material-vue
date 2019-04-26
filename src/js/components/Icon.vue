<template>
    <i class="material-icons icon" @[click]="action">{{ icon }}</i>
</template>

<script>
    export default {
    	name: 'Icon',
    	props: {
    		icon: {
    			type: String,
                required: true
            },
			action: {
    			type: Function,
				required: false
			}
        },
        computed: {
    		click()
            {
            	return this.action ? 'click' : null;
            }
        }
    }
</script>