var oAdd=document.getElementsByClassName("main-sp-plus");
var oMinus=document.getElementsByClassName("main-sp-minus");
var oInput=document.getElementsByTagName("input");
var i=1;

/* 购物车数量增减 */
for(var j=0;j<oAdd.length;j++){
(function(index){

    oAdd[j].onclick=oMinus[j].onclick=function(){
        if(this==oAdd[j]){
            i++;
            oInput[index].value=i;
        }else if(this==oMinus[j]){
            i--;
            if(i<1) i=1;
            oInput[index].value=i;
        }
    }

})(j);
}

