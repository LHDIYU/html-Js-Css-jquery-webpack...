require('../less/elementBase.less')
let elementBase = (data) => {
	let oCss = data.css,
		oInfo = data.infos,
		ele = $('<div class= "element">').attr('id',data.tags);
	ele.on('elementIn',function(){
		if(!oCss.delay){
			oCss.delay = 0;
		}
		(oCss.animateIn === {}) ? '':ele.delay(oCss.delay).animate(oCss.animateIn);
		ele.addClass('loded').removeClass('leaved')
							.find('.grandEle') ?  ele.find('.grandEle').trigger('grandEleLoad'):'';
	});
	ele.on('elementOut',function(){
		(oCss.animateOut === {}) ? '':ele.animate(oCss.animateOut);
		ele.addClass('leaved').removeClass('loded')
							.find('.grandEle') ?  ele.find('.grandEle').trigger('grandEleLeave'):'';
	});
	ele.css(oCss.basic)
		.text(oInfo.texts);
	return ele;
}

module.exports = elementBase;

