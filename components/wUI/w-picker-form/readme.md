#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|value|v-model双向绑定的属性|-|-|
|width|设置显示的宽度|string|'550rpx'|
|defaultValue|默认显示内容|string|''|
|bgColor|背景颜色|string|'#eee'|
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
   <w-picker-form
   	width='100%'
   	defaultValue="请选择日期"
   	date
   	dateMode="datetime"
   	v-model="pickerValue"
   ></w-picker-form>
</template>
<script>
  export default {
    data() {
      return {
        pickerValue: ''
      };
    },
    methods: {

    },
  }
</script>
```