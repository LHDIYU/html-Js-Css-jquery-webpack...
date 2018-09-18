Element.prototype.inserAfter=function (newElement,targetElement) {
   		// var parent = targetElement.parentNode;
   		// if(parent.lastChild == targetElement) {
   		// 	parent.appendChild(newElement);
   		// }
   		// else {
   		// 	parent.insertBefore(newElement,targetElement.nextSibling);
   		// }
var siblingNode = targetElement.nextSibling;
if(siblingNode) {
		this.insertBefore(newElement,targetElement.nextSibling);
}
else{
	this.appendChild(newElement);
   	}
}
   Element.prototype.reverse=function () {
         var Child = this.children;
         var len = Child.length;
         for(var i = len-2;i >=0;i--){
            this.appendChild(Child[i]);
         }


      }
      Element.prototype.myremoveChild=function () {
         var parent = this.parentNode;
if(parent){
         parent.removeChild(this);
      }
      else{return "erro";}
      }


      function getStyle(obj,attr){
      if(obj.currentStyle){
         return obj.currentStyle[arrt];
      }else{
         return window.getComputedStyle(obj,false)[attr];
      }
   }
   function startMove(oDiv,json){
      clearInterval(oDiv.timer);
      var iSpeed;
      var iCur;
      oDiv.timer = setInterval(function(){
         var bStop = true;
         for(var attr in json){
            if(attr === 'opacity'){
               iCur = parseFloat(getStyle(oDiv,attr)) * 100;
            }else{
               iCur = parseInt(getStyle(oDiv,attr));
            }
            iSpeed = (json[attr] - iCur) / 7;
            if(iSpeed > 0){
               iSpeed = Math.ceil(iSpeed);
            }else{
               iSpeed = Math.floor(iSpeed);
            }
            if(attr === 'opacity'){
               oDiv.style.opacity = (iCur + iSpeed) / 100;
            }else{
               oDiv.style[attr] = iCur + iSpeed + 'px';
            }
            if(iCur !== json[attr]){
               bStop = false;
            }
         }
      },30)
   }