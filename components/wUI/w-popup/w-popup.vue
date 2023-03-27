<template>
	<view class="wPopup" @touchmove.stop.prevent>
		<u-popup
			:show="value"
			:overlay="overlay"
			:mode="mode"
			:round="10"
			@close="close"
		>
			<view class="modalStyle">
				<view class="top">
					<view class="title">{{ name }}</view>
					<view class="close">
						<image
							@click="close"
							:src="closeImg"
							mode=""
						></image>
					</view>
				</view>
				<view class="content"><slot></slot></view>
				<view class="bottom" v-if="showBottomButton">
					<w-button
						v-if="!doubleButton"
						class="center"
						@click="saveData"
						:name="oneButtonName"
					></w-button>
					<w-button
						v-else
						double
						@clickLeft="deteleData"
						@clickRight="editData"
						leftColor="#fff"
						leftBgColor="#f56c6c"
						:leftName="leftButtonName"
						:rightName="rightButtonName"
					></w-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>
<script>
export default {
	name: 'wPopup',
	props: {
		//v-model绑定的用于显示和隐藏的值
		value: {
			type: Boolean,
			default: false
		},
		mode: {
			type: String,
			default: 'bottom'
		},
		overlay: {
			type: Boolean,
			default: true
		},
		//是否显示底部按钮
		showBottomButton: {
			type: Boolean,
			default: true
		},
		//是否显示两个按钮
		doubleButton: {
			type: Boolean,
			default: false
		},
		//弹框的头部标题名称
		name: {
			type: String,
			default: '名称'
		},
		//一个按钮的名称
		oneButtonName: {
			type: String,
			default: '保存'
		},
		//两个按钮时左边按钮的名称
		leftButtonName: {
			type: String,
			default: '删除'
		},
		//两个按钮时右边按钮的名称
		rightButtonName: {
			type: String,
			default: '修改'
		},
		//是否需要提示消息
		toast: {
			type: Boolean,
			default: true
		},
		//是否开启验证，开启后按完按钮不关闭popup
		validate: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			closeImg:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABP1JREFUaEPlm0+IG1Ucx7+/yR6S0EMPCgoKHgQVFAR76GLBKZTuzCh0BT3pzQoKgi16UDy0PYgehFYQXFBvXkTBFmpmtggNuKWCFQpdUEGwoNAcCu6hzOxhMz/5zUyySTaZmffmJRviO4aZN+/zfr/3+/d+IRgebNtLaDafAfMRAI8CeBLAQwDqIHog+RxzB8A2gH8AbAL4E0QbCMNfqd3eMbkkMjFZBvU8mF8F4IDogNa8zPcABCD6GmH4gwnYSoBs2wdRr78Ny3oLwH1aUJNfuos4/gzb259Su72lO7cWINv2ATSbH4D5FIjquh8v9R7zNoguIAzPUbstaq00lAF5ZeUELOsCiB5R+lLVh5lvI45P0fr6JZWpSgOybdfRaJwH0RsqHzD+LPMaouh0WWmWAmTPE+vnA3ja+IL1JrwJwKVWS6xx7igEZMd5DEQ/gkhM/fwMUVlmh4Lgj7xF5QImcJbVBpD6r/kbHcSxnQc5ETBRS+Zf5k5yo5sskiRanqSuYwETg9JsXp+jM1ekOzcRhsvjDM94QNf9fN+tZRHSXkmuke+/OfrzHsDEz9VqF1Xnn4vnu93VUT85BJhEKI3GrZk7cVO7I+cxip4YVNVhQM/7CMB7pr63T/N8TK3W+71v9wGTwLnRuKMZW24izQQOgWipEhizpEs3soxEUi21IeuIood7AfouoOOcgWWdVZsNQLf7Oq2vfynvseMcAZFfKV1idikINpL5VlZOolb7QnlNcXyWguCcvJcAZm7hb42UZ5NaracGF6ANKTs/ANebkz3vVpY0q3DeRRg+KPlkCuh5JwCoW07mn8n3l/dYbFVJToBL1ua610F0WIUue3aVWq1LKaDrfguil5QnSc+LTb5/TRsyH+45ABIHq59r5u/I91+mpNzQaPxb6dwAjhZkPtyzWflCr/wBbCEM7yd23cMgkrBMf6QWVA1yunApC/OyAL4Dok/06bI3VSBnAZcCviuA5uLOMpDph/uuYMgCu25VtRyWE/OaAP4EIqlhmhlFkOKbMj83Vbh0IzcE8C/jsWcO5LhdZNOS6ztRvi2AEp6Zz9hLQk4NLpVgh9jz2IxujpmlAHKqcNlypg84waAkG6wa8WhIQgDvTKWolOMKhozLdCE70zMyOZLTDutUJcipkTHvJvL9HLTCOlW4ATdh1tEXOfF0oWphnQ5cCpg4enOhWhFc796wKBiokjQPHfA0VDMTbJeF23XC6gG6qiSTYNtEuqQKNxvINF1KVLVKwst8tFJsWayuVyslvBngKoi+V9UATCpZqMaWeZC6JQvmF8n3L/aKTtIZIQ5f9Z59b9FJFa5AXY0UnbKwSa9sGMcnKQi+yjRBaiiXTZU/2HFeg2UlJUmlMVo2TBa36IXfBHKRS/eZFKXR4DfjCbCSflV4uOjypZJFrbAuY69mlnNwvv/fBWhfVRf5CjszONKEIPcCs+1oUtVXnSaEvu89fvxxLC1dnUrGrwoy/vkOdnaO0pUrv0+arrgRSCBrNbnzmy9JiuS6XTcPTqALAfvquqitXH11XeRmvEH9ZtddBSBdh7NVWVFJ4LRkCCrHt5SKjk6YXXmfmVFD7L2sIfbDsi2UhY6+7A4tbEvzGInKLfELAF4B0TEAB8tu0shzW2AOAHyDKLq8703p4yCyGs8hAHLXt/u3grS3u3fJ04H0Yg/+rQC4hii6YQJqcF3/Ab0oIPReCB15AAAAAElFTkSuQmCC'
		}
	},
	methods: {
		close() {
			this.$emit('input', false)
		},
		saveData() {
			this.$emit('save')
			if (this.toast) {
				this.$message.toast('保存成功')
			}
			if (this.validate) {
			} else {
				this.close()
			}
		},
		editData() {
			this.$emit('edit')
			if (this.toast) {
				this.$message.toast('修改成功')
			}
			if (this.validate) {
			} else {
				this.close()
			}
		},
		deteleData() {
			this.$emit('detele')
			if (this.toast) {
				this.$message.toast('删除成功')
			}
			this.close()
		}
	}
}
</script>
<style lang="scss" scoped>
.wPopup {
	.modalStyle {
		padding-top: 30rpx;

		.top {
			display: flex;
			justify-content: space-between;
			padding: 10rpx 30rpx;
			border-bottom: 2rpx solid #eee;

			.title {
				font-size: 30rpx;
				font-weight: 700;
				color: #666666;
			}

			.close {
				width: 50rpx;
				height: 50rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}
		}

		.bottom {
			display: flex;

			.center {
				margin: 0 auto;
			}
		}
	}
}
</style>
