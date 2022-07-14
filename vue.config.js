const path = require('path')
function resolve (dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true
		}
	},
	//productionSourceMap: false,
}
