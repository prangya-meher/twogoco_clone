const locomotiveJsAnimation=()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
  
  const navAnimation=()=>{
    gsap.to(".logo svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:".header",
            scroller:".main",
            // markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:true

        }
    })

    gsap.to(".link .link-ul",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:".header",
            scroller:".main",
            // markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:true

        }
    })

    // gsap.to(".logo svg",{
    //     transform:"translateY(0)",
    //     scrollTrigger:{
    //         trigger:".page6",
    //         scroller:".main",
    //         markers:true,
    //         start:"top 70%",
    //         end:"top 10%",
    //         scrub:true

    //     }
    // })
  }
  
  const headerAnimation =()=>{
    const headerH1=document.querySelectorAll("h1");
   const headerLink=document.querySelector(".link");

var tl= gsap.timeline();

tl.from(headerLink,{
    y:-30,
    opacity:0,
    delay:0.2,
    duration:0.5
})

// tl.from(headerH1,{
//     y:70,
//     stagger:0.3,
//     opacity:0,
//     duration:0.4
// })
}

const videoAnimation = () =>{
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

locomotiveJsAnimation();
cursorAnimation();
headerAnimation();
videoAnimation();
navAnimation();
















