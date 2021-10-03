import React from 'react';
import HotlineCard from '../Components/HotlineCard';
import CovidResCard from '../Components/CovidResCard';
import ContinueCard from '../Components/ContinueCard';
import Grid from '@material-ui/core/Grid';


export default function Landing() {

  return (
    <React.Fragment>
      <div className="flexbox-container">
        <Grid container spacing={3} justifyContent="center" className="Landing-Grid">

          <Grid item xs={10}>

            <div className="flexbox-item Hotlines-Card">
              <HotlineCard />
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item CovidRes-Card">
              <CovidResCard />
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Continue-Card">
              <ContinueCard />
            </div>

          </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
}