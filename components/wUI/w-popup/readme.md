#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|showBottomButton|是否显示底部按钮|boolean|true|
|doubleButton|是否显示两个按钮|boolean|false|
|value|v-model双向绑定的属性,用于显示和隐藏的值|boolean|false|
|name|弹框的头部标题名称|string|'名称'|
|oneButtonName|一个按钮的名称|string|'保存'|
|leftButtonName|两个按钮时左边按钮的名称|string|'删除'|
|rightButtonName|两个按钮时右边按钮的名称|string|'修改'|
|toast|是否需要提示消息|boolean|true|
|validate|是否开启验证，开启后按完按钮不关闭popup|boolean|false|


#### events

|事件名称|作用|
|-|-|
|save|点击保存时|
|edit|点击修改时|
|detele|点击删除时|


#### slots

默认插槽，插入需要展示的内容

#### 使用举例

```html
<w-popup :name='isAddModal?"新增整改":"编辑整改"' validate :toast="false" v-model="showAddModal"
        :doubleButton="!isAddModal" @detele='deteleProject' @save='saveProject' @edit='editProject'>
        <view class="formStyle">
          <u-form :labelStyle="{color: '#0078d4',fontSize: '28rpx'}" labelPosition="left" :model="projectForm"
            ref="addProjectFormRef" :rules="addProjectFormRefRules">
            <u-form-item required prop='problem' labelWidth="200rpx" label="问题描述:" borderBottom>
              <input class="baseInput" v-model="projectForm.problem" name="input" placeholder="请输入问题">
              </input>
            </u-form-item>
          </u-form>
        </view>
      </w-popup>
```