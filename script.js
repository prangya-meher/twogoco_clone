  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
  
  
  
  const headerAnimation =()=>{
    const headerH1=document.querySelectorAll("h1");
   const header=document.querySelector(".header");

var tl= gsap.timeline();

tl.from(header,{
    y:-30,
    opacity:0,
    delay:0.2,
    duration:0.5
})

tl.from(headerH1,{
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

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        left: dets.x-70,
        top: dets.y-80,
      });
    });

    let page4=document.querySelector(".page4");
    page4.addEventListener("mouseenter",()=>{
        gsap.to(".cursor",{
            scale:1.4,
        })
    })
    page4.addEventListener("mouseleave",()=>{
        gsap.to(".cursor",{
            scale:0,
        })
    })
}

cursorAnimation();
headerAnimation();
animation1();
















