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

export default function TestimonialCardTwo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Rajiv Singh"
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        title="Contemplative Reptile"
      >
        <img src={Person3} />
      </CardMedia>
      <CardContent className={classes.Content}>
        <Typography align="center" variant="body2" color="textSecondary" component="p">
          My dear Shri Narendra Trivediji, This is to put on record my sincere appreciation for the very efficient care rendered to me by your staff and doctors during my recent illness at the Lilavati Hospital.
        </Typography>
      </CardContent>
    </Card>
  );
}
