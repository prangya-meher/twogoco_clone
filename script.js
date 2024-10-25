  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
  
  
  
  const headerAnimation =()=>{
    const h1=document.querySelectorAll("h1");
   const header=document.querySelector(".header");

var tl= gsap.timeline();

tl.from(header,{
    y:-30,
    opacity:0,
    delay:0.2,
    duration:0.5
})

tl.from(h1,{
    y:70,
    stagger:0.3,
    opacity:0,
    duration:0.4
})
}


const animation1 = () =>{
    var play=document.querySelector(".play");
    var videoCont=document.querySelector(".video-container")
    
    videoCont.addEventListener("mouseenter",()=>{
        gsap.to(play,{
            opacity:1,
            scale:1.3
        })
    })
    videoCont.addEventListener("mouseleave",()=>{
        gsap.to(play,{
            opacity:0,
            scale:0
        })
    })
    videoCont.addEventListener("mousemove",(e)=>{
        console.log(e.x)
        console.log(e.y)
        gsap.to(play,{
            left:e.x,
            top:e.y
        })
    })
}


headerAnimation();
animation1();
















