var canvas = document.getElementById('canvas');
var w = canvas.clientWidth;
var h = canvas.clientHeight;
var ctx = canvas.getContext('2d');

// 刮刮卡实现
ctx.fillStyle = '#ccc';
// ctx.globalCompositeOperation = 'destination-over';
ctx.fillRect(0, 0, w, h);

canvas.style.backgroundImage = "url('./baozou.jpg')";
// ctx.globalCompositeOperation = 'destination-out';

var pObj = canvas.getBoundingClientRect(),
    offsetX = pObj.left,
    offsetY = pObj.top;

// ctx.fillStyle = '#000';

canvas.addEventListener('mousemove', function (e) {
    var cx = e.clientX - offsetX,
        cy = e.clientY - offsetY;

    ctx.clearRect(cx, cy, 50, 50);
    console.log(cx + ' ' + cy);
}, false);
