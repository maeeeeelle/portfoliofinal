import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".image-gsap");

images.forEach((image) => {
  ScrollTrigger.create({
    trigger: image,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
