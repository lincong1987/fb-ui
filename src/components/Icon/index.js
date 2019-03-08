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



const prefixCls = 'fb-icon';

let template = `
	<i class="{{classes}}" style="{{styles}}" 
	on-click="click()"
	></i>
	`;


let Icon = FireBird.component('Icon', {

	template: template,

	propTypes: {
		type: {
			type: "string",
			value: ''
		},
		size: ["number", "string"],
		color: "string",
		custom: {
			type: "string",
			value: ''
		},
		onClick: {
			type: "function"
		}
	},

	data() {
		return {};
	},

	events: {
	},

	methods: {
		click(event, data, keypath) {
			this.fire('click');
		}
	},

	afterMount() {
		console.log(`Icon afterMount`)
	},

	computed: {
		classes() {
			let type = this.get("type"), custom = this.get("custom");
			return FireBird.css([prefixCls, (() => {
				let extra = {};
				extra[`${prefixCls}-${type}`] = type !== '';
				extra[`${custom}`] = custom !== "";
				return extra;
			})()]);
		},
		styles() {
			let size = this.get("size"), color = this.get("color");

			return FireBird.style((() => {
				let extra = {};
				extra[`font-size`] = `${size}px`;
				extra[`color`] = color;
				return extra;
			})());
		}
	}

});

export {Icon};
