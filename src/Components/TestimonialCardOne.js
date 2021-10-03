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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TestimonialCardOne() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Samyukta Joshi"
      />
      <CardMedia
        className={classes.media}
        image={Person1}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I would like to thank the Lilavati Hospital for the excellent service provided during the medical check up I have had. I want to thank all concerned. I pray that this Hospital will continue to provide medical benefit to the poor.
        </Typography>
      </CardContent>
    </Card>
  );
}
