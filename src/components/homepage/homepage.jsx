/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

import { Slider, Tags } from '..';
import logo from "../../images/white-logo.png";


import "./homepage.css";


const homepage = () => {
    return (
        <div className="app">
        <body className="app-body">
          <header className="app-header" />
            <Slider />
            <Tags />
        </body>
      </div>
    );

};

export default homepage;