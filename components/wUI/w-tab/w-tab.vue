<template>
	<view class="w-tab">
		<view class="top" :style="{ backgroundColor: bgColor }">
			<u-tabs
				:activeStyle="activeStyle"
				:inactiveStyle="inactiveStyle"
				:scrollable="scrollable"
				lineWidth="40"
				lineColor='#0078d4'
				:list="list"
				@change="change"
				:current="currentIndex"
			></u-tabs>
			<slot name='common'></slot>
		</view>

		<swiper class="swiper" @change="changeSwiper" :current="currentIndex">
			<swiper-item v-for="(item, index) in list" :key="item.name">
				<scroll-view
					v-if="index === currentIndex"
					style="height: 100%;"
					scroll-y
					:refresher-enabled="needRefresh"
					@refresherrefresh="refresh"
					:refresher-triggered="isRefresh"
					@scrolltolower="lower"
				>
					<slot name="{{index}}"></slot>
					<!-- #ifdef H5  -->
					<slot :name="index"></slot>
					<!-- #endif -->
					<!-- #ifdef MP -->
					<slot name="{{index}}"></slot>
					<!-- #endif -->
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="bottom"><slot name="bottom"></slot></view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => []
		},
		scrollable:{
			type:Boolean,
			default:false
		},
		activeStyle: {
			type: Object,
			default: () => ({ color: '#0078d4', fontWeight: 'bold', transform: 'scale(1.05)' })
		},
		inactiveStyle: {
			type: Object,
			default: () => ({ color: '#858689', transform: 'scale(1)' })
		},
		bgColor: {
			type: String,
			default: '#fff'
		},
		//是否开启下拉刷新
		needRefresh: {
			type: Boolean,
			default: false
		},
		//记录是否刷新成功，在获取数据前将值设置为TRUE，获取数据后设置为FALSE
		isRefresh: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			currentIndex: 0
		}
	},
	methods: {
		change(e) {
			this.currentIndex = e.index
		},
		changeSwiper(e) {
			this.currentIndex = e.detail.current
			this.$emit('change',e.detail.current)
		},
		//滑动到底部触发
		lower() {
			this.$emit('bottom')
		},
		//上拉刷新
		refresh() {
			this.$emit('refresh')
		}
	}
}
</script>

<style lang="scss" scoped>
.w-tab {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;

	.swiper {
		flex: 1 0;
		min-height: 0;
	}
}
</style>
