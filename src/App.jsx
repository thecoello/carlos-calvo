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
      loadingOff: false,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    prevState.loadingOff != this.state.prevState ? new Scroll().scroll() : this.setState({ loadingOff: false })
  }

  componentDidMount() {

    const images = document.querySelectorAll('img')
    let count = 0
    images.forEach(image=>{
      image.addEventListener('load',()=>{
        count = count + 1
        let percent = Math.round(100/images.length * count)

        document.querySelector('#numberLoading').innerHTML = percent + '%'

        if(count == images.length){
          gsap.to('#numberLoading',0.5,{scale: 1.2, alpha: 0, ease: Expo.easeOut, onComplete:()=>{
            this.introAnimation()
            this.textAnimation()
          }})
          
        }
      })
    })
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
    gsap.to(".textIntro", 5, { alpha: "1", delay: 1})


  }

  textAnimation() {
    const textsIntro = document.querySelectorAll('.textIntro')
    textsIntro.forEach((textIntro, i) => {
      if (i % 2 === 0) {
        gsap.fromTo(textIntro, { xPercent: 0 }, { xPercent: -100, repeat: -1, ease: Linear.easeNone, duration: 20 })
      } else {
        gsap.fromTo(textIntro, { xPercent: -100 }, { xPercent: 0, repeat: -1, ease: Linear.easeNone, duration: 20 })

      }
    });
  }

  render() {
    return (
      <>
        <Nav />

        
        <div data-scroll-container className="wrapper">

          {!this.state.loadingOff ? <div className="loading">
            <span id="numberLoading">1%</span>
          </div> : null}

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