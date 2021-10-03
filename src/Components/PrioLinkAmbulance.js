import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Ambulance from '../Assets/Ambulance.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PrioLinkAmbulance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        <img src={Ambulance} className="Ambulance-logo Priority-Logos" alt="ambulance" />
        Ambulance

      </Button>
    </div>
  );
}
