<template>
	<view class="w-select">
		<view :class="isShow ? 'select-wrap-active' : ''" class="select-wrap" @click="changeShow">
			<view v-if="multiple" class="select-content">
				<view class="select-content-item-default" v-if="multiSelectList.length === 0">
					{{ defaultValue }}
				</view>
				<view class="select-content-item" v-if="multiSelectList.length > 0">
					{{ multiSelectList[0][valueName] }}
				</view>
				<view class="select-content-item" v-if="multiSelectList.length > 1">{{ multiLength }}</view>
			</view>
			<input
				v-if="!multiple || filterable"
				type="text"
				@input="inputChange"
				:placeholder="defaultValue"
				:disabled="!filterable"
				v-model="inputData"
			/>
			<view @click.stop="refreshValue" class="close-icon" v-if="showClose && value.length > 0">
				<image :src="refreshUrl" mode=""></image>
			</view>
			<view
				v-if="value.length <= 0 || !showClose"
				:class="isShow ? 'w-select-arrow-up' : ''"
				class="w-select-arrow "
			/>
			<view
				v-show="optionsShow"
				:class="isShow ? 'animation-top' : 'animation-bottom'"
				class="select-options"
			>
				<view
					@click.stop="handleClickItem(item)"
					:class="
						multiple && multiSelectList.find(res => res[keyName] === item[keyName])
							? 'item-active'
							: value === item[keyName]
							? 'item-active'
							: ''
					"
					v-for="item in filterList"
					class="select-option-item"
				>
					{{ item[valueName] }}
				</view>
				<view class="options-no-data" v-if="filterList.length < 1">无匹配数据~</view>
			</view>
		</view>
		<view v-if="isShow" @click="closeContentSelect" class="contentMask"></view>
	</view>
</template>

