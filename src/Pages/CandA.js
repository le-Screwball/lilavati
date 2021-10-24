import React from 'react';
import CandAButton from '../Components/CandAButton';
import { Link, Router } from "react-router-dom";
import CMEButton from '../Components/CMEButton';
import DNBButton from '../Components/DNBButton';
import LHMTButton from '../Components/LHMTButton';
import NursingButton from '../Components/NursingButton';
import ResearchButton from '../Components/ResearchButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10% 0%',
  },


  masterGrid: {
    display: 'grid',
    justifyContent: 'center',
    margin: '5% 0% 0% 0%',
  },

  gridItems: {
    display: 'grid',
    justifyContent: 'center',
  },

});

export default function CandA() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Container className={classes.root}>

        <Box className={classes.pageHeader}>

          <Typography variant='h4'>Career &amp; Academics</Typography>

        </Box>

        <Grid container spacing={3} className={classes.masterGrid}>

          <Grid item xs={12} className={classes.gridItems}>

            <Box >

              <Link to={process.env.PUBLIC_URL + '/careers'}><CandAButton /></Link>

            </Box>

          </Grid>

          <Grid item xs={12} className={classes.gridItems}>

            <Box >

              <CMEButton />

            </Box>

          </Grid>

          <Grid item xs={12} className={classes.gridItems}>

            <Box >

              <DNBButton />

            </Box>

          </Grid>

          <Grid item xs={12} className={classes.gridItems}>

            <Box >

              <LHMTButton />

            </Box>

          </Grid>

          <Grid item xs={12} className={classes.gridItems}>

            <Box >

              <NursingButton />

            </Box>

          </Grid>

          <Grid item xs={12} className={classes.gridItems}>

            <Box >

              <ResearchButton />

            </Box>

          </Grid>

        </Grid>

      </Container>

    </React.Fragment>
  );
}