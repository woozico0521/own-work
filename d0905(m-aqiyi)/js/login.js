 let oInput = document.getElementById('input');
 let oInfo = document.getElementById('info');
 let oMain = document.getElementById('main');
 let oCir = document.getElementById('cir');
 let oUl = oMain.getElementsByTagName('ul');
 let oImg = oCir.getElementsByTagName('img');
 let goBack=document.getElementById('goBack');
 oInput.onblur=function(){
     if(isNaN(oInput.value)){
         oInput.value="请输入正确的号码!";
     }else if(oInput.value.length==11){
         oInfo.className="on";
     }else{
         oInput.value="请输入正确的号码!"
     }
 }
 for(var i=0;i<oImg.length;i++){
     (function(index){
         oImg[i].onclick=function(){
            for(var j=0;j<oUl.length;j++){
                oUl[j].className="";
                oImg[j].src="images/原点1.png"
            }
            oUl[index].className="on";
            oImg[index].src="images/原点.png";
        }
     })(i);
 }

goBack.onclick=function(){
    history.go(-1);
}