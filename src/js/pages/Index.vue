<template>
    <div class="row text--center">
        <div class="xs12 sm4">
			<div class="row padding-0">
				<div class="xs12">
					<icon icon="code" class="text--primary" :size="48"/>
				</div>

				<div class="xs12">
					Material is made to be easy for development.
					All classes follow the BEM naming convention.
					This naming convention has also continued into the naming for both scss and CSS variables.
					For starting with Material you only need to load 2 files.
				</div>
			</div>
		</div>

		<div class="xs12 sm4">
			<div class="row padding--0">
				<div class="xs12">
					<icon icon="accessibility" class="text--primary" :size="48"/>
				</div>

				<div class="xs12">
					Since Material follows the guide lines of Google's Material Design it is easy to get recognized by your users.
				</div>
			</div>
		</div>

		<div class="xs12 sm4">
			<div class="row padding--0">
				<div class="xs12">
					<icon icon="group" class="text--primary" :size="48"/>
				</div>

				<div class="xs12">
					Do you like Material but do you feel that it can be improved?
					Please let us know by leaving an issue or add a pull request here.
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	export default {
		components: {
			Icon: () => import('../components/Icon')
		}
	}
</script>