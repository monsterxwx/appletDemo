<template>
	<w-layout class="index">
		<template #common>
			<view class="title">标题</view>
		</template>
		<template #scroll>
			<view class="test ">
				<w-select
					style="margin-left: 20rpx;margin-bottom: 20rpx;"
					v-model="valueData"
					:list="checkboxList"
					valueName="label"
					keyName="label"
				></w-select>
				<div class="color-red text-24">{{ valueData }}</div>
			</view>
		</template>
		<template #bottom>
			<w-button name="show1" @click="show1"></w-button>
		</template>
	</w-layout>
</template>
<script>
export default {
	data() {
		return {
			title: 'Hello',
			loading: false,
			valueData: '',
			checkboxList: [
				{
					label: '苹果',
					test: false
				},
				{
					label: '香蕉',
					test: false
				},
				{
					label: '橙子',
					test: false
				},
				{
					label: '橙子1',
					test: false
				},
				{
					label: '橙子2',
					test: false
				},
				{
					label: '橙子3',
					test: false
				},
				{
					label: '橙子4',
					test: false
				},
				{
					label: '橙子5',
					test: false
				},
				{
					label: '橙子6',
					test: false
				},
				{
					label: '橙子7',
					test: false
				},
				{
					label: '橙子8',
					test: false
				}
			]
		}
	},
	onLoad() {
		setTimeout(() => {
			this.loading = true
		}, 500)
	},
	methods: {
		show1() {
			this.loading = !this.loading
		}
	}
}
</script>
<style lang="scss" scoped>
.index {
	.title {
		text-align: center;
		font-size: 40rpx;
		font-weight: 700;
		padding: 20rpx;
	}
}
</style>
