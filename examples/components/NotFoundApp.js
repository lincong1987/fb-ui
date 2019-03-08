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
import "@/components/index"

const NotFoundApp = FireBird.component("NotFoundApp", {

	extend: "PageApp",

	template: `
              <div style="border: 1px solid red">
                <h1>404 NotFoundApp</h1>
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
		document.title = "NotFoundApp"
	},

	methods: {
		register: function () {

			debugger
			this.$router;

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


export default NotFoundApp;