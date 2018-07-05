var app = angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('aaa',{
            url:'/aaa',
            template:'<h4>aaa</h4>'
        })
        .state('bbb',{
            url:'/bbb',
            template:'<h4 class="h4">bbb</h4>'
        })
        .state('ccc',{
            url:'/ccc',
            template:'<h4>ccc</h4>'
        })
        .state('ddd',{
            url:'/ddd',
            template:'<h4>ddd</h4>'
        });
    $urlRouterProvider.otherwise('/bbb')    //路由没有匹配的，默认跳转至/bbb路由
}])