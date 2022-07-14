<template>
	<view :style="{width:width,height:height,lineHeight:height,backgroundColor:bgColor}" class="pickerSelect"
		@click="clickEvent">
		{{value ? value : defaultValue}}
		<view v-if='!showDate' class="arrow">
			
		</view>
		<view v-if='showDate' class="dateIcon">
			<image
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAr1JREFUWEftWE1oE1EQ/l422LQWU6nV2hYjJIGYzU0hQoUeBA8K3vRQQaGCNw/e3FDSBtsk6NGboKAHD+3JY4UcCr0IIojJoiSFir8FLS2kkjTZnbLUhPxs9mWTJhbZd515Mx/f/L15jIgEHODD/kuAfdPJYF5hV0eOOx9+uTe2xQuAYzp1uUDsrDLvf8DTrZW3xKAQSj1VCbcEAZPFOXGB55RJqSQA39EeuDZmxW88/Up5ewAZmypG/S94DpmUygA47XQccm/OeD/z9BsCZFIyAbAJMwY6p0vLFAtcrGKQSali5xyat0wx0a4LUBMYmSvnYIdCXCLKAliKgtki2Q8GwypRqM8mBLfnz7znZReT5Fcgddwz6nCl73q2+fp7tdByiLXL3seZw804K4E59+RHz9s7J/M8cJq8bQabcdKOjgWwHfZaCvH1RQiv5fRYI8eX/N6vC9eg1MqHI6uDOaj9evccsGV/zrh/68lMh5g7AhmWKCpeqXTWK8kTOVDCiM1egcb/zAXe1L1g/k60pqtYkOSICrpR54xgB4PG7BrFRE+l3B6SbypEzwBkAfyquXsMQL/QYBKZZrARCwORtGsrt7NqBNDG8FyJircrbfBGpQVQY6sU4q4yeCTy0V1Q2WgpXAWlOKwoeAnCGsX1c7BrALWWsZ7LrevmI9EmxQNa4pdP1xnUeuHiu6RWlRX9kDkABEH4TnHx1D8FqMecVcWtPvlLbB4YBgciH1zZvFC37REwqBI94kySFYExLXfLRyGaAnBh3yYJuy+vgNF5g7maoZjoqy6S5KRCzHBnbrT4m54kWssgUMN9mZGwVIz5qn4YhmY/ndjYUcIAaZWud7IjQ86w3teJaYBGL5JOyCyA7bJqMWgxyPs8apch3n1uDvIMdEuuszTJCRg05G4B2/PDlinmr/7A7C6A5rztAkTVFlaghH5rAAAAAElFTkSuQmCC"
				mode=""></image>
		</view>
	</view>
</template>
<script>
	export default {
		name: "wShowSelect",
		props: {
			value: {
				default: ''
			},
			showDate:{
				type:Boolean,
				default:false
			},
			defaultValue: {
				type: String,
				default: '默认值'
			},
			width: {
				type: String,
				default: '100%'
			},
			bgColor: {
				type: String,
				default: '#EEE'
			},
			height: {
				type: String,
				default: '60rpx'
			}
		},
		methods: {
			clickEvent() {
				this.$emit('click')
				
			}
		},
	}
</script>
<style lang="scss" scoped>
	.pickerSelect {
		width: 100%;
		background-color: #EEEEEE;
		height: 60rpx;
		border-radius: 4rpx;
		line-height: 60rpx;
		padding: 0 20rpx;
		position: relative;
		transition: all .6s;
		.arrow {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			border-left: 2rpx solid #999999;
			border-bottom: 2rpx solid #999999;
			height: 16rpx;
			width: 16rpx;
			transform: translate(2rpx, -2rpx) rotate(-45deg);
			-webkit-transform: translate(2rpx, -2rpx) rotate(-45deg);
			border-right: 2rpx solid transparent;
			border-top: 2rpx solid transparent;
			display: inline-block;
		}
		.dateIcon {
			position: absolute;
			right: 20rpx;
			top: 10rpx;
			width: 40rpx;
			height: 40rpx;
			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
</style>
