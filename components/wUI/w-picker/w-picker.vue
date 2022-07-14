<template>
	<view>
		<w-show-select :showDate='date' :defaultValue="defaultValue" :bgColor="bgColor" :value="value" :width="width"
		  @click='openPicker'>
		</w-show-select>
		<!-- 普通选择 -->
		<u-picker v-if='!date' closeOnClickOverlay @close='close' @confirm="confirm" @cancel="close" :show="show"
		  :columns="dataList" :keyName="keyName">
		</u-picker>
		<!-- 日期选择 -->
		<u-datetime-picker v-else closeOnClickOverlay @close='close' @cancel="close" @confirm="confirm" :show="show"
		  v-model="dateData" :mode="dateMode"></u-datetime-picker>
	</view>
</template>
<script>
	import dayjs from 'dayjs'
	export default {
		name: "wPicker",
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
			//默认显示的文字
			defaultValue: {
				type: String,
				default: ''
			},
			bgColor: {
				type: String,
				default: '#eee'
			},
			//绑定的值
			value: {
				default: ''
			},
			//设置宽度
			width: {
				type: String,
				default: '550rpx'
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
				show: false,
				dateData: dayjs().valueOf()
			}
		},
		methods: {
			openPicker() {
				this.show = true
			},
			confirm(e) {
				//当模式为日期选择器时
				if (this.date) {
					if(this.dateMode=='datetime') {
						this.$emit('input', dayjs(e.value).format('YYYY-MM-DD HH:mm:ss'))
					}else if(this.dateMode=='date') {
						this.$emit('input', dayjs(e.value).format('YYYY-MM-DD'))
					}				
					this.$emit('confirm', e.value)
				} else {
					this.$emit('input', e.value[0][this.keyName])
					this.$emit('confirm', e.value[0])
				}
				this.show = false
			},
			close() {
				this.$emit('close')
				this.show = false
			}
		},
	}
</script>
<style lang="scss" scoped>
</style>
