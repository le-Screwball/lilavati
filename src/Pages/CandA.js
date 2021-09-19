import React from 'react';
import Container from '@material-ui/core/Container';
import CandAButton from '../Components/CandAButton';
// import DatePickers from '../Components/DateTimePicker';
import { Link, Router } from "react-router-dom";

export default function CandA() {
  return (
    <React.Fragment>

      <div className="flexbox-container">

        <div className="flexbox-item Page-Header">

          <h2>Career &amp; Academics</h2>

        </div>

        <div className="flexbox-item CandA-Button">

          <Link to={process.env.PUBLIC_URL + '/careers'}><CandAButton /></Link>

        </div>

        <div className="flexbox-item CandA-Button">

          <CandAButton />

        </div>

        <div className="flexbox-item CandA-Button">

          <CandAButton />

        </div>

        <div className="flexbox-item CandA-Button">

          <CandAButton />

        </div>

        <div className="flexbox-item CandA-Button">

          <CandAButton />

        </div>

        <div className="flexbox-item CandA-Button">

          <CandAButton />

        </div>

      </div>

    </React.Fragment>
  );
}