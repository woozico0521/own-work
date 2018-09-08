(function(){/* header-top */
    var oLi=document.getElementById("top").getElementsByTagName("ul")[0].getElementsByTagName("li");
    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[index].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                }
                oLi[index].className="on";
            }
        })(i);
    }
    
})();

(function(){/* header-down */
    var oInput=document.getElementById("input");
    oInput.onclick=function(){
        oInput.value="";
    }
})();

(function(){/* nav */
var oNav=document.getElementById("nav");
var oImg=document.getElementById("img");
var pic=new Array('nav-01.jpg','nav-02.jpg','nav-03.jpg','nav-04.jpg');
var i=0;
function disp(){
    oImg.src="images/"+pic[i];
    i++;
    if(i==pic.length) i=0;
}
setInterval(disp,2000);
})();

(function(){/* footer */
    var oLi=document.getElementById("foot").getElementsByTagName("li");
    var oImg=document.getElementById("foot").getElementsByClassName("img");
    var pic=new Array('首页.png','热点.png','会员.png','我的.png','消息.png')
    var pic1=new Array('首页-1.png','热点-1.png','会员-1.png','我的-1.png','消息-1.png')
    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[index].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                    oImg[j].src="images/"+pic[j];
                }
                oLi[index].className="on";
                oImg[index].src="images/"+pic1[index];
            }
        })(i);
    }
})();