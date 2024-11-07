import { useGSAP } from "@gsap/react"
import React from "react"

export default function Nav() {

  useGSAP(() => {

  })

  return (

    <div id="nav">
      <div id="logo">
        <span id="logo-1">Carlos</span>
        <span id="logo-2">Calvo</span>
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

  )

}