#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|name|按钮名称|string|'按钮'|
|bgColor|按钮背景颜色|string|'#0078D4'|
|color|文字颜色|string|'#FFF'|
|fontSize|字体大小|string|'40rpx'|
|width|按钮宽度|string|'700rpx'|
|double|是否开启左右两按钮|boolean|false|
|leftName|左边按钮名称，只有开启了double时有效|string|'取消'|
|leftColor|左边按钮的字体颜色，只有开启了double时有效|string|'#0078d4'|
|leftBgColor|左边按钮的背景颜色，只有开启了double时有效|string|'#f3f3f3'|
|rightName|右边按钮名称，只有开启了double时有效|string|'确定'|
|rightColor|右边按钮的字体颜色，只有开启了double时有效|string|'#fff'|
|rightBgColor|右边按钮的背景颜色，只有开启了double时有效|string|'#0078d4'|
|bottom|是否定位到底部|boolean|false|
|bottomHeight|距离底部的高度|string|'40rpx'|

#### events

|事件名称|作用|
|-|-|
|click|点击按钮时生效|
|clickLeft|点击左边按钮生效|
|clickRight|点击右边按钮生效|


#### slots

单个按钮时直接插入内容为按钮的名称

#### 使用举例

```javascript
<w-button @click='isOpen=true'>显示弹框</w-button>
```