(function(){/* 导航 */
var oNav=document.getElementById("nav");

window.addEventListener("scroll",function(e){
    
    var t =document.documentElement.scrollTop||document.body.scrollTop; 
    //alert("滚动了");
    if(t>150){
        oNav.className="down on clearfix";
    }else{
        oNav.className="down clearfix"
    }
});
})();



(function(){/* 侧导航 */
    var oLeftSide=document.getElementById("left-side");
    var oLi=oLeftSide.getElementsByTagName("li");
    var oBg=oLeftSide.getElementsByClassName("side");
    var pic=['jx.png','vz.png','xb.png','nz.png','yd.png','sp.png','mz.png','my.png','jj.png','gj.png','sh.png','yg.png'];
    var pic1=['jx1.png','vz1.png','xb1.png','nz1.png','yd1.png','sp1.png','mz1.png','my1.png','jj1.png','gj1.png','sh1.png','yg1.png'];
    var pic2=['jx2.png','vz2.png','xb2.png','nz2.png','yd2.png','sp2.png','mz2.png','my2.png','jj2.png','gj2.png','sh2.png','yg2.png'];


    //点击
    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[i].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                }
                oLi[index].className="on";
                oBg[index].style.background="url(images/"+pic1[index]+")no-repeat 0 5px";
                oBg[index].style.backgroundSize="20px 20px";
            }
        })(i);
    }


    //背景图
    for(var i=0;i<oLi.length;i++){
        for(var n=0;n<oLi.length;n++){
            oBg[n].style.background="url(images/"+pic1[n]+")no-repeat 0 5px";
            oBg[n].style.backgroundSize="20px 20px";
        }
        oLi[i].index=i;
        oLi[i].onmouseover=function(){
            oBg[this.index].style.background="url(images/"+pic[this.index]+") no-repeat 0 5px";
            oBg[this.index].style.backgroundSize="20px 20px";
        }
        oLi[i].onmouseout=function(){
            for(var j=0;j<oLi.length;j++){
                oBg[j].style.background="url(images/"+pic1[j]+")no-repeat 0 5px";
                oBg[j].style.backgroundSize="20px 20px";
            }
        }
    }

    /* 滚动 */
    window.addEventListener("scroll",function(e){
    
        var t =document.documentElement.scrollTop||document.body.scrollTop; 
        //alert("滚动了");
        if(t>1100){
            oLeftSide.className="left-side dis";
        }else{
            oLeftSide.className="left-side"
        }
    });

})();


/* 轮播 */
var oRoll=document.getElementById("roll");
var oImg=oRoll.getElementsByTagName("img");
var oUl=document.getElementById("tag");
var oLi=oUl.getElementsByTagName("li");
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var now=0;
function play(){
    for(var i=0;i<oImg.length;i++){
        oImg[i].className="";
        oLi[i].className="";
    }
    oImg[now].className="on";
    oLi[now].className="on";
    now++;
    if(now==oImg.length) now=0;
}
function go(){
    setInterval(play,1000)
}
go();

oLeft.onclick=oRight.onclick=function(){
    if(this==oLeft){
        now--;
        if(now==-1) now=oLi.length-1;
    }else if(this==oRight){
        now++;
        if(now==oImg.length) now=0;
    }
    
}
