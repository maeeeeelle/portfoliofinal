import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: ".image-gsap",
//   start: "top top",
//   pin: true,
//   pinSpacing: false,
// });

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".image-gsap");

images.forEach((image) => {
  ScrollTrigger.create({
    trigger: image,
    start: "top top",
    pin: true,
    pinSpacing: false, // change en true si tu veux un espacement entre les pins
  });
});

// var allProject = document.querySelectorAll(".image-container-alone");

// var toggleMenu = function toggleMenu(pop) {
//   pop.classList.toggle("is-active");
//   document.body.classList.toggle("project-no-scroll");
//   document.querySelector("project-pop.is-active").classList.toggle("active");
// };

// allProject.forEach(function (imageContainerAlone) {
//   var pop = imageContainerAlone.querySelector(".project-pop");
//   var img = imageContainerAlone.querySelector(".image-pop");
//   var cross = imageContainerAlone.querySelector(".project-cross");
//   img.addEventListener("click", () => {
//     toggleMenu(pop);
//   });
//   cross.addEventListener("click", () => {
//     toggleMenu(pop);
//   });
// });
