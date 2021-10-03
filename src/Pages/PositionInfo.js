import React from 'react';
import PositionInfoCard from '../Components/PositionInfoCard';
import Grid from '@material-ui/core/Grid';

export default function PositionInfo() {
  return (
    <React.Fragment>
      <div className="flexbox-container Careers-Page">

        <Grid container spacing={3} justifyContent="center">

          <Grid item xs={10}>

            <div className="flexbox-item Page-Header">
              <h2>Careers at Lilavati</h2>
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Pos-Info-Card">
              <PositionInfoCard />
            </div>

          </Grid>

        </Grid>

      </div>
    </React.Fragment>
  );
}