<template>
	<view>
		<!-- 普通选择 -->
		<u-picker
			v-if="!date"
			closeOnClickOverlay
			@close="close"
			@confirm="confirm"
			@cancel="close"
			:show="show"
			:columns="dataList"
			:keyName="keyName"
		></u-picker>
		<!-- 日期选择 -->
		<u-datetime-picker
			v-else
			closeOnClickOverlay
			@close="close"
			@cancel="close"
			@confirm="confirm"
			:show="show"
			v-model="dateData"
			:mode="dateMode"
		></u-datetime-picker>
	</view>
</template>
<script>
import dayjs from 'dayjs'
export default {
	name: 'wPicker',
	props: {
		//使用日期选择器
		date: {
			type: Boolean,
			default: false
		},
		dateMode: {
			type: String,
			default: 'date' //日期模式有完整时间：datetime，年月日：date,时分：time，月份：year-month
		},
		//绑定的值
		value: {
			default: ''
		},
		show: {
			type: Boolean,
			default: false
		},
		//数组列表
		list: {
			default: () => []
		},
		//数组绑定的key值，即需要显示的值
		keyName: {
			default: ''
		}
	},
	computed: {
		dataList() {
			const List = []
			List.push(this.list)
			return List
		}
	},
	data() {
		return {
			dateData: dayjs().valueOf()
		}
	},
	methods: {
		confirm(e) {
			//当模式为日期选择器时
			if (this.date) {
				let formatTime = ''
				if (this.dateMode == 'datetime') {
					formatTime = dayjs(e.value).format('YYYY-MM-DD HH:mm:ss')
					this.$emit('input', formatTime)
				} else if (this.dateMode == 'date') {
					formatTime = dayjs(e.value).format('YYYY-MM-DD')
					this.$emit('input', formatTime)
				}
				this.$emit('confirm', formatTime)
			} else {
				this.$emit('input', e.value[0][this.keyName])
				this.$emit('confirm', e.value[0])
			}
		},
		close() {
			this.$emit('close')
		}
	}
}
</script>
<style lang="scss" scoped></style>
