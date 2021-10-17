import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import phone from './../Assets/phone.png';
import { BottomNavigation, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    // display: "flex",
    justifyContent: "center",
    borderRadius: "50px",
  },

  cardContent: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    margin: "2% 5% 2% 5%",
  },

  callButtons: {
    // display: "block",
  },
});

export default function HotlineCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Box>
          <Typography variant="h5" component="h2">
            Emergency Helplines
          </Typography>
        </Box>
        <Box>
          <Button size="small" className={classes.callButtons}><img src={phone} className={classes.phoneLogo} alt="phone" />022-26751000</Button>
        </Box>
        <Box>
          <Button size="small" className={classes.callButtons}><img src={phone} className={classes.phoneLogo} alt="phone" />022-26568000</Button>
        </Box>

      </CardContent>
    </Card>
  );
}
