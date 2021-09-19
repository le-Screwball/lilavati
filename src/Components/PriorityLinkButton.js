import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Calender from '../Assets/Calender.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PriorityLinkButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        <img src={Calender} className="Calender-logo Priority-Logos" alt="calender" />
        Ambulance

      </Button>
    </div>
  );
}
