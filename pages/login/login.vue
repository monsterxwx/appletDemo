<template>
	<view class="container">
		<view class="login-icon">
			<image class="login-img" src="@/static/image/login/login.png" />
			<view class="title">
				<view class="titleIcon">
					<image class="icon-img" src="@/static/image/login/logo.png" />
				</view>
				<view class="titleInfo">系统</view>
			</view>
		</view>
		<view class="login-form">
			<view class="title">用户登录</view>
			<view class="common">
				<view class="left">
					<image class="icon-img" src="@/static/image/login/username.png" />
					<view class="name">用户名:</view>
				</view>
				<view class="right">
					<input type="text" v-model="userInfo.username" placeholder="请输入账号" value="" />
				</view>
			</view>
			<view class="common">
				<view class="left">
					<image class="icon-img" src="@/static/image/login/password.png" />
					<view style="letter-spacing: 12rpx;" class="name">密码:</view>
				</view>
				<view class="right">
					<input
						type="password"
						v-model="userInfo.password"
						password="true"
						placeholder="请输入密码"
						value=""
					/>
				</view>
			</view>
			<view class="login" @click="login">登录</view>
			<view class="savePassword">
				<w-check-box v-model="isSavePassword" @change="checkboxChange">记住密码</w-check-box>
			</view>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="bottom">版本信息 {{ version }}</view>
		<!-- #endif -->
		<view><u-toast ref="uToast" /></view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			version: '',
			userInfo: {
				username: '',
				password: ''
			},
			isSavePassword: []
		}
	},
	onLoad() {
		// // #ifdef APP-PLUS
		// plus.runtime.getProperty(plus.runtime.appid, (inf) => {
		// 	this.version = inf.version ? inf.version : ''
		// })
		// // #endif
		this.userInfo.username = uni.getStorageSync('username')
		this.isSavePassword = uni.getStorageSync('savePassword')
		if (this.isSavePassword) {
			this.userInfo.password = uni.getStorageSync('password')
			// // 自动登录
			// this.loginOK = uni.getStorageSync('loginOK')
			// if (this.loginOK === 1) {
			// 	setTimeout(() => {
			// 		this.login()
			// 	}, 500)
			// }
		}
	},
	methods: {
		checkboxChange(value) {
			uni.setStorageSync('savePassword', this.isSavePassword)
		},
		async login() {
			// if (this.userInfo.username === '') {
			// 	this.$refs.uToast.show({
			// 		message: '账号不能为空'
			// 	})
			// 	return
			// }
			try {
				// const res = await this.$api.login(this.userInfo)
				// console.log(res)
				uni.setStorageSync('username', this.userInfo.username)
				if (this.isSavePassword) {
					uni.setStorageSync('password', this.userInfo.password)
				}
				uni.reLaunch({
					url: '/pages/index/index'
				})
			} catch (e) {
				console.log(e)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.container {
	height: 100%;
	background-color: #ffffff;

	.login-icon {
		.login-img {
			width: 100%;
		}

		.title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			left: 50%;
			top: 10%;
			transform: translateX(-50%);

			.titleIcon {
				width: 118rpx;
				height: 104rpx;

				.icon-img {
					width: 118rpx;
					height: 104rpx;
				}
			}

			.titleInfo {
				margin-top: 46rpx;
				color: #ffffff;
				font-size: 40rpx;
				white-space: nowrap;
				font-family: Source Han Sans CN, Source Han Sans CN-Bold;
				font-weight: 700;
			}
		}
	}

	.login-form {
		position: relative;
		background-color: #fff;
		z-index: 2;
		width: 100%;
		top: -50rpx;
		border-radius: 40rpx;

		.title {
			font-size: 40rpx;
			padding-top: 74rpx;
			padding-bottom: 68rpx;
			text-align: center;
			font-family: Source Han Sans CN, Source Han Sans CN-Bold;
			font-weight: 700;
			color: #0078d4;
		}

		.common {
			width: 600rpx;
			height: 88rpx;
			margin: 0 auto;
			background: linear-gradient(0deg, #ffffff, #ffffff 41%, #ffffff);
			border: 2rpx solid #d2d2d2;
			border-radius: 8rpx;
			margin-bottom: 38rpx;
			display: flex;
			align-items: center;

			.left {
				display: flex;
				align-items: center;

				.name {
					width: 148rpx;
					padding: 0 18rpx;
					font-size: 28rpx;
					font-family: Source Han Sans CN, Source Han Sans CN-Bold;
					font-weight: 700;
					color: #666666;
				}

				.icon-img {
					width: 28rpx;
					height: 28rpx;
					margin-left: 14rpx;
				}
			}
		}

		.login {
			width: 600rpx;
			height: 96rpx;
			margin: 0 auto;
			line-height: 96rpx;
			font-size: 36rpx;
			font-family: SourceHanSansCN-Normal;
			text-align: center;
			color: #fff;
			background: linear-gradient(0deg, #0287ef, #1197ff);
			border-radius: 8rpx;
			box-shadow: 0 10rpx 10rpx 0 rgba(16, 134, 224, 0.15);
		}
	}

	.bottom {
		position: absolute;
		bottom: 58rpx;
		left: 50%;
		transform: translateX(-50%);
		color: #888888;
		font-size: 22rpx;
		font-family: Source Han Sans CN, Source Han Sans CN-Regular;
	}

	.savePassword {
		margin-top: 60rpx;
		margin-left: 76rpx;
	}
}
</style>
