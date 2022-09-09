<template>
	<view class="wCard" :style="{ marginBottom: marginBottom ? '20rpx' : '' }" @click="click">
		<slot>内容</slot>
	</view>
</template>

<script>
export default {
	name: 'wCard',
	props: {
		marginBottom: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {}
	},
	methods: {
		click() {
			this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
.wCard {
	margin: 0 auto;
	width: 94%;
	min-height: 60rpx;
	border-radius: 20rpx;
	padding: 36rpx 20rpx;
	background-color: #fff;
}
</style>
