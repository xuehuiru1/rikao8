require.config({
    baseUrl: 'js/app',
    paths: {
        jquery: "../libs/jquery-2.1.1.min",
        hardlebars: "../libs/handlebars",
        index: "index",
        util: "util"
    }
})
require(['index']);