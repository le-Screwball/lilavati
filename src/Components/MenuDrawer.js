import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import menu from './../Assets/menu.svg';
import menucol from './../Assets/MenuCol.svg';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  list: {
    width: '100vw ',
    margin: '10% 0% 0% 0%',
  },

  listGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Grid container spacing={5} className={classes.listGrid}>

        <Grid item xs={12}>
          <img src={menucol} className="MenuCol-logo" alt="menucol" />
        </Grid>

        <Grid item xs={12}>
          Home
        </Grid>

        <Grid item xs={12}>
          About us
        </Grid>

        <Grid item xs={12}>
          Services
        </Grid>

        <Grid item xs={12}>
          Patients
        </Grid>

        <Grid item xs={12}>
          Visitors
        </Grid>

        <Grid item xs={12}>
          <Link to={process.env.PUBLIC_URL + '/CandA'}>
            Careers &amp; Academics
          </Link>
        </Grid>

        <Grid item xs={12}>
          Contact Us
        </Grid>

      </Grid>

    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<img src={menu} className="Menu-logo" alt="menu" />}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
