/*
 This file 'button' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-11 21:05
 */


import {$, _, FireBird} from 'fb-framework'
import '../../src/components/index'

import "@/styles/index.less";
window.app = new FireBird({
	el: "#app",
	template: "#template",
	events: {
	},

	methods: {

		setButtonSize(buttonSize){
			this.set("buttonSize", buttonSize)
		},

		toLoading () {
			this.set("loading", true);
		},
		toLoading2 () {  
			this.set("loading2", true);
		}
	},

	data() {
		return {
			buttonSize: "large" ,


			loading: false,
			loading2: false
		};
	}
});