require('../less/demo1.less');
var tool = require('./tool.js');

var obj1 = {
    init: function () {
        // 调用绑定事件的函数
        this.bindEvent();
    },
    bindEvent: function () {
        // tool.js -> dom -> click 
        var dom = tool.getDom('demo1');
        dom.onclick = this.changeColor;
    },
    changeColor: function () {
        this.style.backgroundColor = 'red';
    }
};

module.exports = obj1;

