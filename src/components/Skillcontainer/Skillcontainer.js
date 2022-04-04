import React from 'react'
import { Element } from "react-scroll"
import skilling from "../../assets/SkillsImage.jpg"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./Skillcontainer.css";

const Skillcontainer = () => {
  return (
    <Element className="Skillcontainer" id="Skills">
        <div className="Skillcontainer__image"></div>
        <img src={skilling}alt=""width="500" 
     height="300"></img>
        <div className="Skillcontainer__text">
        <h1 id="Skillcolor">SKILLSET </h1><br/>
        <div classname ="Skillcontainer_Skillsets">
           <h5>HTML</h5>
           <div classname =" Skillcontainer_slider1">
          <LinearProgress variant="determinate" value={90}/>
      
        </div>
        </div> <br/>
        <div classname ="Skillcontainer_Skillsets">
           <h5>CSS</h5>
           <div classname ="Skillcontainer_slider1">
          <LinearProgress variant="determinate" value={90}/>
      
        </div>
        </div><br/>
        <div classname ="Skillcontainer_Skillsets">
           <h5>JAVASCRIPT</h5>
           <div classname ="Skillcontainer_slider Skillcontainer_slider2">
          <LinearProgress variant="determinate" value={70}/>
      
        </div>
        </div><br/>
        <div classname ="Skillcontainer_Skillsets">
           <h5>REACTJS</h5>
           <div classname ="Skillcontainer_slider Skillcontainer_slider3">
          <LinearProgress variant="determinate" value={60}/>
      
        </div>
        </div><br/>
        <div classname ="Skillcontainer_Skillsets">
           <h5>PYTHON</h5>
           <div classname ="Skillcontainer_slider Skillcontainer_slider3">
          <LinearProgress variant="determinate" value={50}/>
      
        </div>
        </div>
        </div>
    </Element>
  )
}

export default Skillcontainer
