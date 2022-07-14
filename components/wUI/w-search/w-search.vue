<template>
	<view class="w-search">
		<view class="search">
			<u-search
				shape="square"
				:value="searchValue"
				@change="change"
				@blur="search"
				@clear="clearValue"
				:placeholder="defaultValue"
				bgColor="#fff"
				:clearabled="true"
				:showAction="false"
			></u-search>
			<view class="filter" @click="open">
				<view class="name">条件筛选</view>
				<u-icon name="arrow-down-fill" color="#0088f1" size="14"></u-icon>
			</view>
		</view>
		<u-popup
			round="20"
			:show="show"
			mode="top"
			:closeOnClickOverlay="false"
			@close="close"
			@open="open"
		>
			<view class="popContent">
				<u-cell
					v-for="(item, index) in filterList"
					:key="index"
					:isLink="true"
					arrow-direction="right"
					@click="openSelect(index)"
				>
					<template #title>
						<view class="title">{{ item.title }}:</view>
					</template>
					<template #value>
						<view class="content u-line-1">
							<view v-if="item[item.prop]">{{ item[item.prop] }}</view>
							<view v-else class="default">{{ item.defaultValue }}</view>
						</view>
					</template>
				</u-cell>
			</view>
			<view class="popBottom">
				<view class="button" @click="close">取消</view>
				<view class="button" @click="reset">重置</view>
				<view class="button confimButton" @click="confirm">确定</view>
			</view>
		</u-popup>
		<template v-for="(item, index) in filterList">
			<!-- 普通选择 -->
			<u-picker
				v-if="!item.date"
				closeOnClickOverlay
				@close="selectClose(index)"
				@confirm="selectConfirm($event, item, index)"
				@cancel="selectClose(index)"
				:show="item.show"
				:columns="item.dataList"
				:keyName="item.keyName"
			></u-picker>
			<!-- 日期选择 -->
			<u-datetime-picker
				v-else
				closeOnClickOverlay
				@close="selectClose(index)"
				@cancel="selectClose(index)"
				@confirm="selectConfirm($event, item, index)"
				:show="item.show"
				v-model="currentDate"
				:mode="item.dateMode || 'date'"
			></u-datetime-picker>
		</template>
	</view>
</template>

<script>
import dayjs from 'dayjs'
export default {
	props: {
		defaultValue: {
			type: String,
			default: '请输入'
		},
		list: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			show: false,
			searchValue: '',
			filterList: this.list,
			currentDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
		}
	},
	methods: {
		close() {
			this.show = false
		},
		open() {
			this.show = true
		},
		change(e) {
			this.searchValue = e
		},
		search() {
			this.$emit('search', this.searchValue)
		},
		clearValue() {
			this.searchValue = ''
			this.$emit('search')
		},
		selectConfirm(e, item, index) {
			//当模式为日期选择器时
			if (item.date) {
				if (item.dateMode == 'datetime') {
					const formatDate = dayjs(e.value).format('YYYY-MM-DD HH:mm:ss')
					this.filterList[index][item.prop] = formatDate
				} else if (item.dateMode == 'date') {
					const formatDate = dayjs(e.value).format('YYYY-MM-DD')
					this.filterList[index][item.prop] = formatDate
				}
			} else {
				this.filterList[index][item.prop] = e.value[0][item.keyName]
			}
			this.filterList[index].show = false
		},
		selectClose(index) {
			this.filterList[index].show = false
		},
		openSelect(index) {
			this.filterList[index].show = true
		},
		reset() {
			const list = this.filterList
			list.forEach(item => {
				item[item.prop] = ''
			})
			this.filterList = list
		},
		confirm() {
			const data = this.filterList
			const searchParams = {}
			data.forEach(item => {
				searchParams[item.prop] = item[item.prop]
			})
			this.$emit('confim', searchParams)
			this.show=false
		}
	}
}
</script>

<style lang="scss" scoped>
.w-search {
	.search {
		background-color: #eee;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.filter {
			display: flex;
			align-items: center;
			height: 34px;
			background-color: #fff;
			color: #0088f1;
			padding: 10rpx;
			border-radius: 4px;
			margin-left: 10rpx;
			.name {
				margin-right: 10rpx;
			}
		}
	}
	.popContent {
		padding: 20rpx;
		.title {
			white-space: nowrap;
			margin-right: 10rpx;
		}
		.content {
			.default {
				color: #b197a6;
			}
		}
	}
	.popBottom {
		padding: 20rpx;
		display: flex;
		justify-content: space-around;
		.button {
			font-size: 16px;
			background-color: #f0f0f0;
			border-radius: 6px;
			padding: 20rpx 60rpx;
			color: #1fa45d;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
		}
		.confimButton {
			color: #fff;
			background-color: #07c160;
		}
	}
}
</style>
