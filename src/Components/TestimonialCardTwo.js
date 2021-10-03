import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Person3 from '../Assets/Person3.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TestimonialCardTwo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Rajiv Singh"
      />
      <CardMedia
        className={classes.media}
        image={Person3}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          My dear Shri Narendra Trivediji, This is to put on record my sincere appreciation for the very efficient care rendered to me by your staff and doctors during my recent illness at the Lilavati Hospital.
        </Typography>
      </CardContent>
    </Card>
  );
}
