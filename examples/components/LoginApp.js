/*
 This file 'login' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-18 15:28
 */

define(function (require, exports, module) {

	const Firebird = require("fb-core").FireBird;
	
	const LoginApp = Firebird.component("LoginApp", {
		template: `
                    <div>
                      <h1>login</h1>
                      <button on-click="index()">
                        index
                      </button>
                      {{stringify(this)}}
                    </div>
                  `,
		refreshing: function (to, from, next) {
			console.log('component refreshing', to)
		},
		methods: {
			index: function () {
				this.$router.go({
					name: '/main',
					query: {
						name: 'musicode'
					}
				})
			}
		}
	})


	module.exports = function (resolve) {
		setTimeout(
			function () {
				resolve(LoginApp)
			},
			1000
		)
	};
});