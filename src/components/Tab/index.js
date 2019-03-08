/*
 This file 'index' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-04 22:04
 */


import {FireBird} from 'fb-core';


let Tab = FireBird.component('Tab', {

	template: `
	<div>
          <li>Tab</li>
	</div>
	`,

	data() {
		return {
			value: "",
			width: 220
		};

	},

	methods: {},

	afterMount() {
		console.log(`Tab afterMount`)

	},


});


export {Tab};
