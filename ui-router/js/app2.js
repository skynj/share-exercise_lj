var app = angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('aaa',{
            url:'/aaa',
            templateUrl:'child1.html'
        })
        .state('aaa.aaaChild',{
            url:'/aaaChild',
            template:'<h3>aaaChild</h3>'
        })
        .state('bbb',{
            url:'/bbb',
            templateUrl:'child2.html'
        })
        .state('bbb.bbbChild',{
            url:'/bbbChild',
            template:'<h3>bbbChild</h3>'
        })
        .state('ccc',{
            url:'/ccc',
            templateUrl:'child3.html'
        })
        .state('ccc.cccChild',{
            url:'/cccChild',
            template:'<h3>cccChild</h3>'
        })
        .state('ddd',{
            url:'/ddd',
            templateUrl:'child4.html'
        })
        .state('ddd.dddChild',{
            url:'/dddChild',
            template:'<h3>dddChild</h3>'
        });
    $urlRouterProvider.otherwise('/bbb')    //路由没有匹配的，默认跳转至/bbb路由
}])