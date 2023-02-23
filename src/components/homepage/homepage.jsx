/* eslint-disable arrow-body-style */
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import { Slider, Tags } from '..';
import logo from "../../images/white-logo.png";


import "./homepage.css";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const homepage = () => {
    return (
        <div className="app">
        <body className="app-body">
          <header className="app-header" />
            <Slider />
            <Tags />
            <ColorButton variant="Contained">go!</ColorButton>
        </body>
      </div>
    );

};

export default homepage;