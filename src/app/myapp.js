/**
 * Created by liyuan on 2015/1/29.
 */

require.config({
    baseUrl: '../..',
    paths: {
        jquery: 'vendor/jquery/dist/jquery'
    }
});

function run() {
    var $ = require('jquery');
    $('content').innerText = "test jquery";
    //var product = require('product');
    //product.setContent();
}

run();