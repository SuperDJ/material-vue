<template>
	<li>
		<router-link :to="to" :class="classObject" v-if="!to.contains('http')">
			<span class="drawer__item__content">
				{{ content }}
			</span>
		</router-link>

		<a :href="to" :class="classObject" v-else>
		   <span class="drawer__item__content">
				{{ content }}
			</span>
		</a>
	</li>
</template>

<script>
	export default {
		name: 'DrawerItem',
		props: {
			to: {
				type: Object,
				required: true,
			},
			content: {
				type: String,
				required: true,
			}
		},
		computed: {
			classObject() {
				return {
					'drawer__item': true,
				}
			}
		}
	}
</script>