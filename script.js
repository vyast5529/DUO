
    gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
   smoothMobile: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
 });
 


let images = gsap.utils.toArray('.z-out')

images.forEach((item, index) => {

  let exptl = gsap.timeline({
    scrollTrigger:{
      trigger: item,
      start: "top 85%",
      end: "top 5%",
      scrub: 2,
      markers: true,
      scroller: '#main'
    }
  });
  exptl.from(item, {
    x: 100,
    opacity: 0,
    duration: 1
  });
  
});



 
 
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


let t = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",trigger:"#page1 h1",start:"top 30%",end:"top 10%",scrub:2
  }
});

t.to("#page1 h1",{
  x:-80,
},"ani")
t.to("#page1 h2",{
  x:80,
},"ani")
t.to("#page1 video",{
width:"90%"

},"ani")
 let t2 = gsap.timeline({scrollTrigger:{
  scroller:"#main",trigger:"#page2",start:"top 20%",end:"top 7%",scrub:1
}

 })
t2.to("#page2",{

  backgroundColor:"white",
},"allu")
t2.to("#page2 h1",{
  color:"black",
},"allu")
t2.to("#page2 #dd #left h3",{
  color:"black",
},"allu")
t2.to("#page2 #dd #right p",{
  color:"black",
},"allu");
let cer = document.querySelector("#cursor");
let main = document.querySelector("#main")
main.addEventListener("mousemove",function(details){
  cer.style.left=details.x+20+"px";
  cer.style.top=details.y+20+"px";
  

})

let v = document.querySelector("#page1 video");
v.addEventListener("mouseenter",function(){
  cer.style.width="10vw";
  cer.style.height="3vw";
  cer.style.borderRadius="10px";
  cer.innerHTML="sound on";
  cer.style.display="flex";
  cer.style.alignItems="center";
 cer.style.justifyContent="center";
 cer.style.fontFamily="f1";
 cer.style.fontSize="2vw";
 cer.style.textTransform="capitalize"


})
v.addEventListener("mouseleave",function(){
  cer.style.width="2vw";
  cer.style.height="2vw";
  cer.style.borderRadius="50%";
  cer.innerHTML= " ";
  cer.style.display="flex";
  cer.style.alignItems="center";
 cer.style.justifyContent="center";
 cer.style.fontFamily="f1";
 cer.style.fontSize="2vw";
 cer.style.textTransform="capitalize"


})
let t3 = gsap.timeline({scrollTrigger:{
  scroller:"#main",trigger:"#page4",start:"top 20%",end:"top 10%",scrub:1
}
})


t3.to("#page4",{
  backgroundColor:"black"
},"pop")
t3.to("#page4 h2",{
  color:"white"
},"pop")
t3.to(" #page4 #part2",{
  borderBottom:"1px solid white",
},"pop");
let td1= document.querySelector(".elm1 .text-div1");

let td2= document.querySelector(".elm2 .text-div2");
let td3= document.querySelector(".elm3 .text-div3");



let h1 = document.querySelector(".text-div1 #h1");
let h2 = document.querySelector(".text-div1 #h2");
let h3 = document.querySelector(".text-div2 #h3");
let h4 = document.querySelector(".text-div2 #h4");
let h5 = document.querySelector(".text-div3 #h5");
let h6 = document.querySelector(".text-div3 #h6");
let im1 = document.querySelector("#im1");
let im2 = document.querySelector("#im2");
let im3 = document.querySelector("#im3");
let im4 = document.querySelector("#im4");
let im5 = document.querySelector("#im5");
let im6 = document.querySelector("#im6");

td1.addEventListener("mouseenter",function(){
  h1.style.top="-100%";
  h2.style.top="0";
  h1.style.transitionDuration="1s";
  
  h2.style.transitionDuration="1s";
  im1.style.opacity="1"
  im1.style.scale="1";
  im1.style.transitionDuration="1s";
  im2.style.opacity="1"
  im2.style.scale="1";
  im2.style.transitionDuration="1s";

})

td1.addEventListener("mouseleave",function(){
  h1.style.top="0";
  h2.style.top="100%";
  h1.style.transitionDuration="1s";
  
  h2.style.transitionDuration="1s";
  im1.style.opacity="0"
  im1.style.scale="0";
  im1.style.transitionDuration="1s";
  im2.style.opacity="0"
  im2.style.scale="0";
  im2.style.transitionDuration="1s";
 
})

