/**
 * 请求拦截
 * @param {Object} http
 */
module.exports = (vm) => {
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
			uni.showLoading({
				title: '加载中'
			})
			// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
			config.data = config.data || {}
			if (uni.getStorageSync('cookie')) {
				config.header.Cookie = uni.getStorageSync('cookie')
			}
			return config
		}, (config) => {
			uni.hideLoading()
			uni.showToast({
				title:'连接失败 ！',
				icon:'error'
			})
			Promise.reject(config)
		} // 可使用async await 做异步操作
	)
}
