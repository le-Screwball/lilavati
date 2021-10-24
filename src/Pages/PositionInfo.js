import React from 'react';
import PositionInfoCard from '../Components/PositionInfoCard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    width: '80vw',
    borderRadius: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10% auto',
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

  Header: {
    margin: '5% 0%',
  },

});

export default function PositionInfo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>

        <Grid className={classes.masterGrid} container spacing={3} justifyContent="center">

          <Grid className={classes.gridItem, classes.Header} item xs={12}>


            <Typography variant='h4'>Careers at Lilavati </Typography>


          </Grid>

          <Grid className={classes.gridItem} item xs={12}>


            <PositionInfoCard />


          </Grid>

        </Grid>

      </Container>
    </React.Fragment >
  );
}