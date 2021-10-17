import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar'
import { Link, Router } from "react-router-dom";
import logo from './../Assets/LHLogo.svg';
import search from './../Assets/search.svg';
import MenuDrawer from './MenuDrawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  AppBar: {
    padding: '1%',
    background: '#ffffff',
    boxShadow: '0px 0px 0px 0px',
  },

  ToolBar: {
    display: "flex",
    justifyContent: 'space-between',
  },

  SearchLogo: {

  },

  AppLogo: {
    // height: 'auto',
    width: '75%',
    maxHeight: '100px',
  },

  AppLogoLink: {
    display: 'flex',
    alignItems: 'center',
  },

  AppLogoBoundary: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function GlobalAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar className={classes.ToolBar}>

          <img src={search} className={classes.SearchLogo} alt="search" />

          <Link className={classes.AppLogoLink} to={process.env.PUBLIC_URL + '/home'}>

            <IconButton className={classes.AppLogoBoundary}>
              <img src={logo} className={classes.AppLogo} alt="logo" />
            </IconButton>

          </Link>

          <MenuDrawer />

        </Toolbar>
      </AppBar>
    </div>
  );
}
