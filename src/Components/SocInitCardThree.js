import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SaveGirl from '../Assets/SaveGirl.jpg';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SocInitCardThree() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={SaveGirl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          Save &amp; Empower Girl Child
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Doctors of Lilavati hospital feel that they need to play in protecting Girl Child from deliberate harm to ensuring her well-being, from conception to adulthood. They may as concept formers and advice givers play a major role in correcting the distorted views that parts of society have formed, and are passing on to their future generations.
        </Typography>
      </CardContent>
    </Card>
  );
}
