import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '90%',
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

export default function CovidResCard() {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>

        <Typography variant="h5" component="h2">
          Covid 19 Resources
        </Typography>

      </CardContent>
    </Card>

  );
}
