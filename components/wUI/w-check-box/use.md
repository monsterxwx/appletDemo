#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|value|v-model绑定的值|Boolean, Array, String|false|
|location|位置控制,左右对齐|String|'left'|
|multiple|多个选项的多选|Boolean|false|
|radio|多个选项的单选|Boolean|false|
|list|背景颜色|Array|[]|
|keyName|展示的属性名称|String|'name'|
|shape|形状，'square'或'circle'|String|'square'|
|column|是否开启纵向排布|Boolean|false|
|iconPlacement|选择框位置，'left'或'right'|String|'left'|
|borderBottom|纵向选择时是否显示下划线|Boolean|false|
|disabled|禁用全部选项|Boolean|false|


#### events

|事件名|说明|
|-|-|
|change|选择的内容改变时触发|


#### 使用举例

```html
<w-check-box v-model="isSavePass">记住密码</w-check-box>
```