/*
 This file 'index' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-02 20:39
 */
// import "babel-polyfill";
import {$, _, FireBird} from 'fb-core'
import {TextField} from './components/TextField/index'


let TextFieldPassword = FireBird.component("TextFieldPassword", {
	extend: TextField,
	template: `<div>TextFieldPassword <input type="text" value="TextFieldPassword" /></div>`,
	data() {
		return {
			value: "",
			width: ""
		}
	}
})


// console.log("12312")
// console.log(FireBird)
//
let app = window.app = new FireBird({
	el: "#app",
	template: `
<div>
          测试:
          {{sss}}
          
          <hr>
          
          <TextField width="100px">
          
          </TextField>
          
          
          <hr>
          
          <!--<TextFieldPassword></TextFieldPassword>-->
</div>`,

	propTypes: {
		sss: {
			type: 'string',
			required: true,
			value: '111'
		},
	},

	data() {
		return {
			sss: 1,
		};
	}
});

export {}