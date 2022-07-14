/**
 * 响应拦截
 * @param {Object} http 
 */
module.exports = (vm) => {
	uni.$u.http.interceptors.response.use((response) => {
		if(response.header['Set-Cookie']) {
			uni.setStorageSync('cookie',response.header['Set-Cookie'])
		}
		uni.$u.http.config.header = {
			'content-type': 'application/json;charset=UTF-8'
		}
		const data=response.data
		if (data.code==500) {
			uni.hideLoading()
			uni.$u.toast(data.message)
			return Promise.reject(data)
		}
		if(data.code==401) {
			uni.showToast({
				title:'登录失效 ！',
				icon:'error'
			})
			uni.hideLoading()		
			uni.redirectTo({
				url:'/pages/login/login'
			})
			return Promise.reject(data)
		}
		uni.hideLoading()
		return data.data || {}
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		uni.hideLoading()
		return Promise.reject(response)
	})
}
