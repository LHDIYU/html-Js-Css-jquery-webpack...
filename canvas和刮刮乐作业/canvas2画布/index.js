//  获得 canvas 元素
var canvas = document.getElementById('canvas');
// 获取 上下文环境
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

// ！！！！！！！！！！！！！笔记！！！！！！！！！！！！

//                      坐标轴转换
//                       • translate(dx, dy); 
//                       • scale(sx, sy) 
//                       • rotate(deg) 
//                       • save() restore() 
//                       • setTransform(a, b, c, d, e, f)    先重置再变换
//                       • transform(a, b, c, d, e, f) 在之前的基础上变换


// ctx.fillRect(100, 100, 100, 100);
// ctx.rotate(Math.PI / 2); //坐标轴转换
// ctx.fillStyle = 'red';
// ctx.fillRect(100, -200, 100, -100);

// ctx.fillRect(100, 100, 100, 100);
// ctx.save();
// ctx.rotate(Math.PI / 2); //坐标轴转换
// ctx.fillStyle = 'red';
// ctx.fillRect(100, -200, 100, -100);
// ctx.restore();
// ctx.fillRect(100, 200, 100, 100);


//                             • 填充图案
//                             • createPattern()  一种填充的样式
//                             参数 
//                             img元素（Image对象），
//                             canvas元素， 再建立一个canvas元素进行填充
//                             video元素 有内容有图形

// var img = document.getElementsByTagName('img')[0];
// console.log(img);
// ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
// ctx.fillRect(0, 0, width, height);//填充不正常

// var img = document.getElementsByTagName('img')[0];
// console.log(img);
// img.onload = function() {

//     ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
//     ctx.fillRect(0, 0, width, height);
// };

// $(function() {

// })();//                  已是load之后加载执行


//                            渐变颜色    
//                            • addColorStop(p, color);
//                            • 渐变
//                            线性渐变 
//                            • createLinearGradient(x1, y1, x2, y2); 
//                            必须 
//                            在填充渐变的区域⾥里里定义渐变, 
//                            否则 没有效果 

// var gradient = ctx.createLinearGradient(0, 0, 0, 200);
// gradient.addColorStop(0, '#000');
// gradient.addColorStop(1, '#fff');
// ctx.fillStyle = gradient;
// // ctx.fillRect(0, 0, width, 200);
// ctx.fillRect(0, 100, width, 200);


//                          径向渐 变
//                          • createRadialGradient(x1, y1, r1,  x2, y2, r2); 


//                          都是做填充样式

// var gradient = ctx.createRadialGradient(200, 200, 100, 200, 200, 200);
// gradient.addColorStop(0, '#fff');
// gradient.addColorStop(0.5, '#000');
// gradient.addColorStop(1, '#fff')
// ctx.fillStyle = gradient;

// ctx.beginPath();
// ctx.arc(200, 200, 300, 0, 2 * Math.PI, 0);
// ctx.closePath();
// ctx.fill();
// // ctx.fillRect(0, 0, width, height);



//                         • 阴影 
//                         • ctx.shadowColor 
//                         • ctx.shadowOffsetX 
//                         • ctx.shadowOffsetY 
//                         • ctx.shadowBlur 
//                         • !!!!!!这⾥里里的偏移量量不不受坐标系变换的影响!!!!!!


// ctx.shadowColor = 'green';
// ctx.shadowOffsetX = 10;
// ctx.shadowOffsetY = 10;
// ctx.shadowBlur = 20;
// ctx.fillRect(100, 100, 200, 200);


//                          • ⽂文本 
//                          • ﬁllText() • strokeText() 
//                          • measureText(‘hello world’) 
//                          了了解

// ctx.fillStyle = 'green';
// ctx.font = '50px sans-serif';
// ctx.fillText('hello world', 100, 100);

// var len = ctx.measureText('hello world');
// console.log(len);

// 注意一下textAlign、textBaseline 属性 默认start偏左 alphabetic,默认切baseline对齐


//                       线段相关属性
//                        • lineCap
//                        • lineJoin

// ctx.lineWidth = 50;

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(400, 100);
// ctx.stroke();
// //默认“miter”

// ctx.beginPath();
// ctx.lineCap = 'square';
// ctx.moveTo(100, 200);
// ctx.lineTo(400, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.lineCap = 'round';
// ctx.moveTo(00, 300);
// ctx.lineTo(400, 300);
// ctx.stroke();

//                     ctx.miterLimit; 
//                     当lineJoin是miter时⽤
//                     用于控制 斜接部分的⻓长度，
//                     当超过limit*lineWidth/2 
//                     时变成bevel，了了解就好


// ctx.lineWidth = 50;

// ctx.beginPath();
// // ctx.lineJoin = 'square';
// // ctx.lineJoin = 'round';
// // ctx.lineJoin = 'bevel';
// ctx.lineJoin = 'miter';
// ctx.miterLimit = 100;
// ctx.moveTo(100, 100);
// ctx.lineTo(400, 100);
// ctx.lineTo(120, 150);
// ctx.stroke();


