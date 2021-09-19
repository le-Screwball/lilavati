import React from 'react';
import Container from '@material-ui/core/Container';
import HotlineCard from '../Components/HotlineCard';
import CovidResCard from '../Components/CovidResCard';
import ContinueCard from '../Components/ContinueCard';
// import DatePickers from '../Components/DateTimePicker';

export default function Landing() {
  return (
    <React.Fragment>
      <Container>
        <HotlineCard />
        <CovidResCard />
        <ContinueCard />
      </Container>
    </React.Fragment>
  );
}