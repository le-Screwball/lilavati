import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Ambulance from '../Assets/Ambulance.svg';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  buttonContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function PrioLinkAmbulance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="text">
        <Box className={classes.buttonContent}>
          <Box>
            <img src={Ambulance} className="Ambulance-logo Priority-Logos" alt="ambulance" />
          </Box>
          <Box>
            Ambulance
          </Box>
        </Box>
      </Button>
    </div>
  );
}
