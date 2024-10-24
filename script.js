var tl= gsap.timeline();

tl.from(".header",{
    // scale:1,
    y:-30,
    opacity:0,
    delay:0.2,
    duration:0.5
})

tl.from(".page1 h1",{
    y:70,
    stagger:0.3,
    opacity:0,
    duration:0.4
})