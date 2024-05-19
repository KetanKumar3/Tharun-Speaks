document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {

        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 3000,
        },

    });
});


gsap.from(".container2 .first-element, .container2 .second-element, .container2 .third-element, .container2 .container2-element2,.container2 .container2-element3",{
    opacity:0,
    stagger:1,
    delay:1,
    y:60,
    scrollTrigger:{
        trigger:".container2",
        scroller:"body",
        start:"top 60%",
        // markers:true
    }
})


gsap.from(".container3 .learn,.container3 .container3-element",{
    opacity:0,
    stagger:1,
    delay:1,
    y:60,
    scrollTrigger:{
        trigger:".container3",
        scroller:"body",
        start:"top 90%",
        // markers:true
    }
})

gsap.from(".container4 .container4-element , .container4 .container4-element2",{
    opacity:0,
    stagger:1,
    delay:0.5,
    y:60,
    scrollTrigger:{
        trigger:".container4",
        scroller:"body",
        start:"220vh",
        // markers:true
    }
})

gsap.from(".container6 .placement , .container6 .placed, .container6 .influencer, .container6 .influencer2",{
    opacity:0,
    stagger:1,
    delay:0.5,
    y:60,
    scrollTrigger:{
        trigger:".container6",
        scroller:"body",
        start:"700vh",
        // markers:true
    }
})


gsap.from(".container7 .container7-text , .container7 .full-line, .container7 .container7-text2, .container7 .edit4",{
    opacity:0,
    stagger:1,
    delay:0.5,
    y:60,
    scrollTrigger:{
        trigger:".container7",
        scroller:"body",
        start:"1vh",
        // markers:true
    }
})



// gsap.from(".container2 .first-element",{
//     opacity:0,
//     duration:1,
//     delay:1,
//     y:-90,
// })

