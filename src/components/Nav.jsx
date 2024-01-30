import React from "react";
import { gsap, Expo } from "gsap"

export default class Nav extends React.Component {

  componentDidMount() {
    const btnMenu = document.querySelector('#btnMenu')
    let menuOpen = false
    const menuOptions = document.querySelectorAll('#menuContent ul li')

    btnMenu.addEventListener('mouseenter', () => {
      if (!menuOpen) {
        gsap.to("#lineUp", 2, { xPercent: 20, ease: Expo.easeOut, overwrite: "auto" })
        gsap.to("#lineDown", 2, { xPercent: -20, ease: Expo.easeOut, overwrite: "auto" })
      }
    })

    btnMenu.addEventListener('mouseleave', () => {
      if (!menuOpen) {
        gsap.to("#lineUp", 2, { xPercent: 0, ease: Expo.easeOut, overwrite: "auto" })
        gsap.to("#lineDown", 2, { xPercent: 0, ease: Expo.easeOut, overwrite: "auto" })
      }
    })

    btnMenu.addEventListener('click', () => {
      if (!menuOpen) {
        const tl = new gsap.timeline()
        gsap.to("#lineUp", 2, { xPercent: -20, ease: Expo.easeOut, overwrite: "auto" })
        gsap.to("#lineDown", 2, { xPercent: 20, ease: Expo.easeOut, overwrite: "auto" })

        let delay = 0
        menuOptions.forEach((option, i)=>{
          delay += 0.2
          gsap.fromTo(option, 2, { xPercent: 10, alpha: 0 }, { visibility: "visible", xPercent: 0, alpha: 1, ease: Expo.easeOut, delay: delay })
        })

        menuOpen = true
      } else if (menuOpen) {
        gsap.to("#lineUp", 2, { xPercent: 20, ease: Expo.easeOut, overwrite: "auto" })
        gsap.to("#lineDown", 2, { xPercent: -20, ease: Expo.easeOut, overwrite: "auto" })


        let delay = 0
        menuOptions.forEach((option, i)=>{
          delay += 0.1
          gsap.fromTo(option, 2, { xPercent: 0, alpha: 1 }, {xPercent: -10, alpha: 0, ease: Expo.easeOut, delay: delay })
        })

        menuOpen = false
      }

    })
  }

  render() {
    return (
      <>
        <div id="nav">

          <div id="logo">
            <span>Carlos Calvo</span>
          </div>

          <div id="menu">

            <div id="btnMenu">
              <span id="lineUp"></span>
              <span id="lineDown"></span>
            </div>

            <div id="menuContent">
              <ul>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

          </div>

        </div>


      </>
    )
  }

}