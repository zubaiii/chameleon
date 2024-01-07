var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
  slidesPerView: 1,
  freeMode: false,
  mousewheel: false,
  keyboard: {
    enabled: true
},
 // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let menu = document.querySelector(".menu-icon")
let close = document.querySelector(".close-icon")
let nav = document.querySelector(".nav")


menu.addEventListener('click',() =>{
    nav.classList.add('navopen')
    gsap.to('.nav img', {
        opacity:1,
        y:0,
        duration:2,
    })
    gsap.to('.li1', {
        opacity:1,
        x:0,
        duration:2,
    })
    gsap.to('.li2', {
        opacity:1,
        x:0,
        duration:2,
    })
    gsap.to('.li3', {
        opacity:1,
        y:0,
        duration:2,
    })
})
close.addEventListener('click',() =>{
    nav.classList.remove('navopen')
    gsap.to('.li1', {
        opacity:0,
        x:-700,
    })
    gsap.to('.nav img', {
        opacity:0,
        y:-700,
    })
    gsap.to('.li2', {
        opacity:0,
        x:700,
    })
    gsap.to('.li3', {
        opacity:0,
        y:-700,
    })
})


if(window.scrollY>=110){

}
var wraper = document.getElementById('wraper');

if(wraper){
    gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.for-text p', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.for-text p',
            start: 'top top',
            end: 1000,
            scrub: 0.5, 
        }
    })
   
    gsap.to('.about-sec1-text p', {
        fontSize: '1.5rem',
        opacity:0,
        duration:4,
        scrollTrigger: {
            trigger: '.about-sec1-text p',
            start: 'top top',
            end: 500,
            scrub: 1, 
        }
    })
  

    
  


    const section = document.getElementById('sec2');


    document.querySelectorAll('.character').forEach(el => {

        gsap.to(el.querySelector('.sec2'), {
            x: 0,
            y: 0,
           backgroundColor:"#ccc",
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.sec2'),
                start: 'top bottom',
                end: '+=1200',
                scrub: 0.5,
            }
        })


  


      

        gsap.to(el.querySelector('.sec2'), {
            opacity:1,
            x:0,
            right:0,
            backgroundColor:"#ccc",
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.sec2'),
                // y:0, 
                start: 'top bottom',
                end: '+=1200',
                scrub: 0.5,
            }
        })
        gsap.to(el.querySelector('.sec2-p'), {
            opacity:1,
            x:0,
            y:0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.sec2-p'),
                // y:0, 
                start: 'top bottom',
                end: '+=2500',
                scrub: 0.5,
            }
        })
        gsap.to(el.querySelector('.lap'), {
            y: 100,
            backgroundColor:"#d3eedf",
            opacity:1,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.lap'),
                y:0,
                start: 'top bottom',
                end: '+=1500',
                scrub: 1,
            }
        })
        gsap.to(el.querySelector('.main-sec4'), {
            y:0,
            backgroundColor:"#d3eedf",
            opacity:1,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.main-sec4'),
                y:0,
                start: 'top bottom',
                end: '+=2000',
                scrub: 1,
            }
        })

        gsap.to(el.querySelector('.main-sec5'), {
            left:0,
            opacity:1,
            backgroundColor:"#97d8ac",
            scrollTrigger: {
                containerAnimation: scrollTween,  
                trigger: el.querySelector('.main-sec5'),
            
                start: 'top bottom',
                end: '+=1500',
                scrub: 1,
            }
        })


        gsap.to(el.querySelector('.main-sec6'), {
            y:0,
           x:0,
            opacity:1,
            backgroundColor:"#7ccba1",
            scrollTrigger: {
                containerAnimation: scrollTween,  
                trigger: el.querySelector('.main-sec6'),
            
                start: 'top bottom',
                end: '+=1500',
                scrub: 1.5,
            }
        })
        gsap.to(el.querySelector('.sec7-lp'), {
            y:0,
            x:0, 
            opacity:1,
            backgroundColor:"#f3f3ef",
            scrollTrigger: {
                containerAnimation: scrollTween,  
                trigger: el.querySelector('.sec7-lp'),
                start: 'top bottom',
                end: '+=500',
                scrub: 1.5,
            }
        })
        gsap.to(el.querySelector('.sec8-lp'), {
            y:0,
            rotate:0, 
            opacity:1,
            width: "110%",
            backgroundColor:"#000",
            scrollTrigger: {
                containerAnimation: scrollTween,  
                trigger: el.querySelector('.sec8-lp'),
                start: 'top bottom',
                end: '+=1500',
                scrub: 1.5,
            }
        })
   


    })

})
}


gsap.to(".col-sec2",{
    opacity:1,
    y:0,
    duration:4,
    delay:4,
    scrollTrigger:{
        trigger:".col-sec2",
        scroll:"body",
        start:"top 120%",
        end:"top 30%",
        scrub:1
    }
})


gsap.to(".main-3",{
    opacity:1,
    x:0,
    scrollTrigger:{
        trigger:".main-3",
        scroll:"body",
        start:"top 130%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".ab1-p",{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".ab1-p",
        scroll:"body",
        start:"top 140%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".sec2ab-h1",{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".sec2ab-h1",
        scroll:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".sec3ab-h3",{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".sec3ab-h3",
        scroll:"body",
        start:"top 100%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".main-about-4",{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".main-about-4",
        scroll:"body",
        start:"top 100%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".sec5abh1",{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".sec5abh1",
        scroll:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".btn",{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".btn",
        scroll:"body",
        start:"top 120%",
        end:"top 30%",
        scrub:1
    }
})


gsap.to(".prot-col3",{
    x:0,
    duration:3,
    scrollTrigger:{
        trigger:".prot-col3",
        scroll:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".prot-col4",{
    x:0,
    duration:3,
    scrollTrigger:{
        trigger:".prot-col3",
        scroll:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
gsap.to(".let-art-text",{
    y:0,
    opacity:1,
    duration:3,
    scrollTrigger:{
        trigger:".let-art-text",
        scroll:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
});


const sec3 = document.querySelector(".prot-col3");




