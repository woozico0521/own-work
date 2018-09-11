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