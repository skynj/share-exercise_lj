var myApp = angular.module('myApp',[]);

myApp.directive('topBase',function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            topdata:'=navData',      //index.html => js => top.html
            curClass: '@curClass'
        },
        templateUrl:'./top.html'
    }
})

myApp.directive('footerBase',function(){
    return{
        restrict:'E',
        replace:true,
        templateUrl:'./footer.html'
    }
})



//<runoob-directive></runoob-directive>
//<div runoob-directive></div>
//<div class="runoob-directive"></div>
//<!-- directive: runoob-directive -->
// restrict 值可以是以下几种:
// E 作为元素名使用
// A 作为属性使用
// C 作为类名使用
// M 作为注释使用
// restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。