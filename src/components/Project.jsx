import React, { useEffect, useRef } from "react";
import Render from "./project/Render";
import Lenis from "lenis";
import Description from "./project/Description";
import StartButton from "./project/StartButton";
import { useGSAP } from "@gsap/react";
import gsap, { Back } from "gsap";
import { delay } from "framer-motion";

export default function Project() {
  let lenis
  const wrapper = useRef(null)
  const content = useRef(null)
  const buttonOpen = useRef(null)

  const { contextSafe } = useGSAP()

  const setButtonFixed = contextSafe(() => {

    const tl = new gsap.timeline()

    tl.to(buttonOpen.current, 0.5, { alpha: 0, ease: Back.easeInOut })
    .to(buttonOpen.current,0.5, { position: 'fixed', right: 0, left: 0, delay: 0 })
    .to(buttonOpen.current, 0.5, { alpha: 1, left: '1%', ease: Back.easeInOut, delay: 0 }) 
  })


  useEffect(() => {
    lenis = new Lenis({
      content: content.current,
      wrapper: wrapper.current,
      orientation: 'horizontal',
      gestureOrientation: "both",
    });

    lenis.stop()
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })

  const openProject = () => {
    setButtonFixed()
    lenis.start()
    lenis.scrollTo('#description')
  }

  return (
    <div ref={wrapper} className="overflow-auto w-auto">
      <div ref={content} className="w-max h-screen flex justify-center items-center">
        <div className="w-max h-full flex items-center justify-start relative">
          <Render />
          <span className="absolute right-[10%] top-0 translate-y-[46.55vh]" ref={buttonOpen} onClick={openProject}><StartButton /></span>
        </div>
        <Description />
      </div>
    </div>
  )
}