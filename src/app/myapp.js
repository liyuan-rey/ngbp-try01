/**
 * Created by liyuan on 2015/1/29.
 */

require.config({
    //baseUrl: '..',
    paths: {
        jquery: '../../vendor/jquery/dist/jquery',
        product: './product/product'
    }
});

function run() {
    require(['jquery', 'product'], function($, product) {

        var info = $('div#info');
        info.text("jquery test");
        product.setContent();
    });

}

run();