#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|formInfo|表单内容|object|-|
|marginTop|是否有上边距|boolean|false|
|value|v-model绑定的表单数据|object|-|
|labelPosition|左侧文字的位置|string|'#left'|
|labelStyle|表单左侧文字样式|object|{ color: '#0078d4', fontSize: '28rpx' }|
|formStyle|表单样式|object|-|
|labelWidth|表单左侧的宽度|string|'140rpx'|

#### events

|事件名称|作用|
|-|-|
|inputBlur|输入框失去焦点后触发，参数第一个为当前输入框的值，第二个为属性名|

#### 使用举例

```Vue
<template>
	<w-layout class="">
		<template #common>
			<w-form
				labelWidth="190rpx"
				marginTop
				ref="taskRef"
				:formInfo="formInfo"
				v-model="formData"
			>
				<template #trailName>
					<view style="width: 100%;">{{ trailName }}</view>
				</template>
				<template #typeName>
					<view style="width: 100%;"><w-select width="400rpx"></w-select></view>
				</template>
				<template #ffCode>
					<view style="width: 100%;"><w-select width="400rpx"></w-select></view>
				</template>
				<template #planStartDate>
					<view style="width: 100%;">
						<w-picker
							width="100%"
							date
							dateMode="datetime"
							defaultValue="请选择日期"
							v-model="formData.planStartDate"
						></w-picker>
					</view>
				</template>
				<template #workUser>
					<view style="width: 100%;"><w-select width="400rpx"></w-select></view>
				</template>
			</w-form>
		</template>
		<template #scroll></template>
		<template #bottom>
			<w-button @click="addMask">提交</w-button>
		</template>
	</w-layout>
</template>

<script>
import dayjs from 'dayjs'
export default {
	data() {
		return {
			formInfo: [
				{
					type: `slot`,
					label: '任务名称:',
					model: 'trailName'
				},
				{
					type: `input`,
					label: '开始桩号:',
					model: 'startPileNo',
					required: true,
					placeholder: `请输入开始桩号`,
					rule: true
				},
				{
					type: `input`,
					label: '结束桩号:',
					required: true,
					model: 'endPileNo',
					placeholder: `请输入结束桩号`,
					rule: true
				},
				{
					type: `slot`,
					label: '工程部位:',
					model: 'typeName',
					required: true,
					placeholder: `请选择工程部位`,
					rule: true
				},
				{
					type: `slot`,
					label: '幅别:',
					model: 'ffCode',
					required: true,
					placeholder: `请选择幅别`,
					rule: true
				},
				{
					type: `input`,
					inputType: 'number',
					label: '碾压遍数要求:',
					model: 'rollOverTimes',
					required: true,
					placeholder: `请输入碾压遍数要求`,
					rule: true
				},
				{
					type: `slot`,
					label: '计划开始时间:',
					required: true,
					model: 'planStartDate'
				},
				{
					type: `slot`,
					label: '施工负责人:',
					required: true,
					model: 'workUser',
					placeholder: `请选择施工负责人`,
					rule: true
				}
			],
			formData: {
				trailName: '',
				startPileNo: '',
				endPileNo: '',
				workState: '',
				workType: '',
				typeName: '',
				ffCode: '',
				rollOverTimes: 7,
				planStartDate: '',
				workUser: wx.getStorageSync('userInfo').login_name
			}
		}
	},
	computed: {
		trailName() {
			if (!this.formData.startPileNo) {
				return '-'
			} else {
				return (
					this.formData.startPileNo +
					'~' +
					this.formData.endPileNo +
					' ' +
					this.formData.workType +
					' ' +
					this.formData.ffCode
				)
			}
		}
	},
	methods: {
		async addMask() {
			try {
				console.log(this.formData)
				await this.$refs.taskRef.$refs['formRef'].validate()
			} catch (e) {
				//TODO handle the exception
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>

```