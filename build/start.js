/*
 This file 'start' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-03-08 16:59
 */
const utils = require("./utils");
const path = require('path');
const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "production",
	devtool: 'cheap-module-source-map',
	entry: {
		index: [utils.resolve("../examples/index.js")],
		login: [utils.resolve("../examples/login.js")],
	},
	output: {
		path: path.join(__dirname, '../dist'),
		publicPath: '',
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js'
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', ".fb"],
		alias: {
			"@": utils.resolve("src") // 缓存src目录为@符号，避免重复寻址
		},
		symlinks: false
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'env',
								{
									targets: {
										browsers: ['last 2 versions', 'ie >= 7'],
									},
									// modules: 'commonjs',
									// useBuiltIns: true,
									// debug: true,
									"useBuiltIns": false,
									"debug": false,
									"modules": false,
									"loose": true,
								},
							],
							//'react',
							'stage-2',
						],
						plugins: [
							'transform-runtime', {
								"helpers": false,
								"polyfill": true,
								"regenerator": true
							}
						],
					},
				},
				include: [utils.resolve('views')],
			},
			utils.less_loader,
			utils.css_loader,
			utils.fonts_loader,
			utils.image_loader,
			utils.ejs_loader,
			utils.html_loader,
			//utils.tmpl_loader
		],
	},
	plugins: [
		new es3ifyPlugin(),


		...[

			//newHtmlConfig("index", "首页"),
			utils.newHtmlConfig("login", "登陆页"),
			//newHtmlConfig("main", "index"),
			//newHtmlConfig("index", "index"),

		],

		// new HtmlWebpackPlugin({
		// 	// filename: 'production.html',
		// 	template: path.join(__dirname, `../dist/index.html`),
		// 	filename: path.join(__dirname, `../examples/index.html`),
		// 	//template: exports.getFilePath(`../examples/${name}.ejs`) || exports.getFilePath(`../examples/${name}.html`),
		// 	inject: 'body',
		// 	hase: false,
		// 	minify: {
		// 		// 压缩HTML文件
		// 		removeComments: true, // 移除HTML中的注释
		// 		collapseWhitespace: false, // 删除空白符与换行符
		// 	},
		// 	chunks: ['index'],
		// }),
	],
};