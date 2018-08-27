

var oLi = document.getElementById("one").getElementsByTagName("li");

var oImgs1=document.getElementById("imgs1");
var oImg1=oImgs1.getElementsByTagName("img");
var oImgs2=document.getElementById("imgs2");
var oImg2=oImgs2.getElementsByTagName("img");
var oImgs3=document.getElementById("imgs3");
var oImg3=oImgs3.getElementsByTagName("img");
var oImgs4=document.getElementById("imgs4");
var oImg4=oImgs4.getElementsByTagName("img");
var oImgs5=document.getElementById("imgs5");
var oImg5=oImgs5.getElementsByTagName("img");

var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var oDl=document.getElementsByTagName("dl")
var i=0;
var now=0;
timer=null;
ltimer=null;

function roll(){
    
    for(var i=0;i<oImg1.length;i++){
        oImg1[i].className="";
    }
    oImg1[now].className="pic";
    now++;
    if(now==oImg1.length){
        now=0;
    }
    

    for(var i=0;i<oImg2.length;i++){
        oImg2[i].className="";
    }
    oImg2[now].className="pic";
    now++;
    if(now==oImg2.length){
        now=0;
    }

    for(var i=0;i<oImg3.length;i++){
        oImg3[i].className="";
    }
    oImg3[now].className="pic";
    now++;
    if(now==oImg3.length){
        now=0;
    }

    for(var i=0;i<oImg4.length;i++){
        oImg4[i].className="";
    }
    oImg4[now].className="pic";
    now++;
    if(now==oImg4.length){
        now=0;
    }

    /* for(var i=0;i<oImg5.length;i++){
        oImg5[i].className="";
    }
    oImg5[now].className="pic";
    now++;
    if(now==oImg5.length){
        now=0;
    }  */
   
}
function go(){
    timer=setInterval(roll,1000);
}
go();

    
 

/* function roll(){
    for(var i=0;i<oImg.length;i++){
        oImg[i].className="";
    }
    oImg[now].className="pic";
    now++;
    if(now==oImg.length){
        now=0;
    }
} */


oLeft.onclick=oRight.onclick=function(){
    if(this==oLeft){
        now--;
        if(now==-1) now=oImg1.length-1;
        /* if(now==-1) now=oImg2.length-1;
        if(now==-1) now=oImg3.length-1;
        if(now==-1) now=oImg4.length-1;
        if(now==-1) now=oImg5.length-1; */
    }else{
        now++;
        if(now==oImg1.length) now=0;
    }
    for(var i=0;i<oImg1.length;i++){
        oImg1[i].className="";
    }
    oImg1[now].className="pic";

    for(var i=0;i<oImg2.length;i++){
        oImg2[i].className="";
    }
    oImg2[now].className="pic";

    for(var i=0;i<oImg3.length;i++){
        oImg3[i].className="";
    }
    oImg3[now].className="pic";

    for(var i=0;i<oImg4.length;i++){
        oImg4[i].className="";
    }
    oImg4[now].className="pic";

    for(var i=0;i<oImg5.length;i++){
        oImg5[i].className="";
    }
    oImg5[now].className="pic";
} 


for(var i=0; i<oLi.length; i++){
   (function(index){
        oLi[index].onmouseover = function(){
            for(var j=0; j<oLi.length; j++){
                oLi[j].className = "";
                oDl[j].className = "";
              
            }
            oLi[index].className = "on";
            oDl[index].className = "no";
           
        }
   })(i);
     
}
