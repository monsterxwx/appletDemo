<template>
	<view class="w-form">
		<view :style="formStyle" class="formStyle" :class="marginTop ? 'margin-top' : ''">
			<u-form
				:labelWidth="labelWidth"
				:labelStyle="labelStyle"
				:labelPosition="labelPosition"
				:model="tempData"
				:rules="rulesData"
				ref="formRef"
			>
				<u-form-item
					v-for="(item, index) in formInfo"
					:key="index"
					:required="item.required || false"
					:borderBottom="item.borderBottom || true"
					:label="item.label"
					:prop="item.model"
					:label-width="item.labelWidth"
				>
					<template v-if="item.type === `input`">
						<u-input
							@blur="inputBlur($event, item.model)"
							:bgColor="item.bgColor || '#fff'"
							:placeholder="item.placeholder"
							:type="item.inputType || 'text'"
							v-model="tempData[item.model]"
							border="surround"
							clearable
						></u-input>
					</template>
					<template v-if="item.type === `textarea`">
						<u--textarea
							v-model="tempData[item.model]"
							:placeholder="item.placeholder"
						></u--textarea>
					</template>
					<template v-if="item.type === `text`">
						{{ tempData[item.model] }}
					</template>
					<template v-if="item.type === `switch`">
						<u-switch v-model="tempData[item.model]"></u-switch>
					</template>
					<template v-if="item.type === `slot`">
						<!-- #ifdef H5  -->
						<slot :name="item.model"></slot>
						<!-- #endif -->
						<!-- #ifdef MP -->
						<slot name="{{item.model}}"></slot>
						<!-- #endif -->
					</template>
				</u-form-item>
			</u-form>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		formInfo: {
			type: Array,
			required: true,
			default: () => []
		},
		marginTop: {
			type: Boolean,
			default: false
		},
		value: {
			default: ''
		},
		labelPosition: {
			type: String,
			default: 'left'
		},
		labelStyle: {
			type: Object,
			default: () => ({ color: '#0078d4', fontSize: '28rpx' })
		},
		//表单样式
		formStyle: {
			type: Object,
			required: false,
			default: () => ({})
		},
		labelWidth: {
			type: String,
			default: '140rpx'
		}
	},
	watch: {
		tempData: {
			handler(newValueData) {
				this.$emit('input', newValueData)
			},
			deep: true,
			immediate: true
		},
		value: {
			deep: true,
			immediate: true,
			handler(newValueData) {
				this.tempData = newValueData
			}
		}
	},
	data() {
		return {
			tempData: this.value
		}
	},
	options: { styleIsolation: 'shared' },

	computed: {
		rulesData() {
			const rules = {}
			this.formInfo
				.filter(item => item.rule)
				.forEach(item => {
					rules[item.model] = {
						required: true,
						message: item.placeholder,
						trigger: ['blur', 'change']
					}
				})
			return rules
		}
	},
	methods: {
		inputBlur(e, prop) {
			const input = {
				value: e,
				prop: prop
			}
			this.$emit('inputBlur', input)
		}
	}
}
</script>
<style lang="scss" scoped>
.w-form {
	.formStyle {
		background-color: #fff;
		padding: 0 30rpx;
	}
}
/deep/ .u-input {
	// border: none;
}
/deep/ .u-textarea {
	background-color: #eee;
	border: none;
}
</style>
