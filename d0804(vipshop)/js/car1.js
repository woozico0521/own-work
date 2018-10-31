/* 商品一 */
let oAdd=document.getElementById("plus");
let oMinus=document.getElementById("minus");
let oInput=document.getElementById("input");
let oSell=document.getElementById("rSell1");
let oSale=document.getElementById("mSale1");
let oAdd2=document.getElementById("plus2");
let oMinus2=document.getElementById("minus2");
let oInput2=document.getElementById("input2");
let oSell2=document.getElementById("rSell2");
let oSale2=document.getElementById("mSale2");
let oAdd3=document.getElementById("plus3");
let oMinus3=document.getElementById("minus3");
let oInput3=document.getElementById("input3");
let oSell3=document.getElementById("rSell3");
let oSale3=document.getElementById("mSale3");
let oSumSell=document.getElementById("sumSell");
let oSumSale=document.getElementById("sumSale");
let sale=document.getElementById("sale");
let oSumNum=document.getElementById("sumNum");
var num= (oSell.innerText).replace(/^\d./g,"");
oAdd.onclick=oMinus.onclick=function(){
    let i=1;
    if(this==oAdd){
        i++;
        oInput.value=i;
    }else if(this==oMinus){
        i--;
        if(i<1) i=1;
        oInput.value=i;
    }
    let m = parseInt(i)*'175.2';
    let n = parseInt(i)*'43.8';
    oSell.innerText='¥ '+m.toFixed(1);
    oSale.innerText='已优惠 ¥'+n.toFixed(1);
   // var num= (oSell.innerText).replace(/^\d./g,"");
    oSumNum.innerText = parseInt(oInput.value) + parseInt(oInput2.value) + parseInt(oInput3.value);
    
    oSumSell.innerText='¥' + num;
}
oInput.onchange=function(){
    oSumNum.innerText = parseInt(oInput.value) + parseInt(oInput2.value) + parseInt(oInput3.value);
}

/* 商品二购物车数量增减 */
oAdd2.onclick=oMinus2.onclick=function(){
    let i=1;
    if(this==oAdd2){
        i++;
        oInput2.value=i;
    }else if(this==oMinus2){
        i--;
        if(i<1) i=1;
        oInput2.value=i;
    }
    let m2 = parseInt(i)*'263.2';
    let n2 = parseInt(i)*'65.8';
    oSell2.innerText='¥ '+m2.toFixed(1);
    oSale2.innerText='已优惠 ¥'+n2.toFixed(1);
    oSumNum.innerText = parseInt(oInput.value) + parseInt(oInput2.value) + parseInt(oInput3.value);
}
oInput2.onchange=function(){
    oSumNum.innerText = parseInt(oInput.value) + parseInt(oInput2.value) + parseInt(oInput3.value);
}


/* 商品三购物车数量增减 */
oAdd3.onclick=oMinus3.onclick=function(){
    let i=1;
    if(this==oAdd3){
        i++;
        oInput3.value=i;
    }else if(this==oMinus3){
        i--;
        if(i<1) i=1;
        oInput3.value=i;
    }
    let m3 = parseInt(i)*'339';
    let n3 = parseInt(i)*'60';
    oSell3.innerText='¥ '+m3.toFixed(1);
    oSale3.innerText='已优惠 ¥'+n3.toFixed(1);
    oSumNum.innerText = parseInt(oInput.value) + parseInt(oInput2.value) + parseInt(oInput3.value);
}
oInput3.onchange=function(){
    oSumNum.innerText = parseInt(oInput.value) + parseInt(oInput2.value) + parseInt(oInput3.value);
}









