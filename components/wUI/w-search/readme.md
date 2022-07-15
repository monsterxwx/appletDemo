#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|defaultValue|搜索框默认显示的文字|string|''|
|list|配置search类型|array|[]|

#### events

|事件名称|作用|
|-|-|
|search|失去焦点后触发搜索事件|
|confim|点击确认搜索后的事件|

#### 使用举例
```
<template>
		<w-search 
			:list="searchList" 
			@search='searchChange' 
			@confim='searchFilterChange'
			>
		</w-search>

</template>

<script>
export default {
	data() {
		return {
			searchList: [
				{
					prop: 'test',
					test: '',
					title: 'test',
					defaultValue: '请选择',
					show: false,
					keyName: 'name',
					data: [{ name: '1' }, { name: '2' }, { name: '3' }]
				},
				{
					prop: 'startTime',
					startTime: '',
					title: '开始时间',
					defaultValue: '请选择开始时间',
					show: false,
					date: true,
					dateMode: 'datetime'
				},
				{
					prop: 'endTime',
					endTime: '',
					title: '结束时间',
					defaultValue: '请选择结束时间',
					show: false,
					date: true,
					dateMode: 'datetime'
				}
			]
		}
	},
	methods: {
		searchChange(e) {
			console.log(e)
		},
		searchFilterChange(e) {
			console.log(e)
		}
	},
}
</script>


```