let elementBase = require('./elementBase.js'),
    blurImg = require('./externalFiles/gaussBlur.js');
let elementIMG = (data) => {
	let ele = elementBase(data),
		domEle = ele.get(0),
		url = data.infos.bgURL,
		oImg = new Image();
	oImg.width = document.documentElement.clientWidth / 1.5;
	oImg.height = document.documentElement.clientHeight / 3;
	oImg.onload = function (){
		blurImg(oImg,domEle)
	}
	oImg.src = url;
	return ele;
}

module.exports = elementIMG;