//                       裁剪,
//                       当前路路径外的区域不不再绘制
//                        • ctx.clip() 

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI * 2, 0);
// ctx.closePath();
// ctx.clip();
// ctx.fillRect(100, 100, 300, 300);
// ctx.strokeRect(100, 100, 400, 400);


//                          合成    －》新像素和原像素的合并⽅方式 
//                          • ctx.globalCompositeOperation 
//                          • 11种值 默认 source-over w3c标准 
//                          • source-over, destination-over, copy
//                          重叠先后问题，占用隐藏等各种交错重叠合并先后问题
//                          • 设置全局透明度
// ctx.globalAlpha = '0.5';//放在最后不行
// ctx.globalCompositeOperation = 'destination-over';
// ctx.fillStyle = 'green';
// ctx.fillRect(100, 100, 200, 200);
// ctx.fillStyle = 'red';
// ctx.fillRect(150, 150, 200, 200);


//                            • 图⽚片 • drawImage(); 
//                            第⼀一个参数是 img(Image,canvas,video)
//                             • 3个参数  (x, y) 
//                             • 5个参数 (x, y, dx, dx) 
//                             • 9个参数 (x1, y1, dx1, dx2, x2, y2, w2, h2)

//是画到canvas 不是填充！！！！！！！

// var img = document.getElementById('img');

// // img.onload = function() {
// //     ctx.drawImage(img, 0, 0);
// // }

// // img.onload = function() {
// //     ctx.drawImage(img, 0, 0, 100, 100);
// // }

// //                            后四个参数剪切样式，前四个参数画到canvas
// img.onload = function() {
//     ctx.drawImage(img, 0, 0, 200, 100, 0, 0, 300, 300);
// }



//                        • toDataURL() 
//          ！！！         • 将canvas的内容抽取成⼀一张图⽚片,作为base64编码导出 

//        • toDataURL() 是canvas⾃自身的⽅方法     不是上下⽂文对象ctx的方法
//                           就是copy canvas图片一份 然后 放到 img里 做src 值



// ctx.fillRect(100, 100, 200, 100);
// var img = canvas.toDataURL();
// console.log(img);

// data: image / png;
// base64, iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t + KAAAaeUlEQ… dzkgABAgQIZAQMeqYKQQgQIECAwC5g0Hc7JwkQIECAQEbgPxKZZfWayotYAAAAAElFTkSuQmCC

// ctx.fillRect(100, 100, 200, 100);
// var data = canvas.toDataURL();
// var img = document.createElement('img');
// img.src = data;
// document.body.appendChild(img);
// console.log(img);


//                                     • 获得canvas的像素信息 
//                                     • getImageData(x, y, dx, dy) // 同源策略略 
//                                     • createImageData(w,h) 
//                                     • putImageData(d, x, y)


// 很厉害？？getImageData(x, y, dx, dy）是将canvas 的像素点信息取到 - 》修改像素信息

// ctx.fillRect(100, 100, 300, 300);
// var data = ctx.getImageData(0, 0, width, height);
// console.log(data);

//  ImageDatadata: 
//  Uint8ClampedArray[1000000]
//  height: 500
//  width: 500__proto__: ImageData
// 250000个像素点，一个像素点有rgba四个值 共 100 0000个值

var img = document.getElementById('img');
img.onload = function() {
        ctx.drawImage(img, 0, 0, 200, 100, 0, 0, 300, 300);
        // ctx.fillRect(100, 100, 300, 300);
        var data = ctx.getImageData(0, 0, width, height);
        //报错 同源策略，保护隐私，必须符合同源策略，可看，不可复制内容
        //所以要做到同域名，同端口，同协议
        console.log(data);
    }
    //解决办法 启动服务器 server
    // mac server
    // python - m SimpleHTTPServer8000  python服务器端口8000
    // php - S localhost: 9000
    // 入口 localhost： 8000

// 把图片放到canvas里面,drawImage
//通过 getImageData ====>>>> 获取到canvas的像素信息
//通过 高斯模糊算法 （基于javascript的）
// 将上一步获取到的像素信息 修改
//再通过 putImageData 将修改后的像素放回去
//toDataURL 方法 获取到canvas的图形
//再通过 background-imgage /img.src 等等返回到页面上去

//css滤镜  css filter 可以实现模糊 ，不过有缺点 支持兼容性不好



// // getImageData 像素操作
// ctx.fillRect(0, 0, 50, 50);
// var pixel = ctx.getImageData(0, 0, 50, 50);
// var row = pixel.width;
// var col = pixel.height;
// var d = pixel.data;

// // 对数据做处理，变成灰色
// for (var i = 0; i < row; i++) {
//     var c = i * col * 4;

//     for (var j = 0; j < col; j++) {
//         d[c + j * 4 + 3] = 100;
//     }
// }

// // 将修改后的像素放回去
// ctx.putImageData(pixel, 0, 0);

// 作业
// #通过对canvas的像素操作将一黑色矩形变成灰色 rgba(0,0,0,0.3)修改透明度
// #通过使用canvas，将图片模糊（高斯模糊）