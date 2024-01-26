import React from "react";
import gsap from "gsap";
import "./../../public/images/soles.png"

export default class Projects extends React.Component {

  componentDidMount(){
    this.animationProjects()
  }
  
  animationProjects(){
    const projects = document.querySelectorAll('.project')
    projects.forEach(project => {
      project.addEventListener('mouseenter',()=>{
        gsap.to(project.children,10,{scale: 1.2, overwrite: "auto"})
      })
      
      project.addEventListener('mouseleave',()=>{
        gsap.to(project.children,10,{scale: 1, overwrite: "auto"})
      })
    });
  }

  render() {
    return (
      <div id="projectWrapper">
        <div className="projectsContainer">
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
          <div className="project"><img src="./../../public/images/soles.png" alt="" /></div>
        </div>
      </div>
    )
  }
}