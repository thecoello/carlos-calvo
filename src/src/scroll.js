import ScrollTrigger from "gsap/ScrollTrigger"
import LocomotiveScroll from "locomotive-scroll"
import { gsap, Linear, Expo } from "gsap"


export default class Scroll {

  scroll() {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
      lerp: 0.03
    })

    gsap.registerPlugin(ScrollTrigger);
    locoScroll.on("scroll", ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(".wrapper", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.x;
      },

      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },

      pinType: document.querySelector(".wrapper").style.transform ? "transform" : "fixed"
    });

    function animationSection(id) {
      gsap.to(id, 2, {
        
        width: "150%",
        ease: Linear.easeNone,
        scrollTrigger: {
          scroller: ".wrapper",
          horizontal: true,
          trigger: id,
          start: "top top",
          end: "100%",
          scrub: true,
        },
      },
      );
    }
    animationSection("#intro")

    const tl = new gsap.timeline({
      scrollTrigger: {
        scroller: ".wrapper",
        horizontal: true,
        trigger: "#projectWrapper",
        start: "top center",
        end: "10%",
        scrub: true,
      },
    })

     tl.fromTo("#lineUp", 2, {
      xPercent: 20,
      opacity: 0,
      ease: Expo.easeOut,
    }, {
      xPercent: 0,
      opacity: 1,
    }) 

    tl.fromTo("#lineDown", 2, {
      xPercent: -10,
      opacity: 0,
      ease: Expo.easeOut,
    }, {
      xPercent: 0,
      opacity: 1,
    }) 

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
}