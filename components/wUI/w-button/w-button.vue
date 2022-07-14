<template>
	<view class="wButton">
		<view v-if='!double' class="oneButton" :class="bottom?'bottomButton':''" :style="{bottom:bottomHeight}">
			<button :style="{backgroundColor:bgColor,color:color,fontSize:fontSize,width:width}" @click="clickEvent">
				<slot>{{name}}</slot>
			</button>
		</view>
		<view v-else class="doubleButton" :class="bottom?'bottomDoubleButton':''" :style="{bottom:bottomHeight}">
			<button @click="clickLeftEvent" :style="{fontSize:fontSize,background:leftBgColor,color:leftColor}"
			  style="width: 350rpx; margin-right: 10rpx">
				<slot name="left">{{leftName}}</slot>
			</button>
			<button @click="clickRightEvent" :style="{fontSize:fontSize,background:rightBgColor,color:rightColor}"
			  style="width: 350rpx">
				<slot name="right">{{rightName}}</slot>
			</button>
		</view>
	</view>
</template>
<script>
	export default {
		name: "wButton",
		props: {
			name: {
				type: String,
				default: '按钮'
			},
			bgColor: {
				type: String,
				default: '#0078D4'
			},
			color: {
				type: String,
				default: '#FFF'
			},
			fontSize: {
				type: String,
				default: '32rpx'
			},
			width: {
				type: String,
				default: '700rpx'
			},
			//是否开启左右两个按钮
			double: {
				type: Boolean,
				default: false
			},
			//左边按钮的名字
			leftName: {
				type: String,
				default: '取消'
			},
			//左边按钮的字体颜色
			leftColor: {
				type: String,
				default: '#0078d4'
			},
			//左边按钮的背景颜色
			leftBgColor: {
				type: String,
				default: '#f3f3f3'
			},
			rightName: {
				type: String,
				default: '确定'
			},
			//右边按钮的字体颜色
			rightColor: {
				type: String,
				default: '#fff'
			},
			//右边按钮的背景颜色
			rightBgColor: {
				type: String,
				default: '#0078d4'
			},
			//是否定位到底部
			bottom: {
				type: Boolean,
				default: false
			},
			//距离底部的高度
			bottomHeight: {
				type: String,
				default: '40rpx'
			}
		},
		data() {
			return {};
		},
		methods: {
			clickEvent() {
				this.$emit('click')
			},
			clickLeftEvent() {
				this.$emit('clickLeft')
			},
			clickRightEvent() {
				this.$emit('clickRight')
			},
		}
	}
</script>
<style lang="scss" scoped>
	.wButton {
		.oneButton {
			width: 700rpx;
			margin: 20rpx auto;
		}

		.doubleButton {
			padding: 20rpx;
			display: flex;
			text-align: center;
			align-items: center;
		}

		.bottomButton {
			width: 700rpx;
			color: #fff;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
		}

		.bottomDoubleButton {
			padding: 0 20rpx;
			position: fixed;
			bottom: 40rpx;
			display: flex;
			text-align: center;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
