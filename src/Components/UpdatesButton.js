import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Ambulance from '../Assets/Ambulance.svg';
import Calender from '../Assets/Calender.svg';
import HealthCare from '../Assets/HealthCare.svg';
import Finances from '../Assets/Finances.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function UpdatesButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        Update Text

      </Button>
    </div>
  );
}