td2.addEventListener("mouseenter",function(){
  h3.style.top="-100%";
  h4.style.top="0";
  h3.style.transitionDuration="1s";
  
  h4.style.transitionDuration="1s";
  im3.style.opacity="1"
  im4.style.scale="1";
  im3.style.transitionDuration="1s";
  im4.style.opacity="1"
  im3.style.scale="1";
  im4.style.transitionDuration="1s";

})

td2.addEventListener("mouseleave",function(){
  h3.style.top="0";
  h4.style.top="100%";
  h3.style.transitionDuration="1s";
  
  h4.style.transitionDuration="1s";
  im3.style.opacity="0"
  im3.style.scale="0";
  im4.style.transitionDuration="1s";
  im4.style.opacity="0"
  im4.style.scale="0";
  im4.style.transitionDuration="1s";
 
})

td3.addEventListener("mouseenter",function(){
  h5.style.top="-100%";
  h6.style.top="0";
  h5.style.transitionDuration="1s";
  
  h6.style.transitionDuration="1s";
  im5.style.opacity="1"
  im6.style.scale="1";
  im5.style.transitionDuration="1s";
  im6.style.opacity="1"
  im5.style.scale="1";
  im6.style.transitionDuration="1s";

})

td3.addEventListener("mouseleave",function(){
  h5.style.top="0";
  h6.style.top="100%";
  h5.style.transitionDuration="1s";
  
  h6.style.transitionDuration="1s";
  im5.style.opacity="0"
  im5.style.scale="0";
  im5.style.transitionDuration="1s";
  im6.style.opacity="0"
  im6.style.scale="0";
  im6.style.transitionDuration="1s";
 
})
let bar1 = document.querySelector(".bar1");
let pr1 = document.querySelector(".bar1 p");
let hr1 = document.querySelector(".bar1 h3");
let hr2 = document.querySelector(".bar1 h4");
bar1.addEventListener("mouseenter",function(){
  cer.style.height="20vw";
  cer.style.width="20vw";
  cer.style.borderRadius="20px";
  cer.style.backgroundImage="url(https://images.unsplash.com/photo-1688232543149-5602b136ba11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)";


})
bar1.addEventListener("mouseleave",function(){
  cer.style.height="2vw";
  cer.style.width="2vw";
  cer.style.borderRadius="50%";
  cer.style.backgroundImage="none";



})
let bar2 = document.querySelector(".bar2");
let pr2 = document.querySelector(".bar2 p");
let hr21 = document.querySelector(".bar2 h3");
let hr22= document.querySelector(".bar2 h4");
bar2.addEventListener("mouseenter",function(){
  cer.style.height="20vw";
  cer.style.width="20vw";
  cer.style.borderRadius="10px";
  cer.style.backgroundImage="url(https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";


})
bar2.addEventListener("mouseleave",function(){
  cer.style.height="2vw";
  cer.style.width="2vw";
  cer.style.borderRadius="50%";
  cer.style.backgroundImage="none";



})


let bar3 = document.querySelector(".bar3");
let pr3 = document.querySelector(".bar3 p");
let hr31 = document.querySelector(".bar3 h3");
let hr32= document.querySelector(".bar3 h4");
bar3.addEventListener("mouseenter",function(){
  cer.style.height="20vw";
  cer.style.width="20vw";
  cer.style.borderRadius="10px";
  cer.style.backgroundImage="url(https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)";


})
bar3.addEventListener("mouseleave",function(){
  cer.style.height="2vw";
  cer.style.width="2vw";
  cer.style.borderRadius="50%";
  cer.style.backgroundImage="none";



})
let bar4 = document.querySelector(".bar4");
let pr4 = document.querySelector(".bar4 p");
let hr41 = document.querySelector(".bar4 h3");
let hr42= document.querySelector(".bar4 h4");
bar4.addEventListener("mouseenter",function(){
  cer.style.height="20vw";
  cer.style.width="20vw";
  cer.style.borderRadius="10px";
  cer.style.backgroundImage="url(https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80)";


})
bar4.addEventListener("mouseleave",function(){
  cer.style.height="2vw";
  cer.style.width="2vw";
  cer.style.borderRadius="50%";
  cer.style.backgroundImage="none";



})
let bar5 = document.querySelector(".bar5");
let pr5 = document.querySelector(".bar5 p");
let hr51 = document.querySelector(".bar5 h3");
let hr52= document.querySelector(".bar5 h4");
bar5.addEventListener("mouseenter",function(){
  cer.style.height="20vw";
  cer.style.width="20vw";
  cer.style.borderRadius="10px";
  cer.style.backgroundImage="url(https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60)";


})
bar5.addEventListener("mouseleave",function(){
  cer.style.height="2vw";
  cer.style.width="2vw";
  cer.style.borderRadius="50%";
  cer.style.backgroundImage="none";
  



})
document.querySelector("#page6").addEventListener("mouseenter",function(){
  cer.style.backgroundColor="white";


})
document.querySelector("#page6").addEventListener("mouseleave",function(){
  cer.style.backgroundColor="#EDBFFF";
  

})

