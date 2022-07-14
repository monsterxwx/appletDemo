module.exports = {//将这些配置复制到uniapp的prettier的配置中，这个文件本身不生效
    printWidth: 100,//最大宽度
    semi: false,//结尾是否带分号
    tabWidth: 2,//宽度为多少空格
    useTabs: true,//使用tab换行
    singleQuote: true,//使用单引号
    trailingComma: "none",//尾部逗号
    bracketSpacing: true,
		arrowParens:'avoid',//单个参数箭头函数是否带括号
    htmlWhitespaceSensitivity: "ignore",
    parsers: {
        ".jsx": "flow",
        ".scss": "scss",
        ".ts": "typescript",
        ".less": "css",
        ".vue": "vue",
        ".nvue": "vue",
        ".ux": "vue",
        ".yml": "yaml",
    }
}

