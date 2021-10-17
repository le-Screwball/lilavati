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

export default function TestimonialCardThree() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Tanisha Mehra"
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        title="Contemplative Reptile"
      >
        <img src={Person2} />
      </CardMedia>
      <CardContent className={classes.Content}>
        <Typography align="center" variant="body2" color="textSecondary" component="p">

          Clean, pleasant atmosphere, patient friendly staff. I celebrated Diwali Festival here. I feel like home. The best hospital in Mumbai !!!

        </Typography>
      </CardContent>
    </Card>
  );
}
