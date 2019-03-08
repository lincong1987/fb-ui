/*
 This file 'login' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-07 20:15
 */

import {$, _, FireBird} from 'fb-framework'
import '../components/index'

FireBird.partial("icon-chaxun", `
<div>
<Icon type="chaxun"></Icon>
</div>
`);


window.app = new FireBird({
	el: "#app",
	template: `<div>
          测试:
          {{sss}}
          
          {{> icon-chaxun}}
          
          <Icon color="red" size="32" type="bangzhu" on-click="doSth()"></Icon>
          <Icon color="red" size="32" type="chaxun" on-click="doSth()"></Icon>
          <Icon color="red" size="32" type="chaxun" on-click="doSth()"></Icon>
          <Icon color="red" size="32" type="chaxun" on-click="doSth()"></Icon>
          <Icon color="red" size="32" type="chaxun" on-click="doSth()"></Icon>
          
          <hr>
          
          <TextField ref="a1" size="default" width="100px" model="a1Value" placeholder="请输入XXX" 
                on-change="a1Change(name, $event, $data)">
            <template slot="prepend">
                <Icon color="red" size="32" type="bangzhu" on-click="doSth()"></Icon>
			</template>
            <template slot="append"> 
                <Button icon="bangzhu" label="ddd"></Button>
            </template>  
          </TextField>
          
          
          
          
          <hr>
                          
          <Button label="设置文本框宽度" icon="bangzhu" type="button" on-click="setA1Width()"></Button>
          
          <hr>
          
          <Button label="添加" icon="sss" on-click="doOnClick">
            
          </Button>
          
          
          <button type="button" on-click="setA1Width()">ddd</button>
          

</div>`,

	// propTypes: {
	// 	sss: {
	// 		type: 'string',
	// 		required: true,
	// 		value: '111'
	// 	},
	// },


	events: {
		doSth (a,b,c) {

			debugger

		},
	},

	methods: {

		doSth(a,b,c) {
			alert(1)
		},

		setA1Width() {

			this.$refs.a1.set("width", "50px");


		},
		a1Change() {
			debugger
		},

		doOnClick() {
			debugger
		}
	},

	data() {
		return {
			textValue: "textValue",
			sss: 1,
		};
	}
});