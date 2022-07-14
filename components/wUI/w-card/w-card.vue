<template>
  <view class="wCard" @click="click">
  	<slot>内容</slot>
  </view>
</template>

<script>
export default {
	name: 'wCard',
  data() {
    return {}
  },
	methods: {
		click() {
			this.$emit('click')
		}
	},
}
</script>

<style lang="scss" scoped>
.wCard {
	margin: 0 auto;
	width: 94%;
	min-height: 60rpx;
	border-radius: 10rpx;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	padding: 20rpx;
	background-color: #fff;
	margin-bottom: 20rpx;
}
</style>
