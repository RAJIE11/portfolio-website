import React from 'react'
import { IconButton } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import {Element} from "react-scroll";

import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>rajierajie465@gmail.com</span>
        </p>
        <p>
          Github Username : <span>RAJIE11</span>
        </p>
        <div className="contact__icons">
            <p>Linkedin</p>
          <a
            href="https://www.linkedin.com/in/rajarajeswari-j-44368b213"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          
        </div>
      </div>
    </Element>
  );
};

export default Contact;