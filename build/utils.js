/*
 This file 'utils' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-02-18 17:37
 */
const fs = require('fs')
const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


exports.resolve = (dir) => {
	return path.join(__dirname, './', dir)
};

exports.getFilePath = (dir) => {
	let _path = path.join(__dirname, dir);
	return fs.existsSync(_path) ? _path : null;
};

/**
 *
 */

/**
 *
 * @param name
 * @param title
 * @returns {HtmlWebpackPlugin}
 */
exports.newHtmlConfig = function (name, title) {
	return new HtmlWebpackPlugin({
		name: name,
		title: title,
		inject: false,
		filename: path.join(__dirname, `../dist/${name}.html`),
		template: exports.getFilePath(`../examples/${name}.ejs`) || exports.getFilePath(`../examples/${name}.html`),
		chunks: ["ie8", "vendor", name],
		meta: {
			"page": name,
			'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
		}
	});
};

exports.copy = new CopyWebpackPlugin([

	{
		from: 'source',
		to: 'dest',
		writeToDisk: true,
		force: true,
	},
]);

exports.hmr = new webpack.HotModuleReplacementPlugin();

exports.preload = new webpack.ProvidePlugin({
	$: 'jquery',
	jQuery: 'jquery',
	_es5: "es5-polyfill",
	fb_core: "fb-core"
});


/**
 * 入口模版 加载器
 * @type {{test: RegExp, loader: string}}
 */
exports.ejs_loader = {
	test: /\.(ejs)$/,
	loader: 'ejs-loader'
};

exports.html_loader = {
	test: /\.(html)$/,
	loader: 'html-loader'
};

/**
 * 脚本 加载器
 * @type {{test: RegExp, exclude: RegExp, loader: string}}
 */
exports.js_loader = {
	test: /\.jsx?$/,
	// exclude: /node_modules/,
	exclude: /(node_modules|bower_components)/,
	loader: 'babel-loader'
};

/**
 * LESS 加载器
 * @type {{test: RegExp, loaders: *[]}}
 */
exports.less_loader = {
	test: /\.less$/,
	loaders: [
		{
			loader: 'style-loader',
			options: {
				sourceMap: true,
			},
		},
		{
			loader: 'css-loader',
			options: {
				sourceMap: true,
			},
		},
		{
			loader: 'less-loader',
			options: {
				javascriptEnabled: true,
				sourceMap: true,
			},
		},
	]
};

/**
 * 样式 加载器
 * @type {{test: RegExp, use: string[]}}
 */
exports.css_loader = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
};

/**
 * 图像 加载器
 * @type {{test: RegExp, loader: string, exclude: Array, options: {limit: number, name: string}}}
 */
exports.image_loader = {
	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	loader: 'url-loader',
	exclude: [],
	options: {
		limit: 10000,
		name: 'img/[name].[hash:7].[ext]'
	}
};

/**
 * 模版加载器
 * @type {{test: RegExp, use: {loader: string, options: {minimize: boolean, removeComments: boolean, collapseWhitespace: boolean}}}}
 */
exports.tmpl_loader = {
	test: /\.tmpl/,
	use: {
		loader: 'art-template-loader',
		options: {
			htmlResourceRoot: __dirname,
			root: path.resolve(__dirname),
			htmlResourceRules: false
		}
	}
};

/**
 * 字体加载器
 * @type {{test: RegExp, loader: string}}
 */
exports.fonts_loader = {
	test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
	loader: 'url-loader?limit=8192'
};