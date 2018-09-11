(function(){//商品图

    var oBig=document.getElementById("big");
    var oSmall=document.getElementById("small");
    var oImg=oSmall.getElementsByTagName("img");
    var oFd=document.getElementById("fd");
    var oDa=document.getElementById("da");
    var oMask=document.getElementById("mask");
    var oDrag=document.getElementById("drag");
   // var oAft=document.getElementById("aft");
    /* 点击大图 */
    for(var i=0;i<oImg.length;i++){
        (function(index){
            oImg[i].onclick=function(){
                oBig.src=oImg[index].src;
            }
        })(i);
    }
    
    /* 放大 */
    oMask.onmousemove=function(ev){
        var e=ev||event;
        var left = e.clientX - oDrag.offsetWidth; 
        var top = e.clientY - oDrag.offsetHeight/2;  

        //oDrag只能在OMask的范围内移动
        if(left<0) left=0;
        if(top<0) top=0;
        var maxX = oMask.offsetWidth - oDrag.offsetWidth;
        var maxY = oMask.offsetHeight - oDrag.offsetHeight;
        if(left>maxX) left = maxX;
        if(top>maxY) top = maxY;

        oDrag.style.left = left+"px";
        oDrag.style.top = top+"px";

        //console.log("drag: "+left, top);
        //console.log("max: "+maxX, maxY);
        //(二).放大镜效果
        //大图和小图 实现等比例
        var scaleX = left/maxX;
        var scaleY = top/maxY;
        // console.log("scale: "+scaleX, scaleY);
        oDa.style.left = -(oDa.offsetWidth - oMask.offsetWidth)*scaleX+"px";
        oDa.style.top = -(oDa.offsetHeight - oMask.offsetHeight)*scaleY+"px";

    }
    /*注意:放大镜实现条件
    1, 大图和小图的比例是: 2:1;
    2, 小图与oDrag的比例是: 2:1;
    */
    oMask.onmouseover = function(){
        oDa.style.display = "block";
        oDrag.style.display = "block";
    }
    oMask.onmouseout = function(){
        //oAft.style.display = "none";
        oDrag.style.display = "none";
        oDa.style.display="none";
    }
})();


(function(){//添加.减少数量
var oAdd=document.getElementById("add");
var oMinus=document.getElementById("minus")
var oInput=document.getElementById("input");
var i=1;
oAdd.onclick=oMinus.onclick=function(){
    if(this==oAdd){
        i++;
        oInput.value=i;
    }else if(this==oMinus){
        i--;
        if(i<1) i=1;
        oInput.value=i;
    }
}
})();

(function(){//详情
    var oNav=document.getElementById("nav");
    var oCar=document.getElementById("car");
    var oPrice=document.getElementById("price");
    
    window.addEventListener("scroll",function(e){
        
        var t =document.documentElement.scrollTop||document.body.scrollTop; 
        //alert("滚动了");
        if(t>870){
            oNav.className="main-title on clearfix";
            
        }else{
            oNav.className="main-title clearfix";
           
        }
    });
})();

