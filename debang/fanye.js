var cityJsonZm= {"a":{"鞍山":523,"安顺":7458,"巴中":9808,"白城":5918,"白山":10177,
"百色":10506,"保定":424,"宝鸡":2044,"北京":1,"本溪":5845,"毕节":10553,"滨州":944,
"沧州":652,"常州":463,"长春":319,"长葛":9329,"潮州":10456,"成都":102},
"d":{"大连":147,"丹东":3445,"德阳":2373,"德州":728,"东营":623,"鄂州":9702,"恩施":2302,
"防城港":10530,"抚顺":5722,"抚州":10138,"阜阳":2325,"赣州":2363,"广州":3,"桂林":1039,"贵港":6770,"贵阳":2015},
"h":{"哈尔滨":202,"海口":2053,"邯郸":572,"汉中":3163,"杭州":79,"河池":2340,"贺州":10541,
"衡水":993,"衡阳":914,"葫芦岛":10083,"湖州":831,"怀化":5756,"黄冈":2299,"黄石":1734,
"吉安":2364,"吉林":700,"济南":265,"济宁":450,"嘉善":14320,"嘉兴":497,"江门":629,
"揭阳":927,"金华":531,"晋江":297,"晋中":8832,"荆门":2296,"荆州":3479,"景德镇":2360,"靖江":698},
"k":{"开封":2342,"昆明":541,"来宾":10549,"兰州":952,"丽水":7923,"聊城":882,"柳州":7133,"六盘水":10500,
"娄底":9455,"眉山":9704,"南安":293,"南昌":669,"南充":2378,"南京":172,"南宁":845,"南平":10285,
"宁波":135,"泸州":2372,"漯河":2347},"p":{"内江":5928,"萍乡":2248,"平顶山":1005,"莆田":2429,
"齐齐哈尔":5853,"黔东南":9348,"黔南":10441,"黔西南":10430,"潜江":9655,"钦州":2335,"青岛":122,
"清徐":10884,"清远":7303,"泉州":291,"日照":3177,"三亚":2422,"汕头":783,"上饶":10116,"韶关":2192,
"邵阳":2303,"沈阳":188,"十堰":2032,"石家庄":241,"石狮":296,"寿光":369,"四平":10167,"松原":2315,
"苏州":5,"宿迁":2350,"泰安":686,"太原":740,"唐山":276,"天津":18,"天门":9475,"通化":10157,"通辽":10012,
"桐乡":502,"铜仁":10419,"衢州":6793},"w":{"沛县":11325,"万宁":10011,"潍坊":362,"温州":330,"无锡":93,"梧州":2046,
"武汉":158,"西安":483,"西宁":2052,"厦门":606,"仙桃":9723,"咸宁":9616,"咸阳":7453,"湘潭":2047,"孝感":3434,
"新余":10111,"邢台":751,"许昌":977,"烟台":228,"盐城":613,"延安":8951,"延边":3184,"宜宾":2380,"宜昌":858,
"宜春":5709,"义乌":12221,"鹰潭":3209,"营口":5898,"永州":2307,"榆林":5942,"玉林":2337,"云浮":10480,
"郑州":342,"周口":933,"淄博":385,"自贡":6745,"遵义":7624,"鄢陵":9101}}
$(function() {
	$(".invitePosition").mouseenter(function() {
		$(".city_catalog").removeClass("dis_non")
	}).mouseleave(function() {});
	$(".city_catalog").mouseenter(function() {}).mouseleave(function() {
		$(".city_catalog").addClass("dis_non")
	});
	$(function() {
		$(".city_detail").delegate("li", "click", function(event) {
			$("#nowPos").text($(this).text());
			$(".city_catalog").addClass("dis_non");
			$("#ulInfoGroup").attr("value", $(this).attr("id"))
		});
		$(".navigation").delegate("li", "click", function() {
			$(this).addClass("bg-head").siblings().removeClass("bg-head")
		})
	});
	var catalog_arr = [];

	function joint_dom(catalogname, objectname) {
		if (!catalogname || !objectname) {
			return false
		}
		var obj = objectname[catalogname];
		var dom = "";
		for (var i in obj) {
			dom += '<li id="' + obj[i] + '">' + i + "</li>"
		}
		return dom
	}
	catalog_arr[0] = '<li id="241">石家庄</li><li id="1">北京</li><li id="2">上海</li><li id="18">天津</li><li id="37">重庆</li><li id="3">广州</li><li id="4">深圳</li><li id="413">东莞</li><li id="79">杭州</li><li id="102">成都</li><li id="188">沈阳</li><li id="147">大连</li><li id="172">南京</li><li id="5">苏州</li><li id="202">哈尔滨</li><li id="342">郑州</li><li id="265">济南</li><li id="122">青岛</li><li id="837">合肥</li><li id="483">西安</li><li id="158">武汉</li><li id="414">长沙</li><li id="0">不限</li>';
	catalog_arr[1] = joint_dom("a", cityJsonZm);
	catalog_arr[2] = joint_dom("d", cityJsonZm);
	catalog_arr[3] = joint_dom("h", cityJsonZm);
	catalog_arr[4] = joint_dom("k", cityJsonZm);
	catalog_arr[5] = joint_dom("p", cityJsonZm);
	catalog_arr[6] = joint_dom("w", cityJsonZm);
	$(".city_title li").hover(function(event) {
		var index = $(this).index();
		$(".city_detail").html(catalog_arr[index]);
		$(".city_detail li").click(function(enent) {
			$("#nowPos").text($(this).text());
			$(".city_catalog").addClass("dis_non");
			$("#ulInfoGroup").attr("value", $(this).attr("id"))
		});
		$(this).addClass("catalog_active").siblings("li").removeClass("catalog_active")
	}, function() {})
});

