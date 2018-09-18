//                             一



//  canvas [ˈkænvəs] 画布
// canvas应⽤用场景 

// • 游戏 
// • 图表 
// • 各种炫酷的东⻄西 
// https://events.google.com/io2016/ 
// • codepen.io

//  最早在apple的safari 1.3中引⼊入 
// • ie9之前的浏览器器不不⽀支持canvas
//   • http://caniuse.com/




// 二




// Gpu 加速

//cpu gpu 高性能计算

//gpu -> 就是伪图形计算而生

//cpu 逻辑

//gpu运算

// css动画 transform

// @keyframes motion{
//     问题？  css3 如何提高性能，
// 立体的东西，复杂 gpu 3d 高性能运算
// 2d、cpu去做。 3d、gpu去运行*/
//     不是所有属性都有动画
//     可提高性能，
//     用以下标签可实现加速没有动画属性的性能
//     transform:translateZ(0);
//     transform:rotateX();
//     transform:rotateX();
//     通过这些元素属性可以让程序、电脑，认为所处理的没有动画的元素做立体3d元素去计算处理；

// 0% {
//     transform:translate3d(0,0,0);
// }
// 100% {
//     transform:translate3d(1000px,0,0);
// }

// }



// 1.获得canavs元素 


var canvas = document.getElementById('myCanvas');
// 检验
console.log(canvas);



//canva 就是一个画布
//上下文对象 就是 一支笔



// 2.获得canvas上下⽂文对象 

var ctx = canvas.getContext('2d');

//为啥不不是3d 呢？ 
// ‘webgl’ 主要做3d方面的绘制  应用 vr技术 基于canvas





//                        • 这⾥里里需要区分两个对象 

//                        • 元素对象（canvas元素）和上下⽂文对象
//                        （通过 getContext('2d')⽅方法
//                        获取到的 CanvasRenderingContext2D对象）

//                        • 元素对象相当于我们的画布，上下⽂文对象相当于画笔， 
//                        我们接下来的所有操作是基于上下⽂文对象的





//                        绘制一条线段
//                          线段 
//                         • beginPath();
//                         • moveTo();
//                         • lineTo();
//                         • stroke(); 
//                         • ﬁll(); (ﬁll() & stroke())
//                         • 未闭合？如何绘制⼀一个闭合的三⻆角形？ 
//                         • clothPath() *建议* / lineTo start point 
//                         • lineWidth = 20;  
//                         绘制粗线条路路径




// ctx.beginPath();
// ctx.lineWidth = 20;
// ctx.strokeStyle = 'green';
// ctx.fillStyle = 'red';
// ctx.moveTo(100,100);
// ctx.lineTo(300,100);
// ctx.lineTo(300,300);
// ctx.lineTo(100,300);

// ctx.lineTo(100,100);
// ctx.closePath();
// ctx.stroke(); 
// ctx.fill();
//绘制出来


//                    1.ﬁll和stroke⽅方法都是作⽤用在当前的所有⼦子路路径 
//                    • 2.完成⼀一条路路径后要重新开始另⼀一条路路径时必须使⽤用 
//                    beginPath()⽅方法




// ctx.lineWidth = 20;
// ctx.strokeStyle = 'green';
// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(300,100);
// ctx.moveTo(100,300);
// ctx.lineTo(300,300);


// ctx.lineTo(100,100);
// ctx.closePath();
// ctx.stroke(); 
// ctx.fill();
//绘制出来

// ctx.lineWidth = 20; 
// ctx.moveTo(100, 50); 
// ctx.lineTo(100, 100); 
// ctx.lineTo(50, 100); 
// ctx.closePath(); 
// ctx.strokeStyle = 'red';
// ctx.stroke();
// ctx.moveTo(200, 200);
// ctx.lineTo(200, 400);
// ctx.strokeStyle = '#000'; 
// ctx.stroke();

// 结果#000



// ctx.lineWidth = 20;
// ctx.strokeStyle = 'green';
// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(300,100);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100,300);
// ctx.lineTo(300,300);


// ctx.lineTo(100,100);
// ctx.closePath();
// ctx.stroke(); 
// ctx.fill();
//绘制出来


//                             • 矩形
//                             • rect(x, y, dx, dy); 
//                             • ﬁllRect(x, y, dx, dy); 
//                             • strokeRect(x, y, w, h); • 
//                             使⽤用后两种⽅方法






// ctx.strokeRect(100, 100, 200, 200);
// ctx.fillRect(200, 200, 100, 100);

// ctx.beginPath();
// ctx.rect(100, 100, 200, 200);
// ctx.closePath();
// ctx.stroke();


// ctx.clearRect(200, 200, 100, 100);
//                    擦除

//                     全部
var width = canvas.width;
var height = canvas.height;
// ctx.clearRect(0, 0, width, height);



//                      • 擦除当前区域 • clearRect(x, y, dx, dy); 
//                      • 实现矩形落地动画。

//                      完成⼀一条路路径后要重新开始另⼀一条 
//                      路路径时必须使⽤用beginPath()⽅方法


// // var y = 50;

// var y = 400;

// function drawRect(y) {
//     // ctx.benginPath();
//     // ctx.rect(50, y, 20, 20);
//     // ctx.fill();

//     // ctx.fillRect(50, y, 20, 20);


//     ctx.fillStyle = 'grey';
//     ctx.rect(0, 0, 500, y);
//     ctx.fill();


// }
// var timer = setInterval(function() {
//     ctx.clearRect(0, 0, width, height);
//     drawRect(y);
//     y += 10;
//     if (y > 400) {
//         clearInterval(timer);
//     }
// }, 50);





var y = 400;

function drawRect(y) {



    ctx.fillStyle = 'grey';
    ctx.rect(0, 0, 500, y);
    ctx.fill();


}
drawRect(y);

canvas.onmousedown = function(e) {
    var lastX = 0,
        lastY = 0;
    var event = e || window.event;
    document.onmousemove = function(e) {
        var event = e || window.event;

        var newL = event.clientX;
        var newT = event.clientY;


        ctx.clearRect(newL, newT, 30, 30);

    }
    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}










//                     • 弧形 
//                     • arc(x, y, r, 起始弧度, 结束弧度,弧形的⽅方向 ) 
//                     • 0顺时针 1逆时针

// ctx.beginPath();
// // ctx.arc(250, 250, 100, 0, Math.PI / 2, 0);
// ctx.arc(250, 250, 100, 0, Math.PI / 2, 1);
// ctx.stroke();

//                      • 绘制第⼀一个图形 
//                      • arc⽅方法将当前点和弧形的起点⽤用⼀一条直线连接

// ctx.beginPath();
// ctx.moveTo(250, 250); //移动到某一点 会有半径线
// ctx.arc(250, 250, 100, 0, -Math.PI / 3, 0);
// ctx.closePath();
// ctx.stroke();




//                                     arcTo(x1, y1, x2, y2, r) 
//                                     • 绘制的弧线与当前点和x1,y1连线，x1,y1和x2,y2连 线都相切

//                                     • 练习 
//                                     • 绘制圆⻆角矩形



// ctx.beginPath();
// ctx.moveTo(150, 50);
// ctx.arcTo(200, 50, 200, 150, 30);
// ctx.arcTo(200, 150, 100, 150, 30);
// ctx.arcTo(100, 150, 100, 50, 30);
// ctx.arcTo(100, 50, 200, 50, 30);
// ctx.closePath();
// ctx.stroke();