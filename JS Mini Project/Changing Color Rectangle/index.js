
var rect =document.querySelector("#centre");
rect.addEventListener('mousemove',(details)=>{
  var rectPosition=rect.getBoundingClientRect();
  var mousepos=details.clientX-rectPosition.left;
  var rectCentre=rectPosition.width/2;
  var redopacity=gsap.utils.mapRange(0,rectCentre,1,0,mousepos);
  var blueopacity=gsap.utils.mapRange(rectCentre,rectPosition.width,0,1,mousepos);
  if(mousepos<rectCentre){
    
    gsap.to(rect,{backgroundColor:`rgba(255,0,0,${redopacity})`,ease:'power4'})
  }else{
    
    gsap.to(rect,{backgroundColor:`rgb(0,0,255,${blueopacity})`,ease:'power4'})
  }

})
rect.addEventListener('mouseleave',()=>{
    gsap.to(rect,{backgroundColor:'white',ease:'power4'});
})