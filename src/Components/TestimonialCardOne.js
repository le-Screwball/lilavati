import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Person1 from '../Assets/Person1.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: '80vw',
    padding: '5% 5%',
    borderRadius: '50px',
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
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

export default function TestimonialCardOne() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Samyukta Joshi"
        className={classes.title}
      />

      <CardMedia
        className={classes.media}
        title="Contemplative Reptile"
      >
        <img src={Person1} />
      </CardMedia>

      <CardContent className={classes.Content}>
        <Typography align="center" variant="body2" color="textSecondary" component="p">
          I would like to thank the Lilavati Hospital for the excellent service provided during the medical check up I have had. I want to thank all concerned. I pray that this Hospital will continue to provide medical benefit to the poor.
        </Typography>
      </CardContent>
    </Card>
  );
}
