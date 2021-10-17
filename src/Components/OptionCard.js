import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PrioLinkAmbulance from './PrioLinkAmbulance';
import PrioLinkAppointments from './PrioLinkAppointments';
import PrioLinkHealthCare from './PrioLinkHealthCare';
import PrioLinkFinances from './PrioLinkFinances';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    borderRadius: '50px',
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function OptionCard() {
  const classes = useStyles();

  return (
    <a href=''>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>

          <Box className={classes.cardContent}>

            <Box className={classes.buttonBox}>

              <PrioLinkAmbulance />

            </Box>

            <Box className={classes.buttonBox}>

              <PrioLinkAppointments />

            </Box>

            <Box className={classes.buttonBox}>

              <PrioLinkHealthCare />

            </Box>

            <Box className={classes.buttonBox}>

              <PrioLinkFinances />

            </Box>

          </Box>

        </CardContent>
      </Card>
    </a>
  );
}
