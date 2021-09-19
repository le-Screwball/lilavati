import React from 'react';
import Tick from '../Assets/TickMark.svg';
import { Typography } from '@material-ui/core';
import HomeButton from '../Components/HomeButton';
import { Link, Router } from "react-router-dom";

export default function Success() {
  return (
    <React.Fragment>
      <div className="flexbox-container">

        <div className="flexbox-item Tick-Mark">

          <img src={Tick} className="Tick-Mark" alt="tick" />

        </div>

        <div className="flexbox-item Page-Header">

          <Typography variant="h2" component="h2">Thank You</Typography>
          <Typography variant="h4" component="h4">For Choosing Lilavati</Typography>

        </div>

        <div className="flexbox-item Body">

          <Typography variant="body1" component="body1">
            Your application has been filed &amp; we will contact you shortly
          </Typography>

        </div>

        <div className="flexbox-item Home-Button">

          <Link to={process.env.PUBLIC_URL + '/home'}>
            <HomeButton />
          </Link>

        </div>

      </div>
    </React.Fragment>
  );
}