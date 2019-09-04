/*
 This file 'server' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-03-08 17:08
 */

const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const argv = require('yargs').argv;

const server = app.listen(8087);
const column = argv.env === 'dev' ? '../devtmp' : '../dist';

app.use(koaStatic(path.resolve(__dirname, "../dist")));