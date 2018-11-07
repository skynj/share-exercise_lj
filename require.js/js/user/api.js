define(['jquery'],function ($) {
    return {
        getUser: function () {
            var def = $.Deferred();
            require(['./user/user'],function(user){
                def.resolve(user);
            });
            return def;
        }
    }
});