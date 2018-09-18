var obj1 = require('./demo1.js');
var obj2 = require('./demo2.js');



obj1.init();
obj2.init();

var oImg = new Image();

oImg.src = require('../img/1.png');

document.body.appendChild(oImg);





