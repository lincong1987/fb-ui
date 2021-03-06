/*
 This file 'app' is part of Firebird Integrated Solution 1.0

 Copyright (c) 2019 Lincong

 Contact:
        Email: lincong1987@gmail.com

        QQ: 159257119

 See Usage at http://www.jplatformx.com/firebird

 Create date: 2019-01-14 17:06
 */
import {FireBird} from 'fb-framework';
import {Router} from "./router";





Router.register({
	index: {
		propTypes: {
			name: {
				type: 'string',
				required: true
			}
		},
		template: `
              <div>
                <h1>index</h1>
                <button on-click="register()">
                  register
                </button>
                {{stringify(this)}}
              </div>
            `,
		methods: {
			register: function () {
				this.$router.go({
					name: 'register',
					query: {age: 10}
				})
			}
		}
	},
	register: {
		template: `
              <div>
                <h1>register</h1>
                <button on-click="login()">
                  login
                </button>
                {{stringify(this)}}
              </div>
            `,
		methods: {
			login: function () {
				this.$router.go('/login')
			}
		},
		refreshing: function (to, from, next) {
			this.set(to.query)
			console.log('component beforeEnter', to, from)
		},
		beforeEnter: function (to, from, next) {
			console.log('component beforeEnter', to, from)
			next()
		},
		afterEnter: function (to, from, next) {
			console.log('component afterEnter', to, from)
			next()
		},
		beforeLeave: function (to, from, next) {
			console.log('component beforeLeave', to, from)
			next()
		},
		afterLeave: function (to, from, next) {
			console.log('component afterLeave', to, from)
			next()
		}
	},
	login: function (resolve) {
		setTimeout(
			function () {
				resolve({
					template: `
                    <div>
                      <h1>login</h1>
                      <button on-click="index()">
                        index
                      </button>
                      {{stringify(this)}}
                    </div>
                  `,
					refreshing: function (to, from, next) {
						console.log('component refreshing', to)
					},
					methods: {
						index: function () {
							this.$router.go({
								name: 'login',
								query: {
									name: 'musicode'
								}
							})
						}
					}
				})
			},
			1000
		)
	},
	profile: {
		template: `
              <div>
                <h1>profile</h1>
                {{stringify(this)}}
              </div>
            `,
	}
})


var router = new Router({
	'': {
		component: 'index',
	},
	'*': {
		component: 'index',
	},
	'/index': {
		component: 'index',
		refreshing: function (to, from, next) {
			console.log('refreshing index', to)
		}
	},
	'/register': {
		name: 'register',
		component: 'register',
		beforeEnter: function (to, from, next) {
			console.log('route beforeEnter', to, from)
			next()
		},
		afterEnter: function (to, from, next) {
			console.log('route afterEnter', to, from)
			next()
		},
		beforeLeave: function (to, from, next) {
			console.log('route beforeLeave', to, from)
			next()
		},
		afterLeave: function (to, from, next) {
			console.log('route afterLeave', to, from)
			next()
		}
	},
	'/login': {
		name: 'login',
		component: 'login'
	},
	'/profile/:id': {
		name: 'profile',
		component: 'profile'
	}
})
router.beforeEnter = function (to, from, next) {
	console.log('router beforeEnter', to, from)
	next()
}
router.afterEnter = function (to, from, next) {
	console.log('router afterEnter', to, from)
	next()
}
router.beforeLeave = function (to, from, next) {
	console.log('router beforeLeave', to, from)
	next()
}
router.afterLeave = function (to, from, next) {
	console.log('router afterLeave', to, from)
	next()
}



router.start('#app')