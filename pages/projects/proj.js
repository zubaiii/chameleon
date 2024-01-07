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

    const sections = gsap.utils.toArray('.projsec-lp');

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


  


    const section = document.getElementById('sec2');


    document.querySelectorAll('.projsec-lp').forEach(el => {

   
      
        gsap.to(el.querySelector('.main-projsec2'), {
            x: 0,
            y: 0,
            duration:3,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.main-projsec2'),
                start: 'top bottom',
                end: '+=1200',
                scrub: 0.5,
            }
        })
        gsap.to(el.querySelector('.main-projsecvideo2'), {
            x: 0,
            y: 0,
            duration:3,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector('.main-projsecvideo2'),
                start: 'top bottom',
                end: '+=1200',
                scrub: 0.5,
            }
        })

   


    })

})
}

