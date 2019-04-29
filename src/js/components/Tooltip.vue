<template>
	<div class="tooltip">
		<slot></slot>

		<span class="tooltip__content" :class="{ 'tooltip--top': top, 'tooltip--right': right, 'tooltip--bottom': bottom, 'tooltip--left': left}">
			{{ content }}
		</span>
	</div>
</template>

<script>
	export default {
		name: 'Tooltip',
		props: {
			content: {
				type: String,
				required: true
			},
			top: {
				type: Boolean,
			},
			right: {
				type: Boolean,
			},
			bottom: {
				type: Boolean,
			},
			left: {
				type: Boolean,
			}
		}
	}
</script>