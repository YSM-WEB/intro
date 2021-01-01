var slideli = document.getElementsByClassName("slide");
var slideul = document.querySelector('.slideul');
var limax = slideli.length;
var curIndex = 0;
var leftminus = -window.innerWidth;
var cnt = document.getElementsByClassName('cntactive');

function slide() {
    for(var i=0; i<slideli.length; i++){
        slideli[i].style.width=window.innerWidth;
    }
    leftminus=-window.innerWidth;
    slideul.style.transition = '0s';
    slideul.style.transform = "translate3d("+leftminus*(curIndex)+"px, 0px, 0px)";
    }

window.onload=function(){
    slide();
    setInterval(move,10000);
    for(var i=0; i<cnt.length; i++){
        cnt[i].addEventListener('click',activeCnt);
    }
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
};

window.addEventListener('resize',function(){
 slide();   
});
        
function move(){      
    slideul.style.transition = '0.2s';
    slideul.style.transform = "translate3d("+leftminus*(curIndex+1)+"px, 0px, 0px)";
    if(curIndex==3){
        cnt[curIndex].style.backgroundColor="white";
        cnt[0].style.backgroundColor="black";    
    }else{
    cnt[curIndex].style.backgroundColor="white";
    cnt[curIndex+1].style.backgroundColor="black";
    }
    curIndex++;
 
    if(curIndex === 4){
        setTimeout(function(){
            slideul.style.transition = '0s';
            slideul.style.transform = "translate3d(0px, 0px, 0px)";
            
        },201);
        curIndex = 0;
        }
    }

function activeCnt(e){
    e.preventDefault();
    curIndex=e.target.innerHTML-1;
    
    for(var i=0; i<cnt.length; i++){
        if(cnt[i]==e.target){
            e.target.style.backgroundColor="black";        
        }else cnt[i].style.backgroundColor="white";
    }
    slideul.style.transition = '0.2s';
    slideul.style.transform = "translate3d("+leftminus*(curIndex)+"px, 0px, 0px)";
}
