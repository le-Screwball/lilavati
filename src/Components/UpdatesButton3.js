import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  button: {

    minWidth: '90%',
    padding: '7%',
    borderRadius: '50px',

  },

}));

export default function UpdatesButtonThree() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>

        Lilavati Hospital has started administering COVISHIELD vaccination

      </Button>
    </div>
  );
}
