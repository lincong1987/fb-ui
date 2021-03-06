/*
 This file 'index' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-02-27 15:55
 */


import {FireBird} from 'fb-core';

const prefixCls = 'fb-btn';

let Button = FireBird.component('Button', {

	template: `
	
	<button  on-click="click()">
	
		{{#if loading === true}}
		<Icon class="fb-load-loop" type="zhankai">加载中</Icon>
        {{/if}}
        
        {{#if (icon || customIcon) && !loading}}
        <Icon type="{{icon}}" custom="customIcon"></Icon>
        {{/if}}
        
        {{#if showSlot === true}}
			<span><slot name="children"></slot></span>
	    {{/if}}
	
	</button>
	
	`,

	propTypes: {
		type: {
			value(props) {
				return FireBird.oneOf(props.type, 'default', ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
			},
			default: 'default'
		},
		loading: {
			type: "boolean",
			default: false
		},
		disabled: {
			type: "boolean",
			default: false
		},

		shape: {
			value(props) {
				return FireBird.oneOf(props.shape, 'default', ['circle', 'circle-outline']);
			}
		},
		size: {
			value(props) {
				return FireBird.oneOf(props.size, 'default', ['small', 'large', 'default']);
			}
		},
		icon: {
			type: "string",
			default: ''
		},
		customIcon: {
			type: String,
			default: ''
		},
		long: {
			type: Boolean,
			default: false
		},
		ghost: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			showSlot: true
		};

	},

	computed: {

		classes() {
			let type = this.get("type"),
				long = this.get("long"),
				shape = this.get("shape"),
				size = this.get("size"),
				loading = this.get("loading"),
				showSlot = this.get("showSlot"),
				icon = this.get("icon"),
				customIcon = this.get("customIcon"),
				ghost = this.get("ghost");

			return FireBird.css([
				`${prefixCls}`,
				`${prefixCls}-${type}`,
				(() => {
					let css = {};
					css[`${prefixCls}-long`] = long;
					css[`${prefixCls}-${shape}`] = !!shape;
					css[`${prefixCls}-${size}`] = size !== 'default';
					css[`${prefixCls}-loading`] = loading != null && loading;
					css[`${prefixCls}-icon-only`] = !showSlot && (!!icon || !!customIcon || loading);
					css[`${prefixCls}-ghost`] = ghost;

					return css;
				})()
			]);


		},


	},


	events: {
		click(event) {
			console.log(1)
		}
	},

	methods: {

		click(event, data, keypath) {
			this.fire('click');
		}
	},


	afterMount() {

		this.set("showSlot", this.hasSlot("children"));

		console.log(`Button afterMount`)

	},


});


export {Button};
