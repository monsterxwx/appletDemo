<template>
	<view class="w-check-box">
		<!-- 只有一个选项的选择 -->
		<view
			v-if="!multiple && !radio"
			class="w-check-box-radio"
			:style="{ 'justify-content': location === 'left' ? 'flex-start' : 'flex-end' }"
		>
			<view
				@click="handleClick"
				:class="[value ? 'checked' : '', shape == 'circle' ? 'circle' : '']"
				class="checkbox"
			>
				<image
					v-if="value"
					class="arrow"
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEwIDE1LjE3Mmw5LjE5Mi05LjE5MyAxLjQxNSAxLjQxNEwxMCAxOGwtNi4zNjQtNi4zNjQgMS40MTQtMS40MTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIi8+PC9zdmc+"
					mode=""
				></image>
			</view>
			<view @click="handleClick" class="text"><slot></slot></view>
		</view>
		<!-- 多个选项的选择，多选 -->
		<view v-if="multiple" class="w-check-box-multiple">
			<u-checkbox-group
				@change="checkboxChange"
				v-model="multipleData"
				:borderBottom="borderBottom"
				:placement="column ? 'column' : 'row'"
				:iconPlacement="iconPlacement"
			>
				<u-checkbox
					:customStyle="{ marginRight: '12rpx', marginBottom: '16rpx' }"
					v-for="(item, index) in list"
					:key="index"
					:shape="shape"
					:label="item[keyName]"
					:name="item[keyName]"
					:disabled="disabled ? true : item.disabled"
				></u-checkbox>
			</u-checkbox-group>
		</view>
		<!-- 多个选项的选择，单选 -->
		<view v-if="radio" class="w-check-box-multiple">
			<u-radio-group
				@change="checkboxChange"
				v-model="radioData"
				:borderBottom="borderBottom"
				:placement="column ? 'column' : 'row'"
				:iconPlacement="iconPlacement"
			>
				<u-radio
					:customStyle="{ marginRight: '12rpx', marginBottom: '16rpx' }"
					v-for="(item, index) in list"
					:key="index"
					:shape="shape"
					:label="item[keyName]"
					:name="item[keyName]"
					:disabled="disabled ? true : item.disabled"
				></u-radio>
			</u-radio-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isSelect: false,
			multipleData: [],
			radioData: ''
		}
	},

	props: {
		value: {
			type: [Boolean, Array, String],
			default: false
		},
		//单选时的位置控制,支持左右对齐
		location: {
			type: String,
			default: 'left'
		},
		//多个选项的多选
		multiple: {
			type: Boolean,
			default: false
		},
		//多个选项的单选
		radio: {
			type: Boolean,
			default: false
		},
		//多选的列表
		list: {
			type: Array,
			default: () => []
		},
		//展示的属性名称
		keyName: {
			type: String,
			default: 'name'
		},
		//形状
		shape: {
			type: String,
			default: 'square'
		},
		//是否开启纵向排布
		column: {
			type: Boolean,
			default: false
		},
		iconPlacement: {
			type: String,
			default: 'left'
		},
		//纵向选择时是否显示下划线
		borderBottom: {
			type: Boolean,
			default: false
		},
		//禁用全部选项
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {},
	methods: {
		handleClick() {
			this.isSelect = !this.isSelect
			this.$emit('input', this.isSelect)
			this.$emit('change', this.isSelect)
		},
		checkboxChange(value) {
			this.$emit('input', value)
			this.$emit('change', value)
		}
	}
}
</script>

<style lang="scss" scoped>
.w-check-box {
	.w-check-box-radio {
		padding: 10rpx;
		display: flex;
		align-items: center;
		.checkbox {
			width: 36rpx;
			height: 36rpx;
			background-color: #fff;
			border: 2rpx solid #c8c9cc;
			border-radius: 4rpx;
			position: relative;
			transition: all 0.3s;
		}
		.circle {
			border-radius: 50%;
			overflow: hidden;
		}
		.checked {
			background-color: #2979ff;
			border: none;
			position: relative;
			.arrow {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}

		.text {
			margin-left: 10rpx;
		}
	}
}
</style>
