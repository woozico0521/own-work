var oIndex=document.getElementById("index");
var oBtn=document.getElementById("btn");
var arr=['30元免费流量包','20猫币','20元免费流量包','10元免费流量包','5猫币','谢谢参与','10猫币','一等奖','2猫币','100元免费流量包']
var t=0;
var s=0;

oBtn.onclick=function(){
    t=Math.floor(Math.random()*10);
    s=t*36+720;
    oIndex.style.transform="rotate("+s+"deg)";
    oIndex.style.transition="5s";
    setTimeout(function(){
        alert("恭喜获得"+arr[t]);
        location.reload();
    },5500)
}