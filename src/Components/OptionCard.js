import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PrioLinkAmbulance from './PrioLinkAmbulance';
import PrioLinkAppointments from './PrioLinkAppointments';
import PrioLinkHealthCare from './PrioLinkHealthCare';
import PrioLinkFinances from './PrioLinkFinances';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OptionCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <a href=''>
      <Card className={classes.root}>
        <CardContent>

          <div className="flexbox-container">

            <div className="flexbox-item button">

              <PrioLinkAmbulance />

            </div>

            <div className="flexbox-item button">

              <PrioLinkAppointments />

            </div>

            <div className="flexbox-item button">

              <PrioLinkHealthCare />

            </div>

            <div className="flexbox-item button">

              <PrioLinkFinances />

            </div>

          </div>

        </CardContent>
      </Card>
    </a>
  );
}
