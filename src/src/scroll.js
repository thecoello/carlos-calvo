import ScrollTrigger from "gsap/ScrollTrigger"
import LocomotiveScroll from "locomotive-scroll"
import { gsap, Linear, Expo } from "gsap"


export default class Scroll {

  scroll() {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
      lerp: 0.025
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
        xPercent: 100,
        backgroundSize: "150%",
        ease: Linear.easeNone,
        scrollTrigger: {
          scroller: ".wrapper",
          horizontal: true,
          trigger: id,
          start: "top top",
          end: "75%",
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

    tl.fromTo("#nav", 2, {
      yPercent: 20,
      opacity: 0,
      ease: Expo.easeInOut,
    }, {
      yPercent: 0,
      opacity: 1,
      delay: 2.5
    })

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
}