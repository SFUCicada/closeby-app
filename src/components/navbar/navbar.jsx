/* eslint-disable arrow-body-style */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../images/white-logo.png';

import "./navbar.css";


const navbar = () => {

    return (
        <nav className="navbar">
        <a href="index.html"><img src={logo} className="app-logo" alt="logo" /></a>
          <ul>
            <li><a className="nav-button" href="aboutus.html">support</a></li>
            <li><a className="nav-button" href="aboutus.html">about us</a></li>
          </ul>
      </nav>
    );

};

export default navbar;