import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HealthCare from '../Assets/HealthCare.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PrioLinkHealthCare() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        <img src={HealthCare} className="HealthCare-logo Priority-Logos" alt="healthcare" />
        Health Care

      </Button>
    </div>
  );
}
