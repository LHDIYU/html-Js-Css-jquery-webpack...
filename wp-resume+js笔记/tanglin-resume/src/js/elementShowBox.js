require('../less/elementShowBox.less');
let elementBase = require('./elementBase.js');
let elementShowBox = (data) =>{
	let ele = elementBase(data),
		info = data.infos.grandEle,
		len = info.oNum;
	for(let i = 0;i < len;i++){
		$(info.oName).addClass('hideBox').css(info.css[i]).text(info.text[i]).appendTo(ele);
	}
	return ele;
}

module.exports = elementShowBox;

// infos:{
// 	grandEle:[
// 			oNum:4,
// 			oName:'<p>',
// 			css:[{},{},{}],
// 			text:['affbaleifbaleif1','2faiwebfiufa','3bauwhfua','4fawfaef']
// 	]
// }