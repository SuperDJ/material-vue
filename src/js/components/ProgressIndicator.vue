<template>
    <div class="progress" :class="classObject">
        <div class="progress__bar" :style="determinate && progress ? `width: ${progress}%` : ''"></div>
    </div>
</template>

<script>
    export default {
    	name: 'ProgressIndicator',
        props: {
    		determinate: {
    			type: Boolean,
				required: false
			},
			indeterminate: {
    			type: Boolean,
				required: false
			},
            progress: {
    			type: Number,
                required: false,
                default: 50,
            }
        },
        computed: {
    		classObject()
            {
            	return {
            		'progress--determinate': this.determinate,
                    'progress--indeterminate': this.indeterminate
                }
            }
        }
    }
</script>