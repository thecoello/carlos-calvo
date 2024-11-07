import { useGSAP } from "@gsap/react"
import gsap, { Back } from "gsap"
import React, { useEffect, useRef, useState } from "react"

function StartButton() {
    const [opened, setOpened] = useState(false)

    const { contextSafe } = useGSAP()

    const container = useRef()
    const projectName = useRef()
    const arrow = useRef()
    const scroll = useRef()
    const close = useRef()

    const tlButtonTl = new gsap.timeline()

    useEffect(() => {
        hideTextStart()
        opened ? hideText() : null
    },[opened])

    const hideTextStart = contextSafe(() => {
        tlButtonTl.fromTo(container.current, 0.5, { x: 0 }, { x: 0, delay: 1.5, ease: Back.easeInOut })
            .to(projectName.current, 1.5, { x: 20, delay: -0.25, ease: Back.easeInOut })
            .to(projectName.current, 1, { width: '0rem', delay: -1.75, alpha: 0, ease: Back.easeInOut })
            .to(container.current, 1, { paddingLeft: '0rem', xPercent: 0, delay: -1.75, x: 10, ease: Back.easeInOut })
            .to(arrow.current, 1, { x: 0, delay: -1.5, ease: Back.easeInOut })
            .to(container.current, 1, { paddingLeft: '0rem', xPercent: 0, delay: -1, x: 0, ease: Back.easeInOut })
    })

    const showText = contextSafe(() => {
        !opened ? tlButtonTl.reverse() : tlButtonTl.pause()
    })

    const hideText = contextSafe(() => {
        !opened ? tlButtonTl.play() : tlButtonTl.pause()
    })

    return (
        <div onClick={()=>{setOpened(true); hideText()}} className="flex items-center gap-3 cursor-pointer">
            <div onMouseEnter={showText} onMouseLeave={hideText} ref={container} className="bg-custom-grey-strong rounded-full  font-medium pl-14 flex items-center justify-end overflow-hidden">

                <span ref={projectName} className="max-w-max relative z-1 text-nowrap pointer-events-none select-none">OPTIFRAME</span>

                <div className=" overflow-hidden relative z-2 flex items-center justify-center p-4">
                    <svg ref={arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 -translate-x-10 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default StartButton