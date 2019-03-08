/*
 This file 'main' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-18 15:29
 */


import {FireBird, Router} from 'fb-core';
/* webpackMode: "lazy" */
import {WelcomeApp} from "./WelcomeApp";


const MainApp = FireBird.component("MainApp", {
	template: require("./MainApp.html"),

	data() {
		return {
			tabs: []
		}
	},

	afterMount() {


		let router = new Router({
			'': {
				component: 'WelcomeApp'
			},
			'*': {
				component: 'NotFoundApp'
			},
			'/portal': {
				component: 'WelcomeApp'
			},

			"/welcome": {
				name: "welcome",
				component: 'WelcomeApp'
			}
		});

		router.start("#tab");

		FireBird.$Router.tab = router;


		//FireBird.$Router.tab.go("/welcome")


	}
});

