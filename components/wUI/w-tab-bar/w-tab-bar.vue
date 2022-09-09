<template>
	<view>
		<u-tabbar
			:value="name"
			@change="tabbarChange"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
			activeColor="#3b9be8"
		>
			<template v-for="item in tabList">
				<u-tabbar-item
					v-if="item.show"
					:name="item.text"
					:text="item.text"
					:icon="name === item.text ? item.acitveIcon : item.defaultIcon"
				></u-tabbar-item>
			</template>
		</u-tabbar>
	</view>
</template>

<script>
export default {
	props: {
		name: String
	},
	data() {
		return {}
	},
	computed: {
		tabList() {
			return this.$store.state.filterRouterList
		}
	},
	methods: {
		tabbarChange(e) {
			const path = this.tabList.find(item => item.text === e).path
			uni.switchTab({
				url: '/' + path
			})
		}
	}
}
</script>

<style lang="scss"></style>
