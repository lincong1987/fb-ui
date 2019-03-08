/*
 This file 'router' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:  
        Email: lincong1987@gmail.com

        QQ: 159257119
 
 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-14 17:04
 */
import {FireBird} from 'fb-framework';
import Router from "yox-router"


Router.install(FireBird);

FireBird.filter('stringify', function (data) {
	return JSON.stringify(data)
})

export {Router};
