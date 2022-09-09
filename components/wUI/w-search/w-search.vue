<template>
	<view class="w-search" :style="{ backgroundColor: bgColor }">
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
			<view class="filter" v-if="filter" @click="openPop">
				<view class="name">条件筛选</view>
				<u-icon name="arrow-down-fill" color="#0088f1" size="14"></u-icon>
			</view>
		</view>
		<u-popup round="20" :show="show" mode="top" :closeOnClickOverlay="false" @close="close">
			<view class="popContent" v-if="filterList.length > 0">
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
		<view v-for="(item, index) in filterList" :key="index">
			<w-picker
				:date="item.date"
				:dateMode="item.dateMode"
				:show="item.show"
				v-model="item[item.prop]"
				@confirm="selectConfirm(index)"
				@close="selectClose(index)"
				:list="item.data"
				:keyName="item.keyName"
			></w-picker>
		</view>
	</view>
</template>

<script>
import dayjs from 'dayjs'
export default {
	props: {
		bgColor: {
			type: String,
			default: '#eee'
		},
		defaultValue: {
			type: String,
			default: '请输入'
		},
		list: {
			type: Array,
			default: () => []
		},
		filter: {
			type: Boolean,
			default: true
		}
	},
	watch: {
		list: {
			immediate: true,
			deep: true,
			handler(news) {
				if (this.filterList.length < 1) {
					this.filterList = news
				} else {
					return
				}
			}
		}
	},
	data() {
		return {
			show: false,
			searchValue: '',
			filterList: []
		}
	},
	methods: {
		close() {
			this.filterList.forEach(item => (item.show = false))
			this.show = false
		},
		openPop() {
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
			this.$emit('search', '')
		},
		selectConfirm(index) {
			this.filterList[index].show = false
		},
		selectClose(index) {
			this.filterList[index].show = false
		},
		openSelect(index) {
			this.filterList.forEach(item => (item.show = false))
			this.filterList[index].show = true
		},
		reset() {
			const list = this.filterList
			list.forEach(item => {
				item.show = false
				item[item.prop] = ''
			})
			this.filterList = list
		},
		confirm() {
			const data = this.filterList
			const searchParams = {}
			data.forEach(item => {
				item.show = false
				searchParams[item.prop] = item[item.prop]
			})
			this.$emit('confim', searchParams)
			this.show = false
		}
	}
}
</script>

<style lang="scss" scoped>
.w-search {
	.search {
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
