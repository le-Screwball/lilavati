import React from 'react';
import SearchBar from '../Components/SearchBar';
import DeptBar from '../Components/DeptBar';
import ViewAllButton from '../Components/ViewAllButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10% 0%',
  },

  masterGrid: {
    minWidth: '80vw',
  },

  gridItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

});

export default function Careers() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>

        <Grid className={classes.masterGrid} container spacing={3} justifyContent="center">

          <Grid className={classes.gridItems} item xs={12}>


            <Typography variant='h4'>Careers at Lilavati</Typography>


          </Grid>

          <Grid className={classes.gridItems} item xs={12}>


            <Typography variant='body1' align='center'>Below are the various openings we currently have.</Typography>


          </Grid>

          <Grid className={classes.gridItems} item xs={12}>


            <Typography variant='body1' align='center'>Feel free to browse through them.</Typography>


          </Grid>

          <Grid className={classes.gridItems} item xs={12}>


            <SearchBar />


          </Grid>

          <Grid className={classes.gridItems} item xs={12}>

            <DeptBar />


          </Grid>

          <Grid className={classes.gridItems} item xs={12}>


            <ViewAllButton />


          </Grid>

        </Grid>

      </Container>

    </React.Fragment>
  );
}