

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
					dataList: [[{ name: '1' }, { name: '2' }, { name: '3' }]]
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