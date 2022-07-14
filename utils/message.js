const message = {
	toast(title, type = 'text') {
		if (title.length > 15) {
			console.error('toast长度超过15个字符,当前长度为' + title.length)
			return
		}
		let icon = 'none'
		if (type) {
			switch (type) {
				case 'text':
					icon = 'none'
					break
				case 'suc':
					icon = 'success'
					break
				case 'err':
					icon = 'error'
					break
			}
		}
		uni.showToast({
			title,
			icon
		})
	},
	confirm(title, confirmColor) {
		return new Promise((res, rej) => {
			uni.showModal({
				title,
				cancelColor: '#f56c6c',
				confirmColor: confirmColor || '#409eff',
				success: (result) => {
					if (result.cancel) {
						rej(result)
					} else if (result.confirm) {
						res(result)
					}
				}
			})
		})
	},
	message(content, confrimText, title) {
		return new Promise((res) => {
			uni.showModal({
				title: title || '提示',
				content,
				showCancel: false,
				confirmText: confrimText || '确定',
				confirmColor: '#409eff',
				success: (result) => {
					res(result)
				}
			})
		})
	}
}
module.exports = message
