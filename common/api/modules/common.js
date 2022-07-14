import config from '@/common/api/config'
const {
	http
} = uni.$u
//封装的get请求
const get = (url, params) => {
	return http.get(url, {
		params
	})
}
const post1 = (url, params, config) => {
	http.config.header = {
		"content-type": "application/x-www-form-urlencoded"
	}
	return http.post(url, params, config)
}
const post = (url, params, config) => {
	return http.post(url, params, config)
}
const postP = (url, data, params) => {
	return http.post(url, data, {
		params
	})
}
const uploadImg = async (event, fileList, path) => {
	const url = config.baseUrl + (path || '/file/upload')
	if (!checkUrl(url)) {
		return
	}
	let lists = [].concat(event.file)
	lists.map((item) => {
		fileList.push({
			...item
		})
	})
	const arr = []
	for (let i in lists) {
		const res = await uni.uploadFile({
			url: url,
			filePath: lists[i].url,
			name: 'file'
		})
		if (res[0]) {
			console.error('request:上传失败', res[0])
			return
		}
		arr.push(JSON.parse(res[1].data).data)
	}
	return arr
}
const checkUrl = (url) => {
	let urlReg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/;
	if (!urlReg.test(url)) {
		console.error('request:请求路径错误' + url)
		return false
	}
	return true
}
export default {
	//登录
	login: (data) => post('/login', data),
	//首页近期单据数据
	getBillInOutList: (data) => get('/app/home/getBillInOutList', data),
	//获取小件物资类型
	getMaterialType: () => get('/common/getMaterialTypeOfApp'),
	//上传图片
	uploadImg: (event, fileList) => uploadImg(event, fileList),
	//删除图片
	deleteImg: (params) => get('/file/delete', params)
}
