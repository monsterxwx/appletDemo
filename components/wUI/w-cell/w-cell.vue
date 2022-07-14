<template>
	<view class="wCell" :class="marginTop?'marginTop':''">
		<view class="content">
			<view class="item" @click="clickEvent(item)" v-for="item in list" :key='item[keyName]'>
				<view class="left" :style="{color: color}"> {{item[keyName]}}</view>
				<view class="right">
					<image
					  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik0xOSAxMkwzMSAyNEwxOSAzNiIgc3Ryb2tlPSIjYWNhZWI5IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
					  mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'wCell',
		props: {
			list: {
				type: Array,
				default: () => []
			},
			keyName: {
				type: String,
				default: 'name'
			},
			color: {
				type: String,
				default: '#000'
			},
			marginTop: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {}
		},
		methods: {
			clickEvent(e) {
				this.$emit('click', e)
			}
		},
	}
</script>
<style lang="scss" scoped>
	.wCell {
		margin: 0 auto;
		width: 94%;
		border-radius: 14rpx;
		background-color: #fff;

		.content {
			font-size: 30rpx;

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 26rpx 30rpx;
				position: relative;
				&:not(:last-child)::after {
					content: '';
					position: absolute;
					bottom: 0;
					width: 90%;
					height: 2rpx;
					background-color: #f3f3f3;
				}
				.right {
					width: 40rpx;
					height: 40rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
				&:active {
					background-color: #e5e5e5;
				}
			}
		}
	}

	.marginTop {
		margin-top: 20rpx;
	}
</style>
