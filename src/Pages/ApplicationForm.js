import React from 'react';
import Container from '@material-ui/core/Container';
import FormCard from '../Components/FormCard';
import NextButton from '../Components/NextSectionButton';
import { Typography } from '@material-ui/core';
// import DatePickers from '../Components/DateTimePicker';
import { Link, Router } from "react-router-dom";

export default function ApplicationForm() {
  return (
    <React.Fragment>
      <div className="flexbox-container">

        <div className="flexbox-item Section-Header">

          <Typography variant="h2" component="h2">Step 1</Typography>

        </div>

        <div className="flexbox-item Form-Card">

          <FormCard />

        </div>

        <div className="flexbox-item Next Button">

          <NextButton />

        </div>

        <div className="flexbox-item Section-Header">

          <Typography variant="h2" component="h2">Step 2</Typography>

        </div>

        <div className="flexbox-item Form-Card">

          <FormCard />

        </div>

        <div className="flexbox-item Next Button">

          <NextButton />

        </div>

        <div className="flexbox-item Section-Header">

          <Typography variant="h2" component="h2">Step 3</Typography>

        </div>

        <div className="flexbox-item Form-Card">

          <FormCard />

        </div>

        <div className="flexbox-item Next Button">

          <NextButton />

        </div>

        <div className="flexbox-item Section-Header">

          <Typography variant="h2" component="h2">Step 4</Typography>

        </div>

        <div className="flexbox-item Form-Card">

          <FormCard />

        </div>

        <div className="flexbox-item Next Button">

          <Link to={process.env.PUBLIC_URL + '/success'}>

            <NextButton />

          </Link>

        </div>

      </div>
    </React.Fragment>
  );
}