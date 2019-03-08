const fs = require('fs')
const path = require('path')
const utils = require("./utils");
const webpack = require('webpack')


module.exports = {

	devtool: '',

	// entry: {
	// 	index: ["./src/index.js"],
	// },

	// "babel-polyfill",

	output: {
		//path: path.join(__dirname, '../examples/dist'),
		path: path.join(__dirname, '../dist'),
		publicPath: '',
		filename: '[name].[hash].js',
		chunkFilename: '[name].chunk.js'
	},


	resolve: {
		symlinks: false,
		alias: {
			"@": utils.resolve("../src") // 缓存src目录为@符号，避免重复寻址
		}
	},

	module: {

		noParse: /jquery|lodash|es5-polyfill/,

		rules: [
			utils.js_loader,
			utils.less_loader,
			utils.css_loader,
			utils.fonts_loader,
			utils.image_loader,
			utils.ejs_loader,
			utils.html_loader,
			utils.tmpl_loader
		]
	},

	plugins: [
		//utils.hmr,
		utils.preload,
		utils.newHtmlConfig("index", "首页"),
	],

	

	// optimization: {
	//
	// 	splitChunks: {
	// 		chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
	// 		minSize: 30000,//合并前模块文件的体积
	// 		minChunks: 1,//最少被引用次数
	// 		maxAsyncRequests: 5,
	// 		maxInitialRequests: 3,
	// 		automaticNameDelimiter: '~',//自动命名连接符
	// 		cacheGroups: {
	// 			vendors: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				minChunks: 1,//敲黑板
	// 				priority: -10//优先级更高
	// 			},
	// 			default: {
	// 				test: /[\\/]src[\\/]js[\\/]/,
	// 				minChunks: 2,//一般为非第三方公共模块
	// 				priority: -20,
	// 				reuseExistingChunk: true
	// 			}
	// 		},
	// 		// runtimeChunk: {
	// 		// 	name: 'manifest'
	// 		// }
	// 	}
	// }
};