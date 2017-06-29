require.config({
	paths: {
		'app': 'js/app',
		'angular': 'js/libs/angular-1.4.6.min',
		'uiRouter': 'js/libs/angular-ui-router-0.4.2.min',
		'angularCSS': 'js/libs/angular-css1.0.8',
		'swiper': 'js/libs/swiper.min',
		'home': 'component/wrap/home/home',
		'category': 'component/wrap/category/category',
		'mine': 'component/wrap/mine/mine',
		'shopcar': 'component/wrap/shopcar/shopcar',
		'wrap':'component/wrap/wrap',
		'login':'component/login/login',
		'iconfont':'js/libs/iconfont'
	},
	shim: {
		'uiRouter': {
			deps: ['angular']
		},
		'angularCSS':{
			deps:['uiRouter']
		},
		'home': {
			deps: ['angularCSS']
		},
		'category': {
			deps: ['home']
		},
		'mine': {
			deps: ['category']
		},
		'shopcar': {
			deps: ['mine']
		},
		'wrap':{
			deps:['uiRouter']
		},
		'login':{
			deps:['uiRouter']
		},
		'app': {
			deps: ['uiRouter']
		}
	}

});

require(['app'],function(){
		angular.bootstrap(document, ['myModule']);
})