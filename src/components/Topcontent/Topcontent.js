import React from 'react'
import  "./Topcontent.css";
import Resume from  "../../assets/Resume.pdf"


const Topcontent = () => {


  return (
    <div className="topcontent">
      <div className="topcontent__container">
          <h1>Rajarajeswari</h1>
          <p>Front end developer</p>
          <a href={Resume} download="myResume" target='_blank'
          rel="noopener noreferrer">
              <button  className="topcontent__button1"> My Resume</button>
             
          </a>
          <a href="https://github.com/RAJIE11">
              <button className="topcontent__buton2">Github</button>         
          </a>
      </div>
    </div>
  )
}

export default Topcontent
