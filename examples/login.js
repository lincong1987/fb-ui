/*
 This file 'app' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:
        Email: lincong1987@gmail.com

        QQ: 159257119

 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-14 17:06
 */
// import 'es5-shim'; //IE8 ^4.5.10
// import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
// import 'object-defineproperty-ie8';//IE8， 我写的库
// import 'console-polyfill';//IE8下，如果你不打开开发者工具，window下是没有console这个对象的，
// //只有打开了F12才会有这个方法
// import 'json3';  //比IE8的JSON好用
// import 'bluebird'; //性能超高的Promise实现


//import {FireBird, Router} from 'fb-core';
  console.log("ok")
// import "../src/components/index"
//
// const template = require("./pages/login.html");
//
//
//
//
//
//
// let app = new FireBird({
// 	el: "#app",
// 	template: template,
// 	data() {
// 		return {};
// 	},
// 	afterMount() {
//
// 	},
// 	methods: {
// 		doLogin() {
// 			alert("doLogin called!")
// 		}
// 	}
// });


// require("./components/NotFoundApp");
// require("./components/IndexApp");
// require("./components/LoginApp");
// require("./components/MainApp");
// require("./components/RegisterApp");
// require("./components/TestApp")
//
// let router = new Router({
// 	'': {
// 		component: 'IndexApp',
// 		beforeEnter: function (to, from, next) {
// 			console.log('进入首页虚拟空网址，跳转至/login');
// 			next("/login");
// 		},
// 	},
// 	'*': {
// 		component: 'NotFoundApp',
// 	},
// 	'/index': {
// 		component: 'IndexApp',
// 		refreshing: function (to, from, next) {
// 			console.log('refreshing index', to);
// 		}
// 	},
// 	'/register': {
// 		component: 'RegisterApp',
// 		beforeEnter: function (to, from, next) {
// 			console.log('route beforeEnter', to, from);
// 			next()
// 		},
// 		afterEnter: function (to, from, next) {
// 			console.log('route afterEnter', to, from);
// 			next()
// 		},
// 		beforeLeave: function (to, from, next) {
// 			console.log('route beforeLeave', to, from);
// 			next()
// 		},
// 		afterLeave: function (to, from, next) {
// 			console.log('route afterLeave', to, from);
// 			next()
// 		}
// 	},
// 	'/login': {
// 		component: 'LoginApp'
// 	},
// 	'/main': {
// 		component: 'MainApp'
// 	}
// });
//
// router.beforeEnter = function (to, from, next) {
// 	console.log('router beforeEnter', to, from);
// 	next();
// };
// router.afterEnter = function (to, from, next) {
// 	console.log('router afterEnter', to, from);
// 	next();
// };
// router.beforeLeave = function (to, from, next) {
// 	console.log('router beforeLeave', to, from);
// 	next();
// };
// router.afterLeave = function (to, from, next) {
// 	console.log('router afterLeave', to, from);
// 	next();
// };
//
// router.start('#app');
//
// FireBird.$Router = FireBird.$Router || {};
// FireBird.$Router.global = router;