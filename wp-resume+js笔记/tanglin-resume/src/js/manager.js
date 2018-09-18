require('../css/initial.css');
require('./externalFiles/jqFP.js');
require('./externalFiles/jqUI.js');
let elementBase = require('./elementBase.js'),
	elementDrawName = require('./elementDrawName.js'),
	element3dNav = require('./element3dNav.js'),
	elementHead = require('./elementHead.js'),
	elementList = require('./elementList.js'),
	elementPie = require('./elementPie.js'),
	elementShowBox = require('./elementShowBox.js'),
	elementIMG = require('./elementIMG.js');
let manager = {
	init (name= 'wrapper') {
		this.container = $('<div class= "wrapper">').hide();
		$(document.body).append(this.container);
		return this;
	},
	addPage (name= 'page') {
		this.page = $('<div class= "section">').addClass(name);
		this.container.append(this.page);
		return this;
	},
	addElement (config= {type:'base'}) {
		let eleType = config.type,
			element = null;
		switch(eleType){
			case 'base':
				element = elementBase(config).addClass('baseElement');
				break;
			case 'drawName':
				element = elementDrawName(config).addClass('elementDrawName');
				break;
			case 'backgroundIMG':
				element = elementIMG(config).addClass('elementIMG');
				break;
			case '3dNav':
				element = element3dNav(config).addClass('element3dNav');
				break;
			case 'header':
				element = elementHead(config).addClass('elementHead');
				break;
			case 'List':
				element = elementList(config).addClass('elementList');
				break;
			case 'showBox':
				element= elementShowBox(config).addClass('elementShowBox');
				break;
			case 'pie':
				element = elementPie(config).addClass('elementPie');
				break;
		}
		this.page.append(element);
		return this;
	},
	load () {
		this.container.show();
		this.container.fullpage({
			onLeave: function (index,nextIndex,direction){
				$('.section').eq(index - 1).trigger('leave');
			},
			afterLoad : function (anchor,index){
				$('.section').eq(index - 1).trigger('load');
			}
		})
		$('.section').on('leave',function(){
			$(this).find('.element').trigger('elementOut');
		});
		$('.section').on('load',function(){
			$(this).find('.element').trigger('elementIn');
		});
		$('#backFirstPage').on('click',function(){
			manager.container.fullpage.moveTo(1);
		});
		for(let i = 1 ;i < 7 ;i++){
			$('#jumpPage'+ i).on('click',function(){
				manager.container.fullpage.moveTo(i + 1);
			})
		}
		
		$('.section').eq(0).trigger('load');
	}
}

module.exports = manager;



// $('.wrapper').fullpage({
// 			sectionsColor : ['white','blue','pink','black'],
// 			onLeave : function (index,nextIndex,direction){
// 				},
// 			afterLoad : function(anchor,index){
// 				}
// 		});