import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div class="title">
          PoppyWatch
        </div>

        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
        <div class="Legion">
           <a href="http://www.legion.ca/remembrance/donate-to-the-poppy-fund">
           <img src="legion-logo.png" /> </a>
        </div>
      </header>
    )
  }
}

export default NavBar;
