<template>
    <i class="material-icons icon" :class="classSize" @[click]="action">{{ icon }}</i>
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
			},
			size: {
    			type: Number,
				required: false
			}
        },
        computed: {
    		click()
            {
            	return this.action ? 'click' : null;
            },
			classSize() {
    			return {
    				'icon--18': this.size === 18,
    				'icon--24': this.size === 24,
    				'icon--36': this.size === 36,
    				'icon--48': this.size === 48,
				}
			}
        }
    }
</script>