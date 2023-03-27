<template>
	<view>
		<w-popup
			v-model="show"
			:name="title"
			:showBottomButton="false"
		>
			<view class="popup-container">
				<picker-view
					class="picker-view"
					immediate-change
					indicator-style="height: 50px;"
					:value="colsIndex"
					@change="bindChange"
				>
					<picker-view-column
						v-for="(i, index) in colsIndex"
						:key="index"
					>
						<view
							class="item"
							v-for="(item, key) in colData[index]"
							:key="key"
						>
							{{ rangeKey ? item[rangeKey] : item }}
						</view>
					</picker-view-column>
				</picker-view>
				<view class="btn" @tap="confirm">
					<text>确定</text>
				</view>
			</view>
		</w-popup>
	</view>
</template>

<script>
/**
 * @description 简单级联多列选择器
 * @property {String} title 标题
 * @property {String} rangeKey 显示内容对应key
 * @property {Array} list 数据数组
 * @property {Number} deepth 列数
 * @property {String} childrenKey 子项对应key值,默认children
 * @event {Function} confirm 选择后确定 值为每列对应下标
 */
export default {
	name: 'w-tree-picker',
	props: {
		title: {
			type: String,
			default: ''
		},
		rangeKey: {
			type: String,
			default: ''
		},
		list: {
			type: Array,
			default: () => []
		},
		deepth: {
			type: Number,
			default: 1
		},
		childrenKey: {
			type: String,
			default: 'children'
		}
	},
	data() {
		return {
			show: false,
			colsIndex: [0]
		}
	},
	computed: {
		colData() {
			if (this.list.length <= 0) return []
			const list = []
			let item = this.list
			this.colsIndex.forEach(v => {
				if (item) {
					list.push(item)
					item = item[v][this.childrenKey]
				}
			})
			return list
		}
	},
	methods: {
		open() {
			this.show = true
		},
		close() {
			this.show = false
		},
		bindChange(e) {
			const value = e.detail.value
			let ids = []
			let changeIdx = this.colsIndex.length
			this.colsIndex.forEach((v, i) => {
				if (v !== value[i]) {
					changeIdx = i
				}
				if (i > changeIdx) {
					ids.push(0)
				} else {
					ids.push(value[i])
				}
			})
			this.colsIndex = ids
		},
		confirm() {
			this.close()
			this.$emit('confirm', this.colsIndex)
		}
	},
	created() {
		this.colsIndex = new Array(this.deepth).fill(0)
	}
}
</script>

<style lang="scss" scoped>
$main-color: #45d4a8;
.popup-container {
	width: 100vw;
	height: 700rpx;
	border-radius: 36rpx 36rpx 0 0;
	background: #fff;
	box-sizing: border-box;
	* {
		box-sizing: border-box;
	}
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx 24rpx 40rpx 40rpx;
		.title {
			font-size: 32rpx;
			font-weight: 800;
			color: #36444e;
		}
		.icon-close {
			width: 48rpx;
			height: 48rpx;
		}
	}
	.btn {
		width: 590rpx;
		height: 100rpx;
		background: $main-color;
		border-radius: 12rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		font-weight: 400;
		color: #ffffff;
		margin: 0 auto;
		margin-top: 64rpx;
	}
}
.picker-view {
	width: 750rpx;
	height: 494rpx;
	background: #fff;
}

.item {
	line-height: 92rpx;
	text-align: center;
	font-size: 32rpx;
	font-weight: 800;
	color: #36444e;
}
</style>
