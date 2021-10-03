import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Finances from '../Assets/Finances.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PrioLinkFinances() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        <img src={Finances} className="Finances-logo Priority-Logos" alt="finances" />
        Finances

      </Button>
    </div>
  );
}
