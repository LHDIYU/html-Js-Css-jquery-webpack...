 let manager =  require('./manager.js');
 let clientWidth = document.documentElement.clientWidth,
 	 infoData = [
	['Js',0.3,'blue'],
	['Jq',0.2,'yellow'],
	['H5',0.2,'green'],
	['Css3',0.1,'grey'],
	['Html',0.1,'black'],
	['Ps',0.1,'pink']
];
 manager.init()
 			.addPage('firstPage')
 				.addElement({
							type:'header',
							tags:'resumeHead',
							css:{
								basic:{
									width:clientWidth * 0.8,
									height:clientWidth * 0.8,
									position:'absolute',
									top:-100,
									opacity:0,
									margin:'0px '+ clientWidth * 0.1 +'px'
								},
								animateIn:{
									top:0,
									opacity:1
								},
								animateOut:{
									top:-100,
									opacity:0
								},
								delay:0
							},
							infos:{
								eleURLs:["./src/img/1.jpg","./src/img/qq.jpg","./src/img/phone.jpg","./src/img/wechat.jpg","./src/img/school.jpg"],
								eleTexts:["If you can not get a miracle,become one!"],
								page:{
									pageName:'.firstPage',
									cssIn:{zIndex:-999},
									cssOut:{visibility:'visiable'}
								},
								popUp:['1357523553','18204608006','18204608006','哈尔滨理工大学']
							}
						})
 				.addElement({
							type:'3dNav',
							css:{
								basic:{
									position:'absolute',
									bottom:-100,
									opacity:0
								},
								animateIn:{
									bottom:0,
									opacity:1
								},
								animateOut:{
									bottom:-150,
									opacity:0
								},
								delay:200
							},
							infos:{
								idNames:['jumpPage5','jumpPage6'],
								eleTexts:["软件技能","快速查看","自我评价","快速查看"],
								componentCss:[
									{	
										background:'url("./src/img/liBG.jpg")',
										backgroundSize:'100% 100%',
										color:'black'
									},
									{
										background:'url("./src/img/liBG1.jpg")',
										backgroundSize:'100% 100%',
										color:'blue'
									},
									{
										background:'url("./src/img/liBG7.jpg")',
										backgroundSize:'100% 100%',
										color:'green'
									},
									{
										background:'url("./src/img/liBG3.jpg")',
										backgroundSize:'100% 100%',
										color:'white'
									}]
							}
						})
 				.addElement({
							type:'3dNav',
							css:{
								basic:{
									position:'absolute',
									bottom:0,
									opacity:0
								},
								animateIn:{
									opacity:1,
									bottom:clientWidth * 0.30
								},
								animateOut:{
									bottom:0,
									opacity:0
								},
								delay:600
							},
							infos:{
								idNames:['jumpPage3','jumpPage4'],
								eleTexts:["教育背景","快速查看","项目经历","快速查看"],
								componentCss:[
									{	
										background:'url("./src/img/liBG4.jpg")',
										backgroundSize:'100% 100%',
										color:'blue'
									},
									{
										background:'url("./src/img/liBG5.jpg")',
										backgroundSize:'100% 100%',
										color:'black'
									},
									{
										background:'url("./src/img/liBG6.jpg")',
										backgroundSize:'100% 100%',
										color:'white'
									},
									{
										background:'url("./src/img/liBG2.jpg")',
										backgroundSize:'100% 100%',
										color:'black'
									}]
							}
						})
 				.addElement({
							type:'3dNav',
							css:{
								basic:{
									position:'absolute',
									bottom:0,
									opacity:0
								},
								animateIn:{
									bottom:clientWidth * 0.60,
									opacity:1
								},
								animateOut:{
									bottom:0,
									opacity:0
								},
								delay:1000
							},
							infos:{
								idNames:['jumpPage1','jumpPage2'],
								eleTexts:["基本信息","快速查看","兴趣爱好","快速查看"],
								componentCss:[
									{	
										background:'url("./src/img/liBG9.jpg")',
										backgroundSize:'100% 100%',
										color:'white'
									},
									{
										background:'url("./src/img/liBG8.jpg")',
										backgroundSize:'100% 100%',
										color:'white'
									},
									{
										background:'url("./src/img/liBG10.jpg")',
										backgroundSize:'100% 100%',
										color:'black'
									},
									{
										background:'url("./src/img/liBG11.jpg")',
										backgroundSize:'100% 100%',
										color:'white'
									}]
							}
						})
 			.addPage('secondPage')
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.8,
									height:clientWidth * 0.2,
									backgroundImage:'url("./src/img/myInfo.png")',
									backgroundSize:'100% 100%',
									position:'absolute',
									top:clientWidth* 0.05,
									left:'-100%'
								},
								animateIn:{
									opacity:1,
									left:(clientWidth * 0.05)
								},
								animateOut:{
									left:'-100%',
									opacity:0
								}
							},
							infos:{
								texts:''
							}
						})
 				.addElement({
 					type:'base',
 					css:{
 						basic:{
 							width:clientWidth * 1.5,
 							height:clientWidth *1.5,
 							backgroundImage:'url(./src/img/PHONE.png)',
 							backgroundSize:'100% 100%',
 							position:'absolute',
 							bottom:-500,
 							opacity:0,
 							margin:'0 -25%'
 						},
 						animateIn:{
 							bottom:'5px',
 							opacity:1
 						},
 						animateOut:{
 							opacity:0,
 							bottoom:0
 						},
 						delay:500
 					},
 					infos:{
 						texts:''
 					}
 				})
 				.addElement({
							type:'drawName',
							css:{
								basic:{
									height:clientWidth * 0.15,
									width:clientWidth * 0.4,
									position:'absolute',
									right:clientWidth * 0.2,
									top:clientWidth * 0.5,
									opacity:0
								},
								animateIn:{
									opacity:1
								},
								animateOut:{
									opacity:0
								},
								delay:1200
							},
							infos:{
								texts:''
							}
						})
 			.addPage('thirdPage')
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.8,
									height:clientWidth * 0.2,
									backgroundImage:'url("./src/img/myHobby.png")',
									backgroundSize:'100% 100%',
									position:'absolute',
									top:clientWidth* 0.05,
									left:'-100%'
								},
								animateIn:{
									opacity:1,
									left:(clientWidth * 0.05)
								},
								animateOut:{
									left:'-100%',
									opacity:0
								}
							},
							infos:{
								texts:''
							}
						})
 				.addElement({
							type:'List',
							css:{
								basic:{
									width:clientWidth * 0.8,
									height:clientWidth * 0.2,
									position:'absolute',
									fontSize:18,
									lineHeight:'150%',
									top:100,
									opacity:0,
									left:-200
								},
								animateIn:{
									opacity:1,
									left:clientWidth * 0.1
								},
								animateOut:{
									left:-200,
									opacity:0
								},
								delay:500
							},
							infos:{
								texts:'',
								listLength:6,
								listTexts:['健身','听歌','小说','摄影','追剧','游戏'],
								commandDiv:[
									{
										height:200,
										width:clientWidth * 0.8,
										overflow:'hidden',
										position:'relative',
										borderRadius:20,
										marginBottom:10,
										border:'1px solid black'
									},
									{
										height:200,
										width:clientWidth * 0.8,
										borderRadius:20,
										position:'relative',
										marginTop:10,
										border:'1px solid black'
									}],
								cssIn:[],
								cssOut:[],
								showDivTexts:[
									['体','我爱健身 但不爱打球！','从大一下期开始的，在学校时候每周都会去2~3次健身房，现在有着六块腹肌、胸肌、前踞肌，偶尔还会去游泳馆（去年12月刚学会不久），还只能坚持几十米。'],
									['听','我爱听 但不爱唱','喜欢的音乐种类————纯音乐、摇滚、电子、说唱、小清新、老歌。不喜欢的有布鲁斯和民谣，尤其是民谣，别给我听。喜欢的歌星 --Lenka,费玉清，汪峰,共和时代，杰伦和jj偶尔听'],
									['书','不算严格意义上的小说党','喜欢过的书--《穆斯林的葬礼》、《平凡的世界》、《庶女有毒》、等。其中《庶女有毒》和《平凡的世界》故事写得很扣人心弦，都被改成了电视剧，一部叫锦绣未央，一部叫平凡的世界。']
								],
								carousel:[
									['./src/img/liBG1.jpg','./src/img/liBG2.jpg','./src/img/liBG3.jpg'],
									['./src/img/liBG4.jpg','./src/img/liBG5.jpg','./src/img/liBG6.jpg'],
									['./src/img/liBG7.jpg','./src/img/liBG8.jpg','./src/img/liBG9.jpg']
								]
							}
						})
 			.addPage('forthPage')
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.8,
									height:clientWidth * 0.2,
									backgroundImage:'url("./src/img/myEducation.png")',
									backgroundSize:'100% 100%',
									position:'absolute',
									top:clientWidth* 0.05,
									left:'-100%'
								},
								animateIn:{
									opacity:1,
									left:(clientWidth * 0.05)
								},
								animateOut:{
									left:'-100%',
									opacity:0
								}
							},
							infos:{
								texts:''
							}
						})
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.9,
									height:clientWidth * 0.8,
									backgroundImage:'url("./src/img/certificate.png")',
									backgroundSize:'100% 100%',
									position:'absolute',
									top:clientWidth* 0.25,
									left:'-100%'
								},
								animateIn:{
									opacity:1,
									left:(clientWidth * 0.05)
								},
								animateOut:{
									left:'-100%',
									opacity:0
								},
								delay:500
							},
							infos:{
								texts:''
							}
						})
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.4,
									height:clientWidth * 0.08,
									lineHeight:'150%',
									position:'absolute',
									top:clientWidth* 0.48,
									right:'-100%',
									fontSise:18,
									fontWeight:400,
									fontStyle:'italic',
									opacity:0
								},
								animateIn:{
									opacity:1,
									right:(clientWidth * 0.2)
								},
								animateOut:{
									right:'-100%',
									opacity:0
								},
								delay:700
							},
							infos:{
								texts:'1 - 英语四级证书'
							}
						})
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.4,
									height:clientWidth * 0.08,
									lineHeight:'150%',
									position:'absolute',
									top:clientWidth* 0.56,
									right:'-100%',
									fontSise:18,
									fontWeight:400,
									fontStyle:'italic',
									opacity:0
								},
								animateIn:{
									opacity:1,
									right:(clientWidth * 0.2)
								},
								animateOut:{
									right:'-100%',
									opacity:0
								},
								delay:900
							},
							infos:{
								texts:'2 - 驾驶证书'
							}
						})
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.5,
									height:clientWidth * 0.08,
									lineHeight:'150%',
									position:'absolute',
									top:clientWidth* 0.64,
									right:'-100%',
									fontSise:18,
									fontWeight:400,
									fontStyle:'italic',
									opacity:0
								},
								animateIn:{
									opacity:1,
									right:(clientWidth * 0.1)
								},
								animateOut:{
									right:'-100%',
									opacity:0
								},
								delay:1100
							},
							infos:{
								texts:'3 - 校辩论赛优秀辩手'
							}
						})
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.4,
									height:clientWidth * 0.08,
									lineHeight:'150%',
									position:'absolute',
									top:clientWidth* 0.72,
									right:'-100%',
									fontSise:18,
									fontWeight:400,
									fontStyle:'italic',
									opacity:0
								},
								animateIn:{
									opacity:1,
									right:(clientWidth * 0.2)
								},
								animateOut:{
									right:'-100%',
									opacity:0
								},
								delay:1300
							},
							infos:{
								texts:'4 - 计算机二级证书'
							}
						})
 				.addElement({
							type:'base',
							css:{
								basic:{
									width:clientWidth * 0.4,
									height:clientWidth * 0.08,
									lineHeight:'150%',
									position:'absolute',
									top:clientWidth* 0.80,
									right:'-100%',
									fontSise:18,
									fontWeight:400,
									fontStyle:'italic',
									opacity:0
								},
								animateIn:{
									opacity:1,
									right:(clientWidth * 0.2)
								},
								animateOut:{
									right:'-100%',
									opacity:0
								},
								delay:1500
							},
							infos:{
								texts:'5 - 普通话证书'
							}
						})
 				.addElement({
							type:'showBox',
							css:{
								basic:{
									width:clientWidth *0.8,
									height:200,
									position:'absolute',
									bottom:0,
									wordSpacing:'auto',
									right:'-100%',
									fontSise:18,
									fontWeight:400,
									fontStyle:'italic',
									opacity:0
								},
								animateIn:{
									opacity:1,
									right:(clientWidth * 0.1)
								},
								animateOut:{
									right:'-100%',
									opacity:0
								},
								delay:1500
							},
							infos:{
								texts:'',
								grandEle:{
									oNum: 4,
									oName:'<p>',
									css:[
										{
											marginRight:'50px',
											marginLeft:'15px',
											bottom:'-50%'

										},
										{
											marginRight:'50px',
											bottom:'-30%'

										},
										{
											marginRight:'50px',
											bottom:'-30%'

										},
										{





											marginRight:'',
											bottom:'-50%'
										}
									],
									text:['11年 高中就读','14年 进入哈尔滨理工大学','大二  进入渡一学习前端','现在  大三就读']
								}
							}
						})
 			.addPage('fifthPage')
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.2,
							backgroundImage:'url("./src/img/myExperience.png")',
							backgroundSize:'100% 100%',
							position:'absolute',
							top:clientWidth* 0.05,
							left:'-100%'
						},
						animateIn:{
							opacity:1,
							left:(clientWidth * 0.05)
						},
						animateOut:{
							left:'-100%',
							opacity:0
						}
					},
					infos:{
						texts:''
					}
				})
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.25,
							backgroundImage:'url("./src/img/liBG2.jpg")',
							backgroundSize:'100% 100%',
							position:'absolute',
							opacity:0,
							textIndent:'10px',
							borderRadius:30,
							lineHeight:'25px',
							textAlign:'center',
							boxShadow:'3px 3px 4px grey',
							color:'black',
							top:clientWidth* 1.3,
							left:(clientWidth * 0.05)
						},
						animateIn:{
							opacity:1,
							top:clientWidth*0.4
						},
						animateOut:{
							top:clientWidth* 1.3,
							opacity:0
						},
						delay:300
					},
					infos:{
						texts:'HTML CSS ：静态淘宝PC端页面（不涉及js等）、多级3D导航栏（H5和CSS3）、刮刮乐、Bootstrap页面(利用bootstrap完成)等'
					}
				})
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.25,
							backgroundImage:'url("./src/img/liBG1.jpg")',
							backgroundSize:'100% 100%',
							position:'absolute',
							opacity:0,
							textIndent:'16px',
							lineHeight:'30px',
							borderRadius:30,
							textAlign:'center',
							boxShadow:'3px 3px 4px grey',
							color:'black',
							top:clientWidth* 1.3,
							left:(clientWidth * 0.05)
						},
						animateIn:{
							opacity:1,
							top:clientWidth*0.7
						},
						animateOut:{
							top:clientWidth* 1.3,
							opacity:0
						},
						delay:600
					},
					infos:{
						texts:'Ajax jsonp Jqurey ：德邦物流、百度搜索框、Jqurey轮播图、豆瓣音乐、瀑布流（无限从网站上获取图片）等'
					}
				})
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.25,
							backgroundImage:'url("./src/img/liBG6.jpg")',
							backgroundSize:'100% 100%',
							position:'absolute',
							opacity:0,
							textIndent:'16px',
							lineHeight:'30px',
							borderRadius:30,
							textAlign:'center',
							boxShadow:'3px 3px 4px grey',
							color:'black',
							top:clientWidth* 1.6,
							left:(clientWidth * 0.05)
						},
						animateIn:{
							opacity:1,
							top:clientWidth
						},
						animateOut:{
							top:clientWidth* 1.6,
							opacity:0
						},
						delay:900
					},
					infos:{
						texts:'Js : 贪吃蛇游戏网页版、cookie小球拖拽并实现弹性碰撞、纯js轮播图、日历、扫雷、百叶窗、翻页主件等'
					}
				})
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.25,
							backgroundImage:'url("./src/img/liBG.jpg")',
							backgroundSize:'100% 100%',
							position:'absolute',
							opacity:0,
							textIndent:'16px',
							lineHeight:'30px',
							borderRadius:30,
							textAlign:'center',
							boxShadow:'3px 3px 4px grey',
							color:'black',
							top:clientWidth* 1.8,
							left:(clientWidth * 0.05)
						},
						animateIn:{
							opacity:1,
							top:clientWidth*1.3
						},
						animateOut:{
							top:clientWidth* 1.8,
							opacity:0
						},
						delay:1200
					},
					infos:{
						texts:'综合 ：webpack项目(渡一公司官网手机端)、svg和canvas画图、叮当猫（svg）、个人简历（手机版）、高斯模糊图片'
					}
				})
 			.addPage('sixthPage')
 				 .addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.2,
							backgroundImage:'url("./src/img/mySkills.png")',
							backgroundSize:'100% 100%',
							position:'absolute',
							top:clientWidth* 0.05,
							left:'-100%'
						},
						animateIn:{
							opacity:1,
							left:(clientWidth * 0.05)
						},
						animateOut:{
							left:'-100%',
							opacity:0
						}
					},
					infos:{
						texts:''
					}
				})
 				.addElement({
					type:'pie',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.8,
							position:'absolute',
							opacity:0,
							top:clientWidth* 0.6,
							left:'-100%'
						},
						animateIn:{
							opacity:1,
							left:(clientWidth * 0.1)
						},
						animateOut:{
							left:'-100%',
							opacity:0
						},
						delay:500
					},
					infos:{
						texts:'',
						arr:infoData
					}
				})
 			.addPage('seventhPage')
 				 .addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.2,
							backgroundImage:'url("./src/img/myEvaluate.png")',
							backgroundSize:'100% 100%',
							position:'absolute',
							top:clientWidth* 0.05,
							left:'-100%'
						},
						animateIn:{
							opacity:1,
							left:(clientWidth * 0.05)
						},
						animateOut:{
							left:'-100%',
							opacity:0
						}
					},
					infos:{
						texts:''
					}
				})
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.4,
							backgroundImage:'url("./src/img/dialog.png")',
							backgroundSize:'100% 100%',
							position:'absolute',
							textIndent:'20px',
							opacity:0,
							top:clientWidth* 1.5,
							left:clientWidth * 0.1
						},
						animateIn:{
							opacity:1,
							top:clientWidth * 0.3
						},
						animateOut:{
							top:clientWidth* 1.5,
							opacity:0
						},
						delay:500
					},
					infos:{
						texts:'自己是一个有执行力、学习能力、脾气好、喜欢与人打交道，喜欢向优秀的人学习，并且适应力很强，有梦想渴望变得更好的一枚善良男孩纸。当然自己也会有缺点，比较厌烦重复单一的工作，受不了其他人对某件事的再三询问或者咨询。不过这些缺点已经可以找到方法去解决咯。'
					}
				})
 				.addElement({
					type:'base',
					css:{
						basic:{
							width:clientWidth * 0.8,
							height:clientWidth * 0.4,
							backgroundImage:'url("./src/img/people.png")',
							backgroundSize:'100% 100%',
							position:'absolute',
							top:clientWidth* 1.5,
							opacity:0,
							left:(clientWidth * 0.1)
						},
						animateIn:{
							opacity:1,
							top:clientWidth * 0.8
						},
						animateOut:{
							top:clientWidth * 1.5,
							opacity:0
						},
						delay:1000
					},
					infos:{
						texts:''
					}
				})
 				.addElement({
					type:'base',
					tags:'backFirstPage',
					css:{
						basic:{
							width:clientWidth * 0.2,
							height:clientWidth * 0.2,
							backgroundImage:'url("./src/img/back.png")',
							backgroundSize:'50% 50%',
							backgroundPosition:'50%  0',
							backgroundRepeat:'no-repeat',
							position:'absolute',
							textAlign:'center',
							lineHeight:'110px',
							bottom:0,
							opacity:0,
							color:'grey',
							left:(clientWidth * 0.35)
						},
						animateIn:{
							opacity:1
						},
						animateOut:{
							opacity:0
						},
						delay:1000
					},
					infos:{
						texts:'BACK'
					}
				})
 		.load()
