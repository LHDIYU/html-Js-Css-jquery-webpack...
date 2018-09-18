var $imgs = $('.carousel>img'), // 图片集合
    $left = $imgs.siblings('.left'),// 轮播图左按钮
    $right = $imgs.siblings('.right'),// 轮播图右按钮
    index = 0,// 轮播图运动标记
    timer = null;// 轮播图计时器
var initImage = function(){// 初始化轮播图片位置函数
    $imgs.css('display','block');
    $imgs.eq(0).css({'width':328,'height':190,'z-index':0,'opacity':0.3,'left':0,'top':90});
    $imgs.eq(1).css({'width':410,'height':238,'z-index':1,'opacity':0.5,'left':43,'top':66});
    $imgs.eq(2).css({'width':512,'height':296,'z-index':2,'opacity':1,'left':86,'top':37});
    $imgs.eq(3).css({'width':640,'height':370,'z-index':3,'opacity':1,'left':130,'top':0});
    $imgs.eq(4).css({'width':512,'height':296,'z-index':2,'opacity':1,'left':301,'top':37});
    $imgs.eq(5).css({'width':410,'height':238,'z-index':1,'opacity':0.5,'left':447,'top':66});
    $imgs.eq(6).css({'width':328,'height':190,'z-index':0,'opacity':0.3,'left':572,'top':90});
};
var leftMove = function(){// 轮播图片左移函数
    $imgs.eq(index % 7).animate({'width':410,'height':238,'opacity':0.5,'left':43,'top':66}).css('z-index',1);
    $imgs.eq((index + 1) % 7).animate({'width':512,'height':296,'opacity':1,'left':86,'top':37}).css('z-index',2);
    $imgs.eq((index + 2) % 7).animate({'width':640,'height':370,'opacity':1,'left':130,'top':0}).css('z-index',3);
    $imgs.eq((index + 3) % 7).animate({'width':512,'height':296,'opacity':1,'left':301,'top':37}).css('z-index',2);
    $imgs.eq((index + 4) % 7).animate({'width':410,'height':238,'opacity':0.5,'left':447,'top':66}).css('z-index',1);
    $imgs.eq((index + 5) % 7).animate({'width':328,'height':190,'opacity':0.3,'left':572,'top':90}).css('z-index',0);
    $imgs.eq((index + 6) % 7).animate({'width':328,'height':190,'opacity':0.3,'left':0,'top':90}).css('z-index',0);
    index--;
};
var rightMove = function(){// 轮播图图片右移函数
    $imgs.eq(index % 7).animate({'width':328,'height':190,'opacity':0.3,'left':572,'top':90}).css('z-index',0);
    $imgs.eq((index + 1) % 7).animate({'width':328,'height':190,'opacity':0.3,'left':0,'top':90}).css('z-index',0);
    $imgs.eq((index + 2) % 7).animate({'width':410,'height':238,'opacity':0.5,'left':43,'top':66}).css('z-index',1);
    $imgs.eq((index + 3) % 7).animate({'width':512,'height':296,'opacity':1,'left':86,'top':37}).css('z-index',2);
    $imgs.eq((index + 4) % 7).animate({'width':640,'height':370,'opacity':1,'left':130,'top':0}).css('z-index',3);
    $imgs.eq((index + 5) % 7).animate({'width':512,'height':296,'opacity':1,'left':301,'top':37}).css('z-index',2);
    $imgs.eq((index + 6) % 7).animate({'width':410,'height':238,'opacity':0.5,'left':447,'top':66}).css('z-index',1);
    index++;
};
// 轮播图处理
initImage();
timer = setInterval(rightMove,2000);
$left.click(function(){
    if(!$imgs.eq(0).is(':animated')){
        leftMove();
    }
});
$right.click(function(){
    if(!$imgs.eq(0).is(':animated')){
        rightMove();
    }
});
$imgs.parent().on('mouseover', function(){// 实现鼠标悬浮轮播图后的滞留效果
    clearInterval(timer);
}).on('mouseout', function(){
    timer = setInterval(rightMove,2000);
});