let s = document.querySelector("#S");


let hm = document.querySelector("#hm");
let ppt = document.querySelector("#ppt");
let wr = document.querySelector("#wr");
let sd = document.querySelector("#sd");
let cnt = document.querySelector("#cnt");
let hp5 = document.querySelectorAll("#cont h5");

wr.addEventListener("mouseenter",function(){


  ppt.style.visibility="visible";

 
  hp5.forEach(function(i)
  {
    i.innerHTML="work";
    i.style.textTransform="capitalize"
  })
 

  gsap.to("#S #cont",{
    x:"-200%",duration:60,repeat:-1
  
  })


})
wr.addEventListener("mouseleave",function(){

  ppt.style.visibility="hidden";

  

  

})
hm.addEventListener("mouseenter",function(){
 
  hp5.forEach(function(i)
  {
    i.innerHTML="home";
    i.style.textTransform="capitalize"
  })
 
  
 

  ppt.style.visibility="visible";

 

  gsap.to("#S #cont",{
    x:"-200%",duration:60,repeat:-1
  
  })


})
hm.addEventListener("mouseleave",function(){

  ppt.style.visibility="hidden";
 

  

  

})
cnt.addEventListener("mouseenter",function(){


  ppt.style.visibility="visible";

 
  hp5.forEach(function(i)
  {
    i.innerHTML="contact";
    i.style.textTransform="capitalize"
  })
 

  gsap.to("#S #cont",{
    x:"-200%",duration:60,repeat:-1
  
  })


})
cnt.addEventListener("mouseleave",function(){

  ppt.style.visibility="hidden";

  

  

})
sd.addEventListener("mouseenter",function(){
 
  hp5.forEach(function(i)
  {
    i.innerHTML="studio";
    i.style.textTransform="capitalize"
  })
 
  
 

  ppt.style.visibility="visible";

 

  gsap.to("#S #cont",{
    x:"-200%",duration:60,repeat:-1
  
  })


})
sd.addEventListener("mouseleave",function(){

  ppt.style.visibility="hidden";
 

  

  

})


let cc = gsap.timeline({scrollTrigger:{

  scroller:"#main",trigger:"#page6",start:"top 18%" ,end:"top 10%",scrub:1 

  }

})
cc.to("#page6",{
  backgroundColor:"#EDBFFF",
},"bb")
cc.to("#sm a",{
  color:"black",
},"bb")
cc.to("#page6 h6",{
  color:"black",
},"bb")



cc.to("#page6 h2",{
  color:"black"
},"bb");
let menu = document.querySelector("#menu");
let bar = document.querySelector("#bar");
let mnu = document.querySelector("#mnu");
let crss = document.querySelector("#crss");

let bt=0;
bar.addEventListener("click",function(){
  if(bt==0)
  {
    menu.style.top="0%";
  menu.style.transitionDuration="1s";
  mnu.style.visibility="hidden";
 
  crss.style.visibility="visible";
 
  bt=1;
  }
  else{
    menu.style.top="-100%";
  menu.style.transitionDuration="1s";
  mnu.style.visibility="visible";
 
  crss.style.visibility="hidden";
  
  bt=0;
  }
  

})



































