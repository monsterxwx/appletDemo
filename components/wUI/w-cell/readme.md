#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|list|渲染的列表数据|array|[]|
|keyName|要显示的内容属性值名称|string|'name'|
|color|文字颜色|string|''|
|marginTop|是否要开启margin-top，值为20rpx|boolean|true|


#### events

|事件名称|作用|
|-|-|
|click|点击某个单元格时生效，会返回对应item的内容|


#### 使用举例

```javascript
<w-cell :list='cellList' keyName='name' @click='goDetail'></w-cell>

			list: [
				{
					name: '项目名',
					content: uni.getStorageSync('userInfo')['title_name']
				},
				{
					name: '标段名',
					url: '/pages_task/taskManage/addTask/addTask',
					content:'test',
					arrow:true
				},
				{
					name: '用户名',
					content: uni.getStorageSync('userInfo').login_name
				},
				{
					name: '修改密码',
					url: '/pages_task/taskManage/addTask/addTask',
					arrow: true
				},
				{
					name: '退出登录',
					url: '/pages/login/login',
					arrow: true
				}
			]
```