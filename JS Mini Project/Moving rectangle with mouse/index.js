var rect=document.querySelector("#rect");
var rectCentre=rect.getBoundingClientRect().width/2;
window.addEventListener("mousemove",function(details){
    var xval=gsap.utils.mapRange(0,
        window.innerWidth,
        100+rectCentre,
        window.innerWidth-(100+rectCentre),
        details.clientX);
    gsap.to("#rect",{
        left:xval,
        ease:Power4
    });
});