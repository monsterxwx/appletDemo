<template>
	<view class="manage"><w-cell :list="list" @click="goPage"></w-cell></view>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{
					name: '图片测试',
					url: '/pages_test/uploadImg/uploadImg'
				},
				{
					name: '时间测试',
					url: '/pages_test/getTime/getTime'
				},
				{
					name: '表单测试',
					url: '/pages_test/formShow/formShow'
				},
				{
					name: '表格测试',
					url: '/pages_test/tableShow/tableShow'
				},
				{
					name: '树型数据测试',
					url: '/pages_test/treeShow/treeShow'
				}
			]
		}
	},
	methods: {
		goPage(item) {
			uni.navigateTo({
				url: item.url
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.manage {
	.baseButton {
		padding: 20rpx;
		background-color: #39b54a;
		color: #fff;
		border-radius: 16rpx;
		width: 700rpx;
		margin: 0 auto;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20rpx;
	}
}
</style>
