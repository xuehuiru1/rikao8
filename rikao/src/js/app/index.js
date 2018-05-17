require(['jquery', 'util'], function($, util) {
    $.ajax({
        url: '/api',
        dataType: "json",
        success: function(res) {
            console.log(res);
            util(res, $('#list-tpl'), $('.list'));
        },
        error: function(error) {
            console.log(error);
        }
    })
})