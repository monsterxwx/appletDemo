#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|list|渲染的列表数据|array|[]|
|keyName|要显示的内容属性值名称|string|'name'|
|color|文字颜色|string|'#000'|
|marginTop|是否要开启margin-top，值为20rpx|boolean|true|


#### events

|事件名称|作用|
|-|-|
|click|点击某个单元格时生效，会返回对应item的内容|


#### 使用举例

```javascript
<w-cell :list='cellList' keyName='name' @click='goDetail'></w-cell>

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
```