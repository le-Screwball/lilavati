import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Person2 from '../Assets/Person2.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TestimonialCardThree() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Tanisha Mehra"
      />
      <CardMedia
        className={classes.media}
        image={Person2}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

          Clean, pleasant atmosphere, patient friendly staff. I celebrated Diwali Festival here. I feel like home. The best hospital in Mumbai !!!

        </Typography>
      </CardContent>
    </Card>
  );
}
