import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, Router } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

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

export default function ContinueCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <a href='../Pages/Home.js'>
      <Card className={classes.root}>
        <CardContent>
          <Link to={process.env.PUBLIC_URL + '/home'}>

            <Typography variant="h5" component="h2">
              Continue To Website
            </Typography>

          </Link>


        </CardContent>
      </Card>
    </a>
  );
}
