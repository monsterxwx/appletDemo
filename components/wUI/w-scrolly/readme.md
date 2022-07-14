#### props

|参数|说明|类型|默认值|可选值|
|-|-|-|-|-|
|loading|加载的状态|string|'loadmore'|'loading','nomore','loadmore'|
|height|滚动高度|string|‘100%’||


#### events

|事件名称|作用|
|-|-|
|bottom|滚动到底部时触发|


#### slots

默认插槽

#### 使用举例

```html
<template>
    <w-scrolly :loading="status" @bottom="reachBottom">
       内容
    </w-scrolly>
</template>
<script>
  export default {
    data() {
      return {
        status: 'loadmore'
      }
    },
    methods: {
      reachBottom() {
        if (this.checkRecordList.length < this.search.total) {
          this.search.pageNum++
          this.getCheckRecordList()
        } else {
          this.status = 'nomore'
        }
      }
    }
  }
</script>
```