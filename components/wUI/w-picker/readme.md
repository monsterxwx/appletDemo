#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|defaultValue|默认显示的文字|string|-|
|bgColor|背景颜色|string|'#eee'|
|value|v-model双向绑定的属性|-|-|
|width|宽度大小|string|'550rpx'|
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
    <w-picker defaultValue="测试" 
              v-model='pickerValue' 
              @confirm='confirm' 
              :list="cellList" 
              keyName="name"
              bgColor='#fff'>
    </w-picker>
</template>
<script>
  export default {
    data() {
      return {
        pickerValue: '',
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
      confirm(e) {
        console.log('pickerValue', this.pickerValue)
        console.log('e', e)
      },
    },
  }
</script>
```