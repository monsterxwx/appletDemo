<template>
	<scroll-view scroll-y="true" :style="{height: height}" @scrolltolower="lowerScroll">
		<slot>插入内容</slot>
		<view class="loading">
			<text v-if="loading=='loadmore'">加载更多</text>
			<view v-if="loading=='loading'" class="cu-load loading"></view>
			<view v-if="loading=='nomore'" class="cu-load  over"></view>
		</view>
	</scroll-view>
</template>
<script>
	export default {
		name: "wScrolly",
		props: {
			loading: {
				type: String,
				default: 'loadmore'
			},
			height: {
				type: String,
				default: '100%'
			}
		},
		data() {
			return {};
		},
		methods: {
			lowerScroll() {
				this.$emit('bottom')
			}
		},
	}
</script>
<style lang="scss" scoped>
	.loading {
		margin-top: -10rpx;
		padding-bottom: 20rpx;
		text-align: center;
		font-size: 24rpx;
		color: #a4a7ac;
	}
</style>
