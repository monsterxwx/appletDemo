#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|list|列表数据|array|-|
|activeStyle|活跃时候的样式|object|{ color: '#303133', fontWeight: 'bold', transform: 'scale(1.05)' }|
|inactiveStyle|默认显示样式|object|{ color: '#606266', transform: 'scale(1)' }|
|bgColor|背景颜色|string|'#fff'|
|needRefresh|是否开启下拉刷新|boolean|false|
|isRefresh|记录是否刷新成功，在获取数据前将值设置为TRUE，获取数据后设置为FALSE|boolean|false|


#### events

|事件名|说明|
|-|-|
|bottom|滑动到底部触发|
|refresh|上拉刷新|


#### 使用举例

```JavaScript
    <w-tab :list="list">
      <template #0>
        <view class="" v-for="item in 100" :key="item">{{ item }}</view>
      </template>
      <template #1>
        111
      </template>
      <template #2>
        222
      </template>
    </w-tab>
    
    data() {
      return {
        list:[
          {name:'test1'},
          {name:'test2'},
          {name:'test3'}
        ]
      }
    }
```