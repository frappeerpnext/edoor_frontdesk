<template>
	<div v-if="!user.loading">
		<router-view />
		<Toasts />
	</div>
</template>

<script>
import { provide, ref } from "vue"
import { Toasts } from "@/utils/toasts"

export default {
	name: "App",
	components: {
		Toasts,
	},
	setup() {
		const user = ref({})
		const viewportWidth = ref(
			Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0
			)
		)

		provide("user", user)
		provide("viewportWidth", viewportWidth)

		return { user }
	},
	mounted() {
		window.addEventListener("online", () => {
			this.$clearToasts()
			this.$toast({
				title: "You're online now",
				icon: "wifi",
				iconClasses: "stroke-green-600",
				appearance: "success",
				position: "bottom-right",
			})
		})
		window.addEventListener("offline", () => {
			this.$toast({
				title: "You're offline now",
				icon: "wifi-off",
				iconClasses: "stroke-red-600",
				appearance: "danger",
				fixed: true,
				position: "bottom-right",
			})
		})
	},
}
</script>
