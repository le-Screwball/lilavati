import React from 'react';
import Tick from '../Assets/TickMark.svg';
import { Typography } from '@material-ui/core';
import HomeButton from '../Components/HomeButton';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

export default function Success() {
  return (
    <React.Fragment>
      <div className="flexbox-container">

        <Grid container spacing={3} justifyContent="center">

          <Grid item xs={10}>

            <div className="flexbox-item Tick-Mark">

              <img src={Tick} className="Tick-Mark" alt="tick" />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">

              <Typography variant="h2" component="h2">Thank You</Typography>
              <Typography variant="h4" component="h4">For Choosing Lilavati</Typography>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Body">

              <Typography variant="body1" component="body1">
                Your application has been filed &amp; we will contact you shortly
              </Typography>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Home-Button">

              <Link to={process.env.PUBLIC_URL + '/home'}>
                <HomeButton />
              </Link>

            </div>

          </Grid>


        </Grid>

      </div>
    </React.Fragment>
  );
}