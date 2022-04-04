import React from "react";
import {Link} from "react-scroll"
import "./Header.css"
const Header = () => {
  return (
    <div className ="header">
        <div className="header__left">
            <h1>Develo<span>per</span></h1>
        </div>
        <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>
            About 
          </h4>
        </Link>
        <Link to="Skills" smooth={true} duration={500}>
          <h4>
            Skills 
          </h4>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <h4>
            Contact
          </h4>
        </Link>
        
        </div>
    </div>
  );
};

export default Header;
