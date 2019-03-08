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


const prefixCls = 'fb-form';


let Form = FireBird.component('Form', {

	template: require("./template.html"),
	propTypes: {

		elementId: {
			type: "string"
		},

		clearable: {
			type: "boolean",
			default: false
		},

		size: {
			type: ['number', 'boolean'],
			value: true,
			required: true
		}

	},

	data() {
		return {
			currentValue: this.value,
			prefixCls: prefixCls,
			prepend: true,
			append: true,
			slotReady: false,
			textareaStyles: {},
			showPrefix: false,
			showSuffix: false,
			isOnComposition: false
		};

	},

	computed: {

		wrapClasses() {
			let size = this.get("size"),
				type = this.get("type"),
				prepend = this.get("prepend"),
				append = this.get("append"),
				search = this.get("search"),
				enterButton = this.get("enterButton");

			return FireBird.css([
				`${prefixCls}-wrapper`,
				(() => {
					let css = {};
					css[`${prefixCls}-wrapper-${size}`] = !!size;
					css[`${prefixCls}-type`] = type;
					css[`${prefixCls}-group`] = prepend || append || (search && enterButton);
					css[`${prefixCls}-group-${size}`] = (prepend || append || (search && enterButton)) && !!size;
					css[`${prefixCls}-group-with-prepend`] = prepend;
					css[`${prefixCls}-group-with-append`] = append || (search && enterButton);
					css[`${prefixCls}-hide-icon`] = append;
					css[`${prefixCls}-with-search`] = (search && enterButton);
					return css;
				})()
			])
		},


		inputClasses() {

			let size = this.get("size"),
				disabled = this.get("disabled"),
				showPrefix = this.get("showPrefix"),
				showSuffix = this.get("showSuffix"),
				search = this.get("search"),
				enterButton = this.get("enterButton");

			return FireBird.css([
				`${prefixCls}`,
				(() => {
					let css = {};
					css[`${prefixCls}-${size}`] = !!size;
					css[`${prefixCls}-disabled`] = disabled;
					css[`${prefixCls}-with-prefix`] = showPrefix;
					css[`${prefixCls}-with-suffix`] = showSuffix || (search && enterButton === false);
					return css;
				})()
			]);
		},

	},

	methods: {},

	afterMount() {
		console.log(`Form afterMount`)


		//	this.$slots

		this.set("slotReady", true);


	},


})


export {Form};
