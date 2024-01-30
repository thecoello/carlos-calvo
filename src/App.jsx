import "./style.css"
import React from "react"
import Projects from "./components/Projects"
import Intro from "./components/Intro"
import { gsap, Expo, Linear } from "gsap"
import Scroll from "./src/scroll"
import Nav from "./components/Nav"
import TextIntro from "./components/TextIntro"


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingOff: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    prevState.loadingOff != this.state.prevState ? new Scroll().scroll() : this.setState({ loadingOff: false })
  }

  componentDidMount() {
    this.introAnimation()
    this.textAnimation()
  }

  introAnimation() {
    gsap.to(".loading", 5, {
      width: 0, ease: Expo.easeInOut, onComplete: () => {
        this.setState({ loadingOff: true })
        gsap.to('#logo span', 1, { opacity: 1.5, ease: Expo.easeInOut })
        gsap.to('#logo span', 1, { opacity: 0.9, ease: Expo.easeInOut })
      }
    })
    gsap.fromTo("#intro", 5, { backgroundSize: "150%", filter: "brightness(0)" }, { backgroundSize: "100%", filter: "brightness(1)", ease: Expo.easeInOut })

  }

  textAnimation() {
    const textsIntro = document.querySelectorAll('.textIntro')
    textsIntro.forEach((textIntro, i) => {
      if (i % 2 === 0) {
        gsap.fromTo(textIntro, { xPercent: 0 }, { xPercent: -100, repeat: -1, ease: Linear.easeNone, duration: 10 })
      } else {
        gsap.fromTo(textIntro, { xPercent: -100 }, { xPercent: 0, repeat: -1, ease: Linear.easeNone, duration: 10 })

      }
    });
  }

  render() {
    return (
      <>
        <Nav />

        <TextIntro />
        <div data-scroll-container className="wrapper">

          {!this.state.loadingOff ? <div className="loading"></div> : null}

          <div className="section">
            {<Intro />}
          </div>
          <div className="section">
            {<Projects />}
          </div>
        </div>
      </>
    )
  }
}