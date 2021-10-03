import React from 'react';
import CandAButton from '../Components/CandAButton';
import { Link, Router } from "react-router-dom";
import CMEButton from '../Components/CMEButton';
import DNBButton from '../Components/DNBButton';
import LHMTButton from '../Components/LHMTButton';
import NursingButton from '../Components/NursingButton';
import ResearchButton from '../Components/ResearchButton';
import Grid from '@material-ui/core/Grid';

export default function CandA() {
  return (
    <React.Fragment>

      <div className="flexbox-container">

        <Grid container spacing={3} justifyContent="center">

          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">

              <h2>Career &amp; Academics</h2>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CandA-Button">

              <Link to={process.env.PUBLIC_URL + '/careers'}><CandAButton /></Link>

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CandA-Button">

              <CMEButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CandA-Button">

              <DNBButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CandA-Button">

              <LHMTButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CandA-Button">

              <NursingButton />

            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CandA-Button">

              <ResearchButton />

            </div>

          </Grid>

        </Grid>

      </div>

    </React.Fragment>
  );
}