/*
 This file 'WelcomeApp' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-18 23:56
 */

define(function (require, exports, module) {

	// "use strict";


	const Firebird = require("fb-core").FireBird;

	const TestApp = Firebird.component("TestApp",  {
		template: `
              <div>
                <h1>TestApp</h1>
              </div>
            `,

		data(){
			return {
				tabs: [
				]
			}
		},

		methods: {
			login: function () {
			}
		},
	})

	module.exports = TestApp;
});