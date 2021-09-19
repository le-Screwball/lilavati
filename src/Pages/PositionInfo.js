import React from 'react';
import Container from '@material-ui/core/Container';
import PositionInfoCard from '../Components/PositionInfoCard';
// import DatePickers from '../Components/DateTimePicker';

export default function PositionInfo() {
  return (
    <React.Fragment>
      <div className="flexbox-container Careers-Page">

        <div className="flexbox-item Page-Header">
          <h2>Careers at Lilavati</h2>
        </div>

        <div className="flexbox-item Pos-Info-Card">
          <PositionInfoCard />
        </div>

      </div>
    </React.Fragment>
  );
}