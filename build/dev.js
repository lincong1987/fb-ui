const utils = require("./utils");
const base = require("./base");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");



module.exports = merge(base, {

	devtool: "",// 'cheap-module-eval-source-map',

	mode: 'development',

	entry: {

		'ie8': 'es5-polyfill',
		vendor: ["es5-shim", "object-create-ie8", "object-defineproperty-ie8", "console-polyfill", "json3", "bluebird"],
		index: [utils.resolve("../examples/index.js")],
		login: [utils.resolve("../examples/login.js")],
		//main: ['es5-polyfill', resolve("../examples/main.js")]
	},

	output: {
		path: path.join(__dirname, '../dist'),
		publicPath: '',
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js'
	},

	plugins: [

		...[

			//newHtmlConfig("index", "首页"),
			utils.newHtmlConfig("login", "登陆页"),
			//newHtmlConfig("main", "index"),
			//newHtmlConfig("index", "index"),

		],
	],


	devServer: {
		contentBase: utils.resolve('dist'), // 根目录
		hot: false,   // 是否开启热替换，无须手动刷新浏览器
		host: "192.168.199.18",
		port: 8081,    // 端口
		open: true,     // 是否自动打开浏览器
		noInfo: false,   // 不提示打包信息，错误和警告仍然会显示
		disableHostCheck: true, //  新增该配置项
		//overlay: true,
	},

});