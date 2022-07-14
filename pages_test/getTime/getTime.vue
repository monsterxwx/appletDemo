<template>
	<w-layout class="">
		<template #common>
			<w-button name="获取时间" @click="getCurrentTime"></w-button>
		</template>
		<template #scroll>
			{{ nowTime }}
		</template>
	</w-layout>
</template>
<script>
import dayjs from 'dayjs'
export default {
	data() {
		return {
			nowTime: ''
		}
	},
	onShow() {
		this.getCurrentTime()
	},
	methods: {
		getCurrentTime() {
			this.nowTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
			console.log('当前时间', this.nowTime)
			const nowSecondTimestamp = dayjs(this.nowTime).unix()
			console.log('当前时间转换为秒级时间戳', nowSecondTimestamp)
			const nowMillisecondTimestamp = dayjs(this.nowTime).valueOf()
			console.log('当前时间转换为毫秒级时间戳', nowMillisecondTimestamp)
		}
	}
}
</script>
<style lang="scss" scoped></style>
