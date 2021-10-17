import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Finances from '../Assets/Finances.svg';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  buttonContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function PrioLinkFinances() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button variant="text">

        <Box className={classes.buttonContent}>

          <Box>
            <img src={Finances} className="Finances-logo Priority-Logos" alt="finances" />
          </Box>

          <Box>
            Finances
          </Box>

        </Box>

      </Button>
    </div>
  );
}
