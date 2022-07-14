#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|value|显示的文字|string|-|
|showDate|是否显示日期图标|boolean|false|
|defaultValue|默认显示的值|string|'默认值'|
|width|宽度大小|string|'100%'|
|bgColor|背景颜色|string|'#EEE'|
|height|高度大小|string|'60rpx'|


#### events

|事件名称|作用|
|-|-|
|click|点击时|


#### 使用举例

```html
<w-show-select :defaultValue="defaultValue" 
               :bgColor="bgColor" 
               :value="value" 
               :width="width"
               @click='openPicker'>
</w-show-select>
```