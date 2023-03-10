#### props

| 名称				| 类型		| 默认值	| 说明																									|
| ------------| -------	| --------| ------------------------------------------------------|
| defaultValue| string	| '请选择'| 默认显示的名称																				|
| valueName		| string	| 'value'	| 显示的内容字段名,必传																	|
| list				| array		| []			| 展示的内容列表,必传																		|
| showClose		| boolean	| true		| 是否显示删除按钮																			|
| multiple		| boolean	| false		| 是否开启多选																					|
| filterable	| boolean	| false		| 是否开启搜索功能，开启后直接输入值不选择也可以保存内容|


#### events

| 事件名 | 说明                                          |
| ------ | --------------------------------------------- |
| change | 选择的内容改变时触发，返回的参数为列表的 item |

#### 使用举例

需要绑定的值通过`v-model`绑定，如下面的`chooseValue`，单选绑定的值为字符串，多选绑定的值为数组，给定默认值同理

需要获取 item 的值可以监听`@change`事件

开启多选`multiple`时，双向绑定的值为数组类型，在 change 事件中根据自己需求进行处理。

`valueName`属性必须传，告知组件需要显示的是什么值

```html
<template>
	<view class="login">
		<w-select
			style="margin-left: 20rpx;"
			v-model="chooseValue"
			defaultValue="所有审批人"
			:list="list"
			valueName="content"
			@change="change"
		></w-select>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				chooseValue: '',
				list: [
					{
						id: 1,
						content: '张三'
					},
					{
						id: 2,
						content: '李四'
					},
					{
						id: 3,
						content: '王五'
					}
				]
			}
		},
		methods: {
			change(e) {
				console.log('chooseValue', this.chooseValue)
			}
		}
	}
</script>
```

#### css变量

```css
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
```
