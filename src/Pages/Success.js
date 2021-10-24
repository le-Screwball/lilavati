import React from 'react';
import Tick from '../Assets/TickMark.svg';
import { Typography } from '@material-ui/core';
import HomeButton from '../Components/HomeButton';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15% 10%',
  },

  masterGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  button: {
    margin: '10% auto',
  },


});

export default function Success() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root}>

        <Grid container className={classes.masterGrid} spacing={3} justifyContent="center">

          <Grid item className={classes.gridItem} xs={12}>



            <img src={Tick} className="Tick-Mark" alt="tick" />



          </Grid>

          <Grid item className={classes.gridItem} xs={12}>



            <Typography align='center' variant="h2" component="h2">Thank You</Typography>
            <Typography align='center' variant="h4" component="h4">For Choosing Lilavati</Typography>



          </Grid>

          <Grid item className={classes.gridItem} xs={12}>


            <Typography variant="body1" align='center' >
              Your application has been filed &amp; we will contact you shortly.
            </Typography>



          </Grid>

          <Grid item className={classes.gridItem} xs={12}>


            <Link to={process.env.PUBLIC_URL + '/home'} className={classes.button, classes.gridItem}>
              <HomeButton />
            </Link>



          </Grid>


        </Grid>

      </Container>
    </React.Fragment>
  );
}