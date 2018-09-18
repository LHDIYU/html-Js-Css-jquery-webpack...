require('../less/elementHead.less');
let elementBase = require('./elementBase.js');
let elementHead = (data) => {
	let ele = elementBase(data);
	let urls = data.infos.eleURLs,
		popUp = data.infos.popUp,
		eleTexts = data.infos.eleTexts;
	$('<div class="member-image">\
			<img src="'+ urls[0] +'" alt="designerPic">\
		</div>\
		<div class="member-info">\
			<h3>THE RESUME</h3>\
			<h5> By TangLin</h5>\
			<p>'+ eleTexts[0] +'</p>\
			<div class="social-touch">\
				<a class="linkQQ" style ="background-image:url('+ urls[1] +')" href = "#"></a>\
				<a class="linkWechat" style ="background-image:url('+ urls[2] +')" href = "#"></a>\
				<a class="linkPhone" style ="background-image:url('+ urls[3] +')" href = "#"></a>\
				<a class="linkSchool" style ="background-image:url('+ urls[4] +')" href = "#"></a>\
			</div>\
	</div>').appendTo(ele);
	let $a = ele.find('.social-touch > a');
	let flag = true;
	for(let i = 0;i < 4;i++){
		$a.eq(i).on("click",function(){
			number(this,popUp[i]);
		})
	}
	function number(jq,num){
		if(flag){
			$(jq).prevAll().hide();
			$(jq).nextAll().hide();
			$(jq).css({width:'100%',backgroundSize:'0px 0px'});
			let len = num.length,
				i = 0,
				texts = "";
			var timer = setInterval(function(){
				texts += num.charAt(i);
				$(jq).text(texts);
				i++;
				if(i === len ){
					i = 0;
					clearInterval(timer);
					flag = false;
				}
			},100)
		}else{
			$(jq).css({width:50,backgroundSize:'50px 50px'}).text('');
			$a.show();
			flag = true;
		}
	}
	return ele;
}
module.exports = elementHead;
// {
// 							type:'3dNav',
// 							css:{
// 								basic:{
// 									position:'absolute',
// 									bottom:-100,
// 									opacity:0
// 								},
// 								animateIn:{
// 									bottom:0,
// 									opacity:1
// 								},
// 								animateOut:{
// 									bottom:-150,
// 									opacity:0
// 								},
// 								delay:0
// 							},
// 							infos:{
//								eleURLs:[]
// 								eleTexts:["If you can not get a miracle,become one!"]
//								page:{pageName:'firstPage',cssIn:{},cssOut:{}},
//								popUp:[{titleText:[,,,],descripText:[,,,],srcs:[,,,],cssIn:{},cssOut:{}},{},{},{}]	
// 							}
// 						}

	// <div class="element">
	// 		<div class="member-image">
	// 			<img src="images/member_270x210.jpg" alt="designerPic">
	// 		</div>
	// 		<div class="member-info">
	// 			<h3>Sophia</h3>
	// 			<h5>ShowGilr</h5>
	// 			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .</p>
	// 			<div class="social-touch">
	// 				<a class="fb-touch" href="#"></a>
	// 				<a class="tweet-touch" href="#"></a>
	// 				<a class="linkedin-touch" href="#"></a>
	// 			</div>
	// 		</div>
	// 	</div>





















