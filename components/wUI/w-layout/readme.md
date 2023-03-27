#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|bgColor|修改背景颜色|String|'#eeeeee'|
|safeBottom|ios安全底部|Boolean|true|
|refresh|是否开启下拉刷新|Boolean|false|
|isRefresh|下拉刷新状态，true为刷新中，获取完数据后为false|Boolean|false|
|scrollStyle|滚动的样式|String|'height: 100%;'|


#### slots

|插槽名称|作用|
|-|-|
|common|普通展示的内容|
|scroll|需要滚动的内容，占比为flex：1|
|bottom|底部需要显示的内容|


#### events

|事件名称|作用|
|-|-|
|lower|滚动到底部触发|
|refresh|下拉刷新时触发|

#### 使用举例

```javascript
<w-layout class="index">
    <template #common> 
     <view class="title">
       标题
     </view>
     </template>
    <template #scroll>
      <view class="" v-for="item in 100"> test{{item}}
      </view>
    </template>
    <template #bottom>
      <w-button class="animation-slide-bottom" name="show1" @click='show1'></w-button>
    </template>
  </w-layout>
```