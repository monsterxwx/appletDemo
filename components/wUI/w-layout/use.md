#### slots

|插槽名称|作用|
|-|-|
|common|普通展示的内容|
|scroll|需要滚动的内容，占比为flex：1|
|bottom|底部需要显示的内容|


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