import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div class="title">
          PoppyWatch
          <div class="Legion">
             <img src="legion-logo.png" />
          </div>
        </div>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;
