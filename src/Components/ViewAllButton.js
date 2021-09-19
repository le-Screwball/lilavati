import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Ambulance from '../Assets/Ambulance.svg';
import Calender from '../Assets/Calender.svg';
import HealthCare from '../Assets/HealthCare.svg';
import Finances from '../Assets/Finances.svg';
import { Typography } from '@material-ui/core';
import RightChevron from '../Assets/RightChevron.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ViewAllButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        {/* <div className="flexbox-container CandA-Button"> */}

        {/* <div className="flexbox-item CandA-Button-Item"> */}
        <Typography variant="body2" component="p">View All</Typography>
        {/* </div> */}

        {/* <div className="flexbox-item CandA-Button-Item"> */}
        <img src={RightChevron} className="Chevron CandA-Chevron" alt="rightchevron" />
        {/* </div> */}

        {/* </div> */}
      </Button>
    </div>
  );
}
