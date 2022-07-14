<template>
	<view class="">
		<w-form
			marginTop
			ref="testRef"
			:formInfo="formDataProps.formInfo"
			:formData.sync="formDataProps.formData"
		>
			<template #picker>
				<input class="baseInput" v-model="formDataProps.formData.hhh" />
			</template>
		</w-form>
		<w-button @click='clearForm'>重置</w-button>
		<w-button @click='testFormSubmit'>提交</w-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formDataProps: {
				formInfo: [
					{
						type: `slot`,
						label: '台座编号',
						borderBottom: true,
						model: 'picker'
					},
					{
						type: `input`,
						label: '姓名',
						model: 'name',
						borderBottom: true,
						required: true,
						rule:true,
						placeholder: `请输入姓名`
					},
					{
						type: `input`,
						label: '性别',
						model: 'sex',
						borderBottom: true,
						placeholder: `请输入性别`
					},
					{
						type: `textarea`,
						label: '文本域',
						model: 'area',
						borderBottom: true,
						placeholder: `请输入area`
					},
					{
						type: `switch`,
						label: '是否流转',
						model: 'isLiu'
					}
				],
				formData: {
					name: '',
					area: '',
					isLiu:''
				},
			}
		}
	},
	methods: {
		async testFormSubmit() {
			try {
				await this.$refs[`testRef`].$refs[`formRef`].validate()
				// console.log(this.$refs[`testRef`].$refs[`formRef`])
				// const flag =  this.$refs.testRef.validate()
				this.$message.toast('成功')
				console.log(this.formDataProps.formData)
			} catch (e) {
				this.$message.toast('请填写必填项')
			}
		},
		clearForm() {
			// console.log(this.$options.data.call(this))
			this.formDataProps.formData = this.$options.data.call(this).formDataProps.formData
			console.log('ee', this.formDataProps.formData)
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
