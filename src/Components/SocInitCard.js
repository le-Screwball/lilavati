import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function SocInitCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          S E W A
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          SEWA the social service department of Lilavati hospital serves the health needs of all the needy people irrespective of their class, caste, religion or social background. This department seeks to bridge the gap between the needy patients and the fast evolving medical technology.
        </Typography>
      </CardContent>
    </Card>
  );
}
