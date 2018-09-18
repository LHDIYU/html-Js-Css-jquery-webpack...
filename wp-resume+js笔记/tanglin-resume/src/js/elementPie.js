require('../less/elementPie.less');
let elementBase = require('./elementBase.js');
let elementPie = (data) =>{
	let ele = elementBase(data);
	let infos = data.infos.arr,
		oCanvas = $('<canvas>').get(0);
	ele.append(oCanvas);

	let [w,h] = [ 2 * data.css.basic.width,2 * data.css.basic.height];
	[oCanvas.width,oCanvas.height] = [w,h];

	let oCtx = oCanvas.getContext('2d');
	oCtx.fillStyle = '#eee';

	let r = w/2;
	oCtx.beginPath();
	oCtx.arc(r,r,r,0,Math.PI*2);
	oCtx.fill();

	let oCavsData = $('<canvas/>').get(0);
    [oCavsData.width, oCavsData.height] = [w, h]
    ele.append(oCavsData);
    let oCxtData = oCavsData.getContext('2d');
    
    let sAngle = 1.5 * Math.PI;
    let eAngle = 0;
    let aAngle = 2 * Math.PI;
   infos.forEach((key, index) => {
        oCxtData.beginPath();
        eAngle = sAngle + key[1] * aAngle;
        oCxtData.fillStyle = key[2];
        oCxtData.moveTo(r, r);
        oCxtData.arc(r, r, r, sAngle, eAngle);
        oCxtData.fill();

        var trueR = w / 4;
        let textAngle = sAngle + (eAngle - sAngle) / 2;
        
        let x = Math.abs( trueR * Math.cos(aAngle - (sAngle + (eAngle - sAngle) / 2 ) ) );
        let y = Math.abs( trueR * Math.sin(aAngle - (sAngle + (eAngle - sAngle) / 2 ) ) );

        let oText = $('<div/>').addClass('text').css('position', 'absolute').text(key[0]);

        if (textAngle >= 1.5 * Math.PI && textAngle < 2.5 * Math.PI) {
            oText.css({left: trueR + x});
        }else if (textAngle >= 2.5 * Math.PI && textAngle <= 3.5 * Math.PI) {
            oText.css({right: trueR + x});
        }

        if ( (textAngle >= 1.5 * Math.PI && textAngle < 2 * Math.PI) || (textAngle >= 3 * Math.PI && textAngle < 3.5 * Math.PI)  ){
            oText.css({bottom: trueR + y});
        }else if (textAngle >= 2 * Math.PI &&  textAngle < 3 * Math.PI) {
            oText.css({top: trueR + y});
        }

        oText.appendTo(ele);
        sAngle = eAngle;
    });

    let oMask = $('<canvas/>').get(0);
    [oMask.width, oMask.height] = [w, h];

    let oMCxt = oMask.getContext('2d');
    ele.append(oMask);
    oMCxt.fillStyle = '#7aa899';

    function draw (percent) {
        oMCxt.clearRect(0, 0, w, h);
        oMCxt.beginPath();
        oMCxt.moveTo(r, r);
        oMCxt.arc(r, r, r, 1.5 * Math.PI, 1.5 * Math.PI - aAngle * percent, 1);
        oMCxt.fill();
    }
   
    draw(1);

    ele.on('elementIn', () => {
        var index = 1;
        setTimeout (() => {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    index -= 0.01;
                    draw(index)  
                }, i * 20);
            }
        }, 1500) 
    });


    ele.on('elementOut', () => {
        draw(1);
    });	



	return ele;
}
module.exports = elementPie;