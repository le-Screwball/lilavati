import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Swastha from '../Assets/Swastha.jpg';


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

export default function SocInitCardTwo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={Swastha}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h5">
          Swastha Bachpan
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Children are the future of the nation. They are the next scientists, doctors, engineers, pilots and hence it is essential to ensure they are healthy in their crucial growing years.
        </Typography>
      </CardContent>
    </Card>
  );
}
