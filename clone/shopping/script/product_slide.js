var productSlide=document.getElementsByClassName('product');
var productWrap=document.querySelector('.productwrap');
window.addEventListener('resize',function(){
   if(window.innerWidth<=1020){
    var wid=productWrap.clientWidth/3;
    for(var i=0; i<productSlide.length; i++){
        productSlide[i].style.width=wid;
    }   
   }else{
       var wid=productWrap.clientWidth/4;
    for(var i=0; i<productSlide.length; i++){
        productSlide[i].style.width=wid;
    }

   }
    
});