import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar'
import {Link, Router} from "react-router-dom";
import logo from './../Assets/LHLogo.svg';
import nabh from './../Assets/NABH.png';
import menu from './../Assets/menu.svg';
import search from './../Assets/search.svg';
import { AccessAlarm } from '@material-ui/icons';


export default function GlobalAppBar() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
  
          <img src={search} className="Search-logo" alt="search" /> 
              
              <Link to={process.env.PUBLIC_URL + '/home'}>
                  
                  <IconButton>
                      <img src={logo} className="App-logo" alt="logo" />
                  </IconButton>
                  
              </Link>  
  
              <img src={menu} className="Menu-logo" alt="menu" />   
  
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  