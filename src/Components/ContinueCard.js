import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, Router } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: "80vw",
    display: "flex",
    justifyContent: "right",
    borderRadius: "50px",
  },

  cardContent: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    direction: "column",
    margin: "2% 5% 2% 5%",
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
        <CardContent className={classes.cardContent}>
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
