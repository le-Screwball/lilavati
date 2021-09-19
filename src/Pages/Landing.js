import React from 'react';
import Container from '@material-ui/core/Container';
import HotlineCard from '../Components/HotlineCard';
import CovidResCard from '../Components/CovidResCard';
import ContinueCard from '../Components/ContinueCard';
// import DatePickers from '../Components/DateTimePicker';

export default function Landing() {
  return (
    <React.Fragment>
      <div className="flexbox-container">

        <div className="flexbox-item Hotlines-Card">
          <HotlineCard />
        </div>

        <div className="flexbox-item CovidRes-Card">
          <CovidResCard />
        </div>

        <div className="flexbox-item Continue-Card">
          <ContinueCard />
        </div>

      </div>
    </React.Fragment>
  );
}