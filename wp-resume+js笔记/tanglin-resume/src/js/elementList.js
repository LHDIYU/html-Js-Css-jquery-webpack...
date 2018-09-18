require('../less/elementList.less');
let elementBase = require('./elementBase.js');
let elementList = (data) =>{
	let ele = elementBase(data),
		oUl = $('<ul class= "li-box">'),
		lastTop = 0,
		lastBottom = 3,
		info  = data.infos;
	for(let i = 0;i < info.listLength;i++){
		$('<li class= "li-hobby'+ i +'">')
			.text(info.listTexts[i])
			.appendTo(oUl);
	}
	oUl.on('click','li',function(e){
			var eve = e||window.event,
			 	index = $(eve.target).index();
			if(index < 3 && index !== lastTop){
				$('.showBrand').html('').remove();
				showBrand(info.showDivTexts[index]).prependTo(ele);
				lastTop = index;
			}else if(index >= 3){
				$('.carouselWrapper').html('').remove();
				carousel(info.carousel[index -3]).appendTo(ele)
				lastBottom = index;
			}
	});
	let carousel = (obj) => {
		let $div = $('<div class= "carouselWrapper">\
					<span class ="LeftBtn">\<</span>\
					<ul class= "carousel">\
						<li class="slider0"><img src="'+obj[0] +'"></li>\
						<li class="slider1"><img src="'+obj[1]+'"></li>\
						<li class="slider2"><img src="'+obj[2] +'"></li>\
					</ul>\
					<span class = "RightBtn">\></span>\
					<div>');
		let arr = [	{transform:'translatez(-50px)',left:'-20px'},
					{transform:'translatez(80px)',left:'40px'},
					{transform:'translatez(-50px)',left:'120px'}
				];
		$div.find('span').on('click',function(e){
			let eve = e||window.event,
				$li = $('.carousel').find('li'),
				index  = $(eve.target).index();
			if(index == 0){
				let first = arr.pop();
				arr.unshift(first);
				for(let i = 0;i < 3;i++){
					$li.eq(i).css(arr[i])
				}
			}else if(index == 2){
				let first = arr.shift();
				arr.push(first);
				for(let i = 0;i < 3 ;i++){
					$li.eq(i).css(arr[i])
				}
			}
		})
		return $div.css(info.commandDiv[1]);
	};
	let	showBrand = (obj) => {
		let $div =  $('<div class= "showBrand">\
						<div class= "tagBox">'+ obj[0]+'</div>\
						<h3>'+ obj[1]+'</h3>\
						<p>'+ obj[2]+'</p>\
					</div>');

		return $div.css(info.commandDiv[0]);
	}
	oUl.appendTo(ele);
	showBrand(info.showDivTexts[0]).prependTo(ele);
	carousel(info.carousel[0]).appendTo(ele);
	return ele;
}
module.exports = elementList;


// {
// type:'base',
// css:{
// 	basic:{
// 		width:clientWidth * 0.8,
// 		height:clientWidth * 0.2,
// 		backgroundImage:'url("./src/img/myInfo.png")',
// 		backgroundSize:'100% 100%',
// 		position:'absolute',
// 		top:clientWidth* 0.05,
// 		left:'-100%'
// 	},
// 	animateIn:{
// 		opacity:1,
// 		left:(clientWidth * 0.05)
// 	},
// 	animateOut:{
// 		left:'-100%',
// 		opacity:0
// 	}
// },
// infos:{
// 	texts:'',
//	listLength:,
// 	listTexts:[],
// commandDiv:[{},{}]
// commandFunc:[{},{}]
// }
			