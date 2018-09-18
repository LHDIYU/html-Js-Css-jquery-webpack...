 require('../less/element3dNav.less')
 let elementBase = require('./elementBase.js');
 let element3dNav = (data) =>{
 	let ele = elementBase(data);
 	let componentCss = data.infos.componentCss,
 		texts = data.infos.eleTexts,
 		idName = data.infos.idNames,
 		clientWidth = document.documentElement.clientWidth,
 		oWidth = clientWidth * 0.4,
 		oHeight = oWidth * 0.6,
 		oFontSize = clientWidth * 0.1,
 		liMargin = oFontSize / 2;
 	$('	<ul class= "navWrapper">\
	 		<li class= "firstLi" >\
				<div class= "inFront">'+ texts[0]+'</div>\
				<div class= "inHide" id = "'+ idName[0]+ '">'+ texts[1]+'</div>\
			</li>\
			<li class= "secondLi">\
				<div class= "inFront">'+ texts[2]+'</div>\
				<div class= "inHide" id = "'+ idName[1] +'">'+ texts[3]+'</div>\
			</li>\
		</ul>').appendTo(ele)
 				.find('li').css({width:oWidth,height:oHeight,margin:liMargin})
 				.find('div').css({lineHeight:oHeight + 'px',fontSize:oFontSize / 2 + 'px'});
 	ele.find('.inFront').css({transform:'translateZ('+ oHeight / 2 +'px)'});
 	ele.find('.inHide').css({transform:'translateY('+ oHeight / 2 +'px) rotateX(-90deg)'})
 	ele.find('.firstLi > .inFront').css(componentCss[0]);
 	ele.find('.firstLi > .inHide').css(componentCss[1]);
 	ele.find('.secondLi > .inFront').css(componentCss[2]);
 	ele.find('.secondLi > .inHide').css(componentCss[3]);
 	return ele;
}
 module.exports = element3dNav;