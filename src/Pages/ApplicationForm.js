import React from 'react';
import NextButton from '../Components/NextSectionButton';
import { Typography } from '@material-ui/core';
import { Link, Router } from "react-router-dom";
import FormCardOne from '../Components/FormCard1';
import FormCardTwo from '../Components/FormCard2';
import FormCardThree from '../Components/FormCard3';
import FormCardFour from '../Components/FormCard4';
import Grid from '@material-ui/core/Grid';

export default function ApplicationForm() {
  return (
    <React.Fragment>
      <div className="flexbox-container">

        <Grid container spacing={3} justifyContent="center">

          <Grid item xs={10}>

            <div className="flexbox-item Section-Header">

              <Typography variant="h2" component="h2">Step 1</Typography>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Form-Card">

              <FormCardOne />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Next Button">

              <NextButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Section-Header">

              <Typography variant="h2" component="h2">Step 2</Typography>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Form-Card">

              <FormCardTwo />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Next Button">

              <NextButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Section-Header">

              <Typography variant="h2" component="h2">Step 3</Typography>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Form-Card">

              <FormCardThree />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Next Button">

              <NextButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Section-Header">

              <Typography variant="h2" component="h2">Step 4</Typography>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Form-Card">

              <FormCardFour />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Next Button">

              <Link to={process.env.PUBLIC_URL + '/success'}>

                <NextButton />

              </Link>

            </div>

          </Grid>

        </Grid>

      </div>
    </React.Fragment>
  );
}