import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Person4 from '../Assets/Person4.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TestimonialCardFour() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Advaith Reddy"
      />
      <CardMedia
        className={classes.media}
        image={Person4}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          It was a pleasure and an educative experience for us to visit the Lilavati Hospital. I am sure, Lilavati Hospital can benchmark internationally with the best Hospitals in the world, which is something that as an Indian, one feels proud of.
        </Typography>
      </CardContent>
    </Card>
  );
}
