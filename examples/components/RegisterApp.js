/*
 This file 'register' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-18 15:28
 */

define(function (require, exports, module) {

	const Firebird = require("fb-core").FireBird;

	const RegisterApp = Firebird.component("RegisterApp",  {
		template: `
              <div>
                <h1>register</h1>
                <button on-click="login()">
                  login
                </button>
                {{stringify(this)}}
              </div>
            `,
		methods: {
			login: function () {
				this.$router.go('/login')
			}
		},
		refreshing: function (to, from, next) {
			this.set(to.query)
			console.log('component beforeEnter', to, from)
		},
		beforeEnter: function (to, from, next) {
			console.log('component beforeEnter', to, from)
			next()
		},
		afterEnter: function (to, from, next) {
			console.log('component afterEnter', to, from)
			next()
		},
		beforeLeave: function (to, from, next) {
			console.log('component beforeLeave', to, from)
			next()
		},
		afterLeave: function (to, from, next) {
			console.log('component afterLeave', to, from)
			next()
		}
	})



	module.exports = RegisterApp;
});