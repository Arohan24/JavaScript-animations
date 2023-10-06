const rect=document.querySelector("#center");
const throttleFunction=(func, delay)=>{
     
    // Previously called time of the function
    let prev = 0; 
    return (...args) => {
      // Current called time of the function
      let now = new Date().getTime(); 
   
      // Logging the difference between previously 
      // called and current called timings
      console.log(now-prev, delay); 
       
      // If difference is greater than delay call
      // the function again.
      if(now - prev> delay){ 
        prev = now;
   
        // "..." is the spread operator here 
        // returning the function with the 
        // array of arguments
        return func(...args);  
      }
    }
  }
rect.addEventListener("mousemove",throttleFunction((details)=>{
    console.log(details.clientX,details.clientY);
    var div=document.createElement("div");
    document.body.appendChild(div);
    div.classList.add("imagediv");
    div.style.left=details.clientX+"px";
    div.style.top=details.clientY+"px";
    var img=document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1696229951902-f9588427c811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
    div.appendChild(img);
    gsap.to(img,{
        y:"0",
        ease:Power1,
        duration:.6

    })
    gsap.to(img,{
        y:"100%",
        delay:.6,
        ease:Power2

    })
    setTimeout(()=>{
        div.remove();
    },2000);
},400))
