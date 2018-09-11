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

(function(){/* 轮播 */
    var oBg=document.getElementById("bg");
    var oImg=oBg.getElementsByTagName("img");
    var now=0;
    
    function play(){
        for(var i=0;i<oImg.length;i++){
            oImg[i].className="";
        }
        oImg[now].className="on";
        now++;
        if(now==oImg.length) now=0;
    }
    function go(){
        setInterval(play,1000)
    }
    go();
})();