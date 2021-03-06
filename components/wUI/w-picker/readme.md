#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|value|v-model双向绑定的属性|-|-|
|show|控制是否显示|boolean|false|
|list|渲染的数组列表|array|[]|
|keyName|数组绑定的key值，即需要显示的值|string|-|
|date|使用日期选择器|boolean|false|
|dateMode|日期模式|string|`完整时间:'datetime' 年月日: 'date'`  `时分: 'time'` `月份：'year-month'`|



#### events

|事件名称|作用|
|-|-|
|confirm|点击确定时，返回选择的item|
|close|点击取消时|


#### 使用举例

```html
<template>
   <w-picker
   	date
   	:show="show"
   	v-model="pickerValue"
   	@confirm="selectConfirm"
   	@close="selectClose"
   ></w-picker>
</template>
<script>
  export default {
    data() {
      return {
        pickerValue: '',
				show:false,
        cellList: [
          {
            name: '版本更新',
            url: ''
          },
          {
            name: '物资管理',
            url: ''
          },
          {
            name: '人员管理',
            url: ''
          }
        ]
      };
    },
    methods: {
     selectClose() {
     	this..show = false
     },
     openSelect() {
     	this..show = true
     },
    },
  }
</script>
```