import React from "react";
import TextIntro from "./TextIntro";

export default class Intro extends React.Component {


  render() {
    return (
      <>
      
        <div id='intro'>
        <TextIntro />
          <img src="https://images.unsplash.com/photo-1574856049959-d3134a3e592f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

      </>
    )
  }
}