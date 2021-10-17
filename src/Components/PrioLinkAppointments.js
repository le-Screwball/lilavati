import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Calender from '../Assets/Calender.svg';
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

export default function PrioLinkAppointments() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="text">
        <Box className={classes.buttonContent}>
          <Box>

            <img src={Calender} className="Calender-logo Priority-Logos" alt="calender" />
          </Box>
          <Box>
            Appointments
          </Box>
        </Box>
      </Button>
    </div >
  );
}
