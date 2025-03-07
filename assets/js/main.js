const navMenu=document.getElementById("nav-menu"),
navToggle=document.getElementById("nav-toggle"),
navClose=document.getElementById("nav-close");

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove ("show-menu")
    })
}

if(navMenu){
    navMenu.addEventListener("click",() =>{
        navMenu.classList.remove("show-menu")
    })
}

//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 50,
    loop: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 20,
   
  });

//sections active

const sections = document.querySelectorAll("section[id]");



  //Scroll up
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >=460) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");

}
window.addEventListener("scroll", scrollUp);

//scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance:"60px",
    duration: 2500,
    delay: 500,
    reset: true
});
sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
    interval: 300,
  });
  sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });