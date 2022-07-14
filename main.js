import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import api from '@/common/api/index.js'
import message from '@/utils/message.js'
// 将api接口挂载到vue原型中，之后调用只需要通过this.$api调用
Vue.prototype.$api = api

//将常用的消息弹框挂载到全局
Vue.prototype.$message = message

Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
// 引入请求封装
require('@/common/api/request/index')(app)
app.$mount()
// #endif
// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
