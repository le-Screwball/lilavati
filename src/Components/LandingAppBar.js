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


export default function LandingAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
            
            <Link to={process.env.PUBLIC_URL + '/home'}>
                
                <IconButton>
                    <img src={logo} className="App-logo" alt="logo" />
                </IconButton>
                
            </Link>  

            <img src={nabh} className="Cert-logo" alt="logo" />   

        </Toolbar>
      </AppBar>
    </div>
  );
}

