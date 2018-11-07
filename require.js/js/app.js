requirejs.config({
    baseUrl: '/js',
    // paths: {
    //     'jquery': './lib/jquery-1.9.1.min'
    // }
    paths: {
        'jquery': [
            'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',   //优先加载
            './lib/jquery-1.9.1.min'                                //第一个加载失败，加载第二个
        ]
    }
});

// require(['index'],function (index) {
//     var str = index.trim('  abc   ');
//     console.log(str);
// });


require(['jquery','./user/api'],function ($,api) {
    $('#user').click(function () {
        api.getUser().then(function(user){
            console.log(user);
        });
    });
});