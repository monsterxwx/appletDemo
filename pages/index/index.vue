<template>
	<w-layout class="index">
		<template #common>
			<view class="title">标题</view>
		</template>
		<template #scroll>
			<view class="test ">
				<w-select
					style="margin-left: 20rpx;margin-bottom: 20rpx;"
					defaultValue="所有水果"
					v-model="valueData"
					:list="checkboxList"
					valueName="label"
				></w-select>
				<u-transition :show="loading" mode="slide-down">
					<w-check-box v-model="loading">记住密码</w-check-box>
				</u-transition>

				<!-- <view style="margin: 20rpx;">{{valueData}}</view> -->
				<!-- <w-card v-if="loading" class="animation-top"></w-card> -->
				<!-- <w-card class="" v-for="item in 100">test{{ item }}</w-card> -->
				<!-- <u-input clearable bgColor='#fff' placeholder="hh" /> -->
			</view>
		</template>
		<template #bottom>
			<w-button class="animation-slide-bottom" name="show1" @click="show1"></w-button>
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
	.test {
		transition: all 0.6s;
		// animation-name: slide-top;
		// animation-duration: 0.5s;
		// animation-timing-function: ease-out;
		// animation-fill-mode: both;
	}
	.animation-top {
		animation-name: slide-top;
		animation-duration: 0.5s;
		animation-timing-function: ease-out;
		animation-fill-mode: both;
	}

	@keyframes slide-top {
		0% {
			opacity: 0;
			transform: translateY(-100%);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slide-bottom {
		0% {
			opacity: 1;
			transform: translateY(0);
		}

		100% {
			opacity: 0;
			transform: translateY(-100%);
		}
	}
}
</style>
