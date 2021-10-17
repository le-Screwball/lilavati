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
    maxWidth: '90%',
    padding: '5% 5%',
    borderRadius: '50px',
  },

  title: {
    margin: '5% 5%',
  },

  media: {
    height: 125,
    display: 'flex',
    justifyContent: 'center',
    padding: '5% 5%',
  },

  Content: {
    margin: '5% 5%',
    alignContent: 'center',
  },
});

export default function TestimonialCardFour() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Advaith Reddy"
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        title="Contemplative Reptile"
      >
        <img src={Person4} />
      </CardMedia>
      <CardContent className={classes.Content}>
        <Typography align="center" variant="body2" color="textSecondary" component="p">
          It was a pleasure and an educative experience for us to visit the Lilavati Hospital. I am sure, Lilavati Hospital can benchmark internationally with the best Hospitals in the world, which is something that as an Indian, one feels proud of.
        </Typography>
      </CardContent>
    </Card>
  );
}
