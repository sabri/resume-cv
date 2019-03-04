// @flow strict

import React from 'react';
import "../App.css"
import Sticky from "react-sticky-el"

function Header() {
    return (
  <Sticky style={{zIndex : 22}}>
        <div className="navbar">
        <div className ="img">
            <img src="s.jpg" alt="Avatar" className="avatar"/>
                <span>Baazaoui Med Sabri</span>
                   </div>
                   <div>
  <a href="#home">About Me</a>
  <a href="#news">Mycover letter</a>
  <a href="#contact">Dashborad</a>
</div></div>
</Sticky>

    );
};

export default Header;