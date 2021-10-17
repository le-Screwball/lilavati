import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HealthCare from '../Assets/HealthCare.svg';
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

export default function PrioLinkHealthCare() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button variant="text">

        <Box className={classes.buttonContent}>

          <Box>
            <img src={HealthCare} className="HealthCare-logo Priority-Logos" alt="healthcare" />
          </Box>
          <Box>
            Health Care
          </Box>

        </Box>

      </Button>
    </div>
  );
}