//<!-- 翻页 -->
var setPager=function(maxpage,currentpage){
// 	var uri = "/debang/jobs2?jobcate=2407&pageindex=";
	var jobcateid="2407";
	var joblocalid="202";
	var jobkeyword="";
	var parm="?";
	if(jobcateid){
		parm +="&jobcate="+jobcateid;
	}
	if(joblocalid){
		parm +="&localid="+joblocalid;
		//职位链接保留地区信息
		$('#jobcate li a').each(function(i){
			var old_url = $(this).attr('href');
			$(this).attr('href',old_url+"&localid="+joblocalid);
		})
	}
// 	if(jobdate){
// 		parm +="&jobdate="+jobdate;
// 	}
	if(jobkeyword&&"请输入职位关键字"!=jobkeyword){
		parm +="&jobkeyword="+jobkeyword;
	}
	if(parm!="?") parm=parm+"&";
	var uri = "/debang/jobs2"+parm+"pageindex=";
	if(maxpage<2){
		$(".page").remove();
		return;
	}
	var pagerHtml="";
	var startindex;
	if(currentpage<3||maxpage<=5){
		startindex=1
	}else{
		if(currentpage+2>maxpage){
			startindex=maxpage-3;
		}else{
			startindex=currentpage-2;
		}
	}
	
	if(currentpage>1){
		pagerHtml +="<a href=\""+uri+(currentpage-1)+"\" class=\"prv\"><span>上一页</span></a>";
	}
	for(var i=0;i<5&&(startindex+i)<=maxpage;i++){
		if(startindex+i != currentpage){
			pagerHtml += "<a href=\""+uri+(startindex+i)+"\"><span>"+(startindex+i)+"</span></a>"
		}else{
			pagerHtml += "<strong><span>"+(startindex+i)+"</span></strong>"
		}
	}
	if(currentpage<maxpage){
		pagerHtml +="<a href=\""+uri+(currentpage+1)+"\" class=\"next\"><span>下一页</span></a>";
	}
	document.getElementById("page").innerHTML=pagerHtml;
}
var mp=6;
var cp=1;
$(document).ready(function() {
	setPager(mp,cp);
});
//<!-- 切换城市 -->
// function changeCity(cityid){
// 	var url ="http://qy.58.com/debang/jobs2?jobcate=2407&localid="+cityid;
// 	window.location.href = url + "&r="+Math.random();
// }

var jobcateinit="2407";
var joblocalidinit="202";
var jobkeywordinit="";

$("#search").bind("click",function(){
	var jobcate="2407";
	var localid=$("#ulInfoGroup").attr("value");
	var jobkeyword=$("#keywordtop").val();
	var parm="";
	if(jobcate){
		parm +="&jobcate="+jobcate;
	}
// 	alert(jobcate);
	if(localid && "0"!=localid){
		parm +="&localid="+localid;
	}
// 	alert(localid);
	if(jobkeyword&&"请输入职位关键字"!=jobkeyword){
		parm +="&jobkeyword="+jobkeyword;
	}
// 	alert(jobkeyword);
	if(parm)parm="?"+parm;
	window.location.href ="http://qy.58.com/debang/jobs2"+parm;
});