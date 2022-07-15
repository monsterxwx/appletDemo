<template>
	<view class="wPickerForm">
		<w-show-select
			@click="openSelect"
			:value="value"
			:bgColor="bgColor"
			:width="width"
			:showDate="date"
			:defaultValue="defaultValue"
		></w-show-select>
		<w-picker
			:show="show"
			:date="date"
			:dateMode="dateMode"
			v-model="selectData"
			:list="list"
			:keyName="keyName"
			@close="closeSelect"
			@confirm="confirm"
		></w-picker>
	</view>
</template>
<script>
export default {
	name: 'wPickerForm',
	props: {
		//使用日期选择器
		date: {
			type: Boolean,
			default: false
		},
		dateMode: {
			type: String,
			default: 'date'
		},
		//设置宽度
		width: {
			type: String,
			default: '550rpx'
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
		list: {
			type: Array
		},
		keyName: {
			type: String,
			default: 'name'
		}
	},
	data() {
		return {
			show: false,
			selectData: ''
		}
	},
	methods: {
		openSelect() {
			this.show = true
		},
		confirm(e) {
			console.log(e)
			if (this.date) {
				this.$emit('input', e)
			} else {
				this.$emit('input', e[this.keyName])
			}
			this.$emit('confirm', e)
			this.show = false
		},
		closeSelect() {
			this.$emit('close')
			this.show = false
		}
	}
}
</script>
<style lang="scss" scoped></style>
