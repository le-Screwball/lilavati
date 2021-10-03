import React from 'react';
import SearchBar from '../Components/SearchBar';
import DeptBar from '../Components/DeptBar';
import ViewAllButton from '../Components/ViewAllButton';
import Grid from '@material-ui/core/Grid';

export default function Careers() {
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

            <div className="flexbox-item Page-Desc">
              <p>Below are the various openings we currently have.</p>
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Page-Desc">
              <p>Feel free to browse through them.</p>
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Search-Bar">
              <SearchBar />
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item Dept-Filter">
              <DeptBar />
            </div>

          </Grid>

          <Grid item xs={10}>

            <div className="flexbox-item View-All-Button">
              <ViewAllButton />
            </div>

          </Grid>

        </Grid>

      </div>

    </React.Fragment>
  );
}