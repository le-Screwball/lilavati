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
    minWidth: '80vw',
    padding: '5% 5% 5% 5%',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    textTransform: 'none',
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
