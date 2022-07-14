<template>
	<!-- 	<view>
		<u-upload
			:fileList="fileList"
			@afterRead="afterRead"
			@delete="deletePic"
			name="1"
			multiple
			:maxCount="9"
		></u-upload>
	</view> -->
	<w-tab :list="list">
		<template #0>
			<view class="" v-for="item in 100" :key="item">{{ item }}</view>
		</template>
		<template #1>
			<movable-area style="width: 200rpx;height: 200rpx;background-color: red;">
				<movable-view
					direction="all"
					style="width: 50rpx;height: 50rpx;border-radius: 50%; background-color: yellow;"
				></movable-view>
			</movable-area>
		</template>
		<template #2>
			<map
				style="width: 100%; height: 300px;"
				latitude="39.909"
				longitude="116.39742"			
			></map>
		</template>
	</w-tab>
</template>
<script>
export default {
	data() {
		return {
			fileList: [],
			list: [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }]
		}
	},
	methods: {
		// 删除图片
		deletePic(event) {
			this.fileList.splice(event.index, 1)
		},
		// 新增图片
		async afterRead(event) {
			try {
				const data = await this.$api.uploadImg(event, this.fileList)
				console.log('数组', data)
			} catch (e) {
				console.log(this.fileList)
			}
		}
	}
}
</script>
<style lang="scss" scoped></style>