<script>
export default {
	props: {
		//是否多选
		multiple: {
			type: Boolean,
			default: false
		},
		//是否可搜索
		filterable: {
			type: Boolean,
			default: false
		},
		//是否显示关闭按钮
		showClose: {
			type: Boolean,
			default: false
		},
		//渲染列表
		list: {
			type: Array,
			default: () => [],
			required: true
		},
		//双向绑定的值
		value: {
			type: [Array, String, Number],
			default: ''
		},
		//默认显示的内容
		defaultValue: {
			type: String,
			default: '请选择'
		},
		//显示的内容
		valueName: {
			type: String,
			required: true
		},
		// 绑定的内容
		keyName: {
			type: String,
			required: true
		}
	},
	watch: {
		list: {
			immediate: true,
			deep: true,
			handler(news) {
				this.filterList = news
				const findItem = news.find(item => item[this.keyName] === this.value)
				if (findItem) {
					this.inputData = findItem[this.valueName]
				}
			}
		}
	},
	computed: {
		multiLength() {
			const length = this.multiSelectList.length - 1
			return '+' + length
		}
	},
	data() {
		return {
			inputData: '',
			multiSelectList: this.multiple ? this.value : [],
			isShow: false,
			optionsShow: false,
			filterList: [],
			refreshUrl:
				'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik0yNCA0NEMzNS4wNDU3IDQ0IDQ0IDM1LjA0NTcgNDQgMjRDNDQgMTIuOTU0MyAzNS4wNDU3IDQgMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRaIiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzZlNmUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yOS42NTY5IDE4LjM0MzFMMTguMzQzMiAyOS42NTY4IiBzdHJva2U9IiM3YzZlNmUiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE4LjM0MzIgMTguMzQzMUwyOS42NTY5IDI5LjY1NjgiIHN0cm9rZT0iIzdjNmU2ZSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4='
		}
	},
	methods: {
		changeShow() {
			this.isShow = !this.isShow
			if (this.isShow === false) {
				this.filterList = this.list
				setTimeout(() => {
					this.optionsShow = false
				}, 200)
			} else {
				this.optionsShow = this.isShow
			}
		},
		closeContentSelect() {
			this.isShow = false
			setTimeout(() => {
				this.optionsShow = false
			}, 200)
		},
		inputChange(e) {
			const value = e.detail.value
			this.$emit('input', value)
			this.filterList = this.list.filter(item => item[this.valueName].includes(value))
		},
		refreshValue() {
			this.$emit('input', '')
			this.inputData = ''
			this.$emit('change', '')
			this.filterList = this.list
			if (this.multiple) {
				this.multiSelectList = []
			}
		},
		handleClickItem(e) {
			if (this.multiple) {
				this.multiSelect(e)
			} else {
				this.$emit('input', e[this.keyName])
				this.inputData = e[this.valueName]
				this.$emit('change', e)
				this.changeShow()
			}
		},
		multiSelect(item) {
			let index = this.multiSelectList.findIndex(
				res => res[this.valueName] === item[this.valueName]
			)
			if (index > -1) {
				this.multiSelectList.splice(index, 1)
			} else {
				this.multiSelectList.push(item)
			}
			this.inputData = ''
			this.filterList = this.list
			this.$emit('input', this.multiSelectList)
			this.$emit('change', item)
		}
	}
}
</script>
<style lang="scss" scoped>
.w-select {
	--select-wrap-width: 200px;
	--select-wrap-height: 30px;
	--select-border-radius: 4px;
	--select-border: 1px solid #dcdfe6;
	--select-active-border: 1px solid #409eff;
	--select-options-max-height: 150px;
	--select-option-item-font-size: 14px;
	--select-input-font-size: 14px;
	--no-data-default-color: #999999;
	--select-options-box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
	.select-wrap {
		position: relative;
		width: var(--select-wrap-width);
		height: var(--select-wrap-height);
		border-radius: var(--select-border-radius);
		transition: all 0.2s;
		border: var(--select-border);
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		input {
			flex: 1;
			min-width: 0;
			width: 100%;
			height: 100%;
			padding: 0 2px;
			font-size: var(--select-input-font-size);
		}
		.select-content {
			font-size: var(--select-option-item-font-size);
			display: flex;
			align-items: center;
			.select-content-item {
				background-color: #f4f4f5;
				border-radius: var(--select-border-radius);
				color: #aa93b1;
				margin-left: 5px;
				padding: 2px 6px;
			}
			.select-content-item-default {
				color: var(--no-data-default-color);
				margin-left: 5px;
			}
		}
		.close-icon {
			width: 15px;
			height: 15px;
			position: absolute;
			right: 7px;
			top: 50%;
			z-index: 1000;
			transform: translateY(-50%);
			image {
				width: 100%;
				height: 100%;
			}
		}
		.select-options {
			position: absolute;
			left: 0;
			right: 0;
			top: var(--select-wrap-height);
			margin-top: 10px;
			border-radius: var(--select-border-radius);
			background-color: #fff;
			box-shadow: var(--select-options-box-shadow);
			z-index: 999;
			max-height: var(--select-options-max-height);
			overflow-y: auto;
			padding: 10px;
			.select-option-item {
				transition: background-color 0.2s;
				padding: 5px;
				font-size: var(--select-option-item-font-size);
				margin-bottom: 5px;
			}
			.item-active {
				background-color: #f5f7fa;
				color: #409eff;
				font-weight: 700;
			}
			.options-no-data {
				color: var(--no-data-default-color);
				text-align: center;
				font-size: var(--select-option-item-font-size);
			}
		}
		.w-select-arrow {
			transition: all 0.3s;
			border-left: 1px solid #999999;
			border-bottom: 1px solid #999999;
			height: 8px;
			width: 8px;
			margin: 3px 10px 0;
			transform: translateY(-50%) rotate(-45deg);
			-webkit-transform: translateY(-50%) rotate(-45deg);
			border-right: 1px solid transparent;
			border-top: 1px solid transparent;
			display: inline-block;
		}
		.w-select-arrow-up {
			transform: rotate(-225deg);
		}
	}
	.select-wrap-active {
		border: var(--select-active-border);
	}
	.animation-top {
		animation-name: slide-top;
		animation-duration: 0.4s;
		animation-timing-function: ease-out;
		animation-fill-mode: both;
	}
	.animation-bottom {
		animation-name: slide-bottom;
		animation-duration: 0.2s;
		animation-timing-function: ease-out;
		animation-fill-mode: both;
	}

	@keyframes slide-top {
		0% {
			opacity: 0;
			transform: translateY(-15%);
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
			transform: translateY(-20%);
		}
	}
	.contentMask {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		z-index: 998;
	}
}
</style>
