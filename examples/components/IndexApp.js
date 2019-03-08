/*
 This file 'index' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-17 17:30
 */

import {FireBird} from "fb-core";

const IndexApp = FireBird.component("IndexApp", {

	extend: "PageApp",

	template: `
              <div>
                <h1>index</h1>
                <button on-click="register()">
                  register
                </button>
                
              </div>
            `,

	// propTypes: {
	// 	name: {
	// 		type: 'string',
	// 		required: true
	// 	}
	// },

	data() {
		return {};

	},

	afterMount() {
		document.title = "IndexApp"
	},

	methods: {
		register: function () {

			this.$router.go("main");

			// this.$router.go({
			// 	name: 'register',
			// 	query: {age: 10}
			// })


			// this.$router.go({
			// 	name: 'register',
			// 	query: {age: 10}
			// })

		}
	}
});


export default IndexApp;