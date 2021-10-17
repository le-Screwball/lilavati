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

    minWwidth: '90%',
    padding: '7%',
    borderRadius: '50px',

  },

}));

export default function UpdatesButtonSix() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>

        COVID - 19 Antibody Testing

      </Button>
    </div>
  );
}
