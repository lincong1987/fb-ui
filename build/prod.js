const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const base = require("./base");


process.env.NODE_ENV = 'production';

module.exports = merge(base, {
	devtool: 'none',

	mode: 'production',

	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'fb-ui.min.js',
		library: 'fb-ui',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
});