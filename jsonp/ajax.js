function doDate(ajaxDate) {
    //alert(xhr.responseText);
    // var date = JSON.parse(ajaxDate);
    console.log(ajaxDate);
    // var oUl = document.getElementById('ul1');
    // var html = '';
    // for(var i = 0;i < date.length;i++){
    // 	html +='<li><a href = "">'+date[i].title+'</a>[<span>'+date[i].date+'</span>]</li>';
    // }
    // oUL.innerHTML = html;
    // date.forEach(function(item){
    //      console.log(item);
    //      var oLi = document.createElement('li');
    //      var oA1 = document.createElement('a');
    //      var oA2 = document.createElement('a');

    //      oA1.innerText = item.date;
    //      oA2.innerText = item.title;
    //      oLi.appendChild(oA1);
    //      oLi.appendChild(oA1);
    //      oUl.appendChild(oLi);
    // });

}


function Ajax(method, url, flag, upDate, callBack) {

    var xhr = null;
    if (window.XMLHttpRequest) {
        //非ie
        xhr = new XMLHttpRequest();
    } else {
        //ie
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    method = method.toUpperCase();

    if (method === "GET") {
        console.log('....');
        xhr.open(method, url + '?' + upDate, flag);
        // './post.php?'
        xhr.send();
    } else if (method === "POST") {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(upDate);
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status === 200) {
                callBack(xhr.responseText);
            } else {
                alert('error')
            }
        }
    }



}

// var date = 'username='+'姬发'+'&age=18';
// &date'+new Date().getDate();encodeURI(
// Ajax('post','./getNews.php' ,true,date,doDate);

// './number.txt'
// var oIp = document.getElementById('ip');
// var lastScript =  null;
// var oUl = document.getElementsById('ul');

// function duyi(date) {
// 	console.log(date);
// 	var dateArray = date.s;
// 	var html = '';
// 	if(dateArray.length != 0){
// 		dateArray.forEach(function(item){
// 			html +='<li> <a href = "https://www.baidu.com/s?wd='+item+'">'+item+'</a></li>';
// 		});
// 		oUl.innerHTML = html;
// 		oUl.style.display = "block";
// 	}
// 	else{
// 		oUl.style.display = "none";
// 	}
// }

// oIp.onkeyup = function() {
// 	if(this.value) {
// 		console.log('-');
// 		lastScript != null? document.body.removeChild(lastScript):'';

// 		var oScript = document.createElement('script');
// 		oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.value+'&cb=duyi';
// 		document.body.appendChild(oScript);
// 	}else {
// 		oUl.style.display = 'none';
// 	}

// }