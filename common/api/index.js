const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	const value = modulesFiles(modulePath)
	modules = {
		...modules,
		...value.default
	}
	return modules
}, {})
// 全部api接口
export default {
	...modules
}
