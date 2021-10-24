import React from 'react';
import NextButton from '../Components/NextSectionButton';
import { Typography } from '@material-ui/core';
import { Link, Router } from "react-router-dom";
import FormCardOne from '../Components/FormCard1';
import FormCardTwo from '../Components/FormCard2';
import FormCardThree from '../Components/FormCard3';
import FormCardFour from '../Components/FormCard4';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5% 5%',
  },

  masterGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    margin: '10% auto',
  },

  form: {

  },

  button: {
    margin: '10% auto auto auto',
  },

});

export default function ApplicationForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>

        <Grid className={classes.masterGrid} container spacing={3} justifyContent="center">

          <Grid className={classes.gridItem, classes.header} item xs={12}>


            <Typography variant="h4">Step 1</Typography>



          </Grid>

          <Grid className={classes.gridItem, classes.form} item xs={12}>



            <FormCardOne />



          </Grid>

          <Grid className={classes.gridItem, classes.button} item xs={12}>



            <NextButton />


          </Grid>

          <Grid className={classes.gridItem, classes.header} item xs={12}>



            <Typography variant="h4">Step 2</Typography>



          </Grid>

          <Grid className={classes.gridItem, classes.form} item xs={12}>



            <FormCardTwo />



          </Grid>

          <Grid className={classes.gridItem, classes.button} item xs={12}>



            <NextButton />



          </Grid>

          <Grid className={classes.gridItem, classes.header} item xs={12}>



            <Typography variant="h4">Step 3</Typography>



          </Grid>

          <Grid className={classes.gridItem, classes.form} item xs={12}>



            <FormCardThree />



          </Grid>

          <Grid className={classes.gridItem, classes.button} item xs={12}>



            <NextButton />



          </Grid>

          <Grid className={classes.gridItem, classes.header} item xs={12}>



            <Typography variant="h4">Step 4</Typography>



          </Grid>

          <Grid className={classes.gridItem, classes.form} item xs={12}>



            <FormCardFour />



          </Grid>

          <Grid className={classes.gridItem, classes.button} item xs={12}>



            <Link to={process.env.PUBLIC_URL + '/success'}>

              <NextButton />

            </Link>



          </Grid>

        </Grid>

      </Container>
    </React.Fragment>
  );
}