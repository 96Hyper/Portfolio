// const div = document.querySelector(".auto-type")
// const text = ["Web Dev" , "Programmer" , "Rajesh"]

// function textTyping  (){

// }

var typed = new Typed(".auto-type", {
  strings: ["Rajesh👋", "Web Developer 👩‍💻", "Programmer😎"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

var load = document.querySelector("#loader");

setInterval(() => {
  load.style.top = "-100%";
}, 2400);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


