<template>
	<view class="wLayout" :style="{backgroundColor:bgColor}">
		<slot name="common"></slot>
		<view class='scroll-content'>
			<slot name="scroll"></slot>
		</view>
		<slot name='bottom'></slot>
	</view>
</template>
<script>
	export default {
		name: "wLayout",
		props: {
			bgColor: {
				type: String,
				default: '#eeeeee'
			},
		},
		data() {
			return {};
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
			overflow: auto;
		}
	}
</style>
