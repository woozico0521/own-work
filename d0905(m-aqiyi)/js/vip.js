(function(){/* header */
    let oDd=document.getElementById('top').getElementsByTagName('dd');
    let oLi=document.getElementById('down').getElementsByTagName('li');
    
    for(var i=0;i<oDd.length;i++){
        (function(index){
            oDd[i].onclick=function(){
                for(let j=0;j<oDd.length;j++){
                    oDd[j].className="";
                }
                oDd[index].className="top-on";
            }
        })(i);
    }

    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[i].onclick=function(){
                for(let j=0;j<oLi.length;j++){
                    oLi[j].className="";
                }
                oLi[index].className="down-on";
            }
        })(i);
    }
})();

/* banner */
(function(){
    let oImg = document.getElementById('img');
    let oImgs = ['images/vip-banner2.jpg','images/vip-banner3.jpg','images/vip-banner4.jpg','images/vip-banner5.jpg',];
    let i = 0;
    function show(){
        oImg.src = oImgs[i];
        i++;
        if(i==oImgs.length) i=0;
    }
    setInterval(show,1000);
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

/* 热门影视 */
(function(){
    var oUl = document.getElementById("movier");
    var oLi = oUl.getElementsByTagName('li');
    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[i].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                }
                oLi[index].className="man-click";
            }
        })(i);
    }
})();