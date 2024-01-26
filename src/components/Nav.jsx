import React from "react";
import {gsap, Linear } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default class Nav extends React.Component{

  componentDidMount(){
  }

  render(){
    return(
      <div id="nav">

      <div id="logo">
        <span>Carlos Calvo</span>
      </div>

      <div id="menu">

        <div id="btnMenu">
          <span id="lineUp"></span>
          <span id="lineDown"></span>
        </div>

      </div>

    </div>
    )
  }

}