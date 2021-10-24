import React from 'react';
import HotlineCard from '../Components/HotlineCard';
import CovidResCard from '../Components/CovidResCard';
import ContinueCard from '../Components/ContinueCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10% auto',
  },

  LandingGrid: {
    minWidth: '80vw',

  },

  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Container className={classes.root}>
        <Grid container spacing={3} direction='column' alignItems='center' className={classes.LandingGrid}>

          <Grid item className={classes.gridItem} xs={12}>


            <HotlineCard />


          </Grid>

          <Grid item className={classes.gridItem} xs={12}>


            <CovidResCard />


          </Grid>

          <Grid item className={classes.gridItem} xs={12}>


            <ContinueCard />


          </Grid>

        </Grid>

      </Container>

    </React.Fragment>
  );
}