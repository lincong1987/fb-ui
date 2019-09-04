/*
 This file 'start' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-03-08 17:06
 */
const shell = require('shelljs');
const path = require('path');
const del = require('del');

let arr = del.sync([path.join(__dirname + '/../dist/**')]);
console.log('正在删除目录');

shell.exec('node ./bin/server.js --env=dev', { async: true }, (code, stdout, stderr) => {

       console.log(code, stdout, stderr)

});

shell.exec('webpack --watch --mode=production  --config build/start.js', { async: true }, (code, stdout, stderr) => {
       
       console.log(code, stdout, stderr)

});