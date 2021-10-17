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
    background: "#F1FFFB",
    height: "100%",
  },

  LandingGrid: {
    margin: '10% 2% 10% 2%',
    maxWidth: '100vw',
    justifyContent: 'space-around',
  },
});

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Container className={classes.root} > */}

      <Grid container spacing={3} justifyContent="center" className={classes.LandingGrid}>

        <Grid item xs={12}>

          <Box className="flexbox-item Hotlines-Card">
            <HotlineCard />
          </Box>

        </Grid>

        <Grid item xs={12}>

          <Box className="flexbox-item CovidRes-Card">
            <CovidResCard />
          </Box>

        </Grid>

        <Grid item xs={12}>

          <Box className="flexbox-item Continue-Card">
            <ContinueCard />
          </Box>

        </Grid>

      </Grid>

      {/* </Container> */}
    </React.Fragment>
  );
}