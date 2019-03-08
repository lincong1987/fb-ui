/*
 This file 'css' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-16 16:56
 */

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function () {
	gulp.src('../src/styles/index.less')
		.pipe(less({
			javascriptEnabled: true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie >= 8']
		}))
		.pipe(cleanCSS())
		.pipe(rename('fb-ui.css'))
		.pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
	gulp.src('../src/styles/common/iconfont/fonts/*.*')
		.pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['css', 'fonts']);
