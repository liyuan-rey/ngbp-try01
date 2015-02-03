/**
 * Created by liyuan on 2015/1/29.
 */
define(["require", "jquery"], function(require, $) {

    var handler = {
        info: '',
        setInfo: function () {
            $('div#info').text(this.info);
        }
    };

    handler.info = 'product test';

    return handler;
});