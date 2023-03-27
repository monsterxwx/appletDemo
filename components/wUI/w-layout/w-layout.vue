<template>
	<view
		class="wLayout"
		:style="{ backgroundColor: bgColor }"
	>
		<slot name="common"></slot>
		<view
			:class="safeBottom ? 'ios-safe-bottom' : ''"
			class="scroll-content "
		>
			<scroll-view
				scroll-y
				:style="scrollStyle"
				@scrolltolower="lower"
				:refresher-enabled="refresh"
				:refresher-triggered="isRefresh"
				@refresherrefresh="handleRefresh"
			>
				<slot name="scroll"></slot>
			</scroll-view>
		</view>
		<slot name="bottom"></slot>
	</view>
</template>
<script>
export default {
	name: 'wLayout',
	props: {
		bgColor: {
			type: String,
			default: '#eeeeee'
		},
		safeBottom: {
			type: Boolean,
			default: true
		},
		refresh: {
			type: Boolean,
			default: false
		},
		isRefresh: {
			type: Boolean,
			default: false
		},
		scrollStyle: {
			type: String,
			default: 'height: 100%;'
		}
	},
	data() {
		return {}
	},
	methods: {
		lower() {
			this.$emit('lower')
		},
		handleRefresh() {
			this.$emit('refresh')
		}
	}
}
</script>
<style lang="scss" scoped>
.wLayout {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;

	.scroll-content {
		flex: 1 0;
		min-height: 0;
	}
}
</style>
