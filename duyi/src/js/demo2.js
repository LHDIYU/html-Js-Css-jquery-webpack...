// less2
require('../less/demo2.less');

var tool = require('./tool.js');

var obj2 = {
    init:function() {
        //调用绑定事件的函数
        this.blindEvent();
    },
    blindEvent:function() {
        //tool.js -> dom ->click
        var dom = tool.getDom('demo2');
        dom.onclick = this.changeSize;
    },
    changeSize:function() {
        this.style.width ='100px';
        this.style.height = '100px';
       
    }
};
module.exports = obj2;