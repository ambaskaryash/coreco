import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { SplitText } from "gsap/dist/SplitText.js";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const transition = async function (connor, rothschild, subtitle, overline) {
    connor = document.querySelector(".connor");
    rothschild = document.querySelector(".rothschild");
    subtitle = document.querySelector(".subtitle");
    overline = document.querySelector(".overline");

    let overlineSplit = new SplitText(overline, { type: "chars" });
    let connorSplit = new SplitText(connor, { type: "chars" });
    let rothschildSplit = new SplitText(rothschild, { type: "chars" });

    gsap.set(connor, {  opacity: 0, perspective: '20vw', transformStyle:"preserve-3d", force3D: true, });
    gsap.set(rothschild, {  opacity: 0, perspective: '20vw', transformStyle:"preserve-3d" , force3D: true, });
    gsap.set(overline, { perspective: 400, opacity: 0 });

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(connor, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(rothschild, { opacity: 0 }, { opacity: 1, duration: 1.25 });


    gsap.fromTo(
      overlineSplit.chars,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.35,
        ease: "backwards",
        clearProps: "opacity",
      }
    );

    gsap.fromTo(
      connorSplit.chars,
      {
        translateY: "20%",
        rotationX: '-90deg',
        // opacity: 0,
      },
      {
        translateY: "0",
        rotationX: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        force3D: true,
        ease: "ease",
        clearProps: "opacity",
      }
    );

   gsap.fromTo(
     rothschildSplit.chars,
     {
        translateY: "-20%",
        rotationX: '90deg',
        // opacity: 0,
      },
      {
        translateY: "0",
        rotationX: 0,
        opacity: 1,
        duration: 1.15,
        delay: .25,
        stagger: 0.1,
        force3D: true,
        ease: "ease",
        clearProps: "opacity",
      }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, x: "-2.5%" },
      { opacity: 1, x: 0, duration: 1, delay: 1.6, clearProps: "opacity" }
    );

    gsap.to(".year", {
      scrollTrigger: {
        trigger: "#projects",
        end: 200,
        scrub: true,
        once: false,
      },
      opacity: 0,
    });
  };
