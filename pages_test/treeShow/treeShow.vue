<template>
	<view class="">
		<w-tree
			ref="treeRef"
			showCheckbox
			defaultExpandAll
			checkOnClickNode
			highlightCurrent
			:expandOnClickNode="false"
			:tree-data="treeData"
			:ready="ready"
			node-key="id"
			@node-expand="handleNodeExpand"
			@node-click="handleNodeClick"
		></w-tree>
	</view>
</template>

<script>
export default {
	data() {
		return { ready: false, treeData: [] }
	},
	onLoad() {
		// 模拟异步请求
		setTimeout(() => {
			this.treeData = [
				{
					id: 1,
					label: '一级 1',
					children: [
						{
							id: 11,
							label: '二级 1-1',
							children: [
								{
									id: 111,
									label: '三级 1-1-1'
								}
							]
						}
					]
				},
				{
					id: 2,
					label: '一级 2',
					children: [
						{
							id: 21,
							label: '二级 2-1',
							children: [
								{
									id: 211,
									label: '三级 2-1-1'
								}
							]
						},
						{
							id: 22,
							label: '二级 2-2',
							children: [
								{
									id: 221,
									label: '三级 2-2-1'
								}
							]
						}
					]
				},
				{
					id: 3,
					label: '一级 3',
					children: [
						{
							id: 31,
							label: '二级 3-1',
							children: [
								{
									id: 311,
									label: '三级 3-1-1'
								}
							]
						},
						{
							id: 32,
							label: '二级 3-2',
							children: [
								{
									id: 321,
									label: '三级 3-2-1'
								}
							]
						}
					]
				}
			]

			this.ready = true
		}, 400)
	},
	methods: {
		// uni-app中emit触发的方法只能接受一个参数，所以会回传一个对象，打印对象即可见到其中的内容
		handleNodeClick(obj) {
			// console.log('handleNodeClick', obj.data)
			console.log(this.$refs.treeRef.getCurrentNode())
		},
		handleNodeExpand(obj) {
			console.log('handleNodeExpand', JSON.stringify(obj))
		}
	}
}
</script>

<style lang="scss" scoped></style>
