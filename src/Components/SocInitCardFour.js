import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SocWel from '../Assets/SocWel.jpg';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    borderRadius: '50px',
  },

  media: {
    height: 140,
  },

  content: {
    margin: '5%',
  },
});

export default function SocInitCardFour() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={SocWel}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h5">
          Social Welfare Programs
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          10th free Orthopaedic camp was organized in November, 2009.This was the 4th consecutive camp organised at Lilavati Hospital.
        </Typography>
      </CardContent>
    </Card>
  );
}
