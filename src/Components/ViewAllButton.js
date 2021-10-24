import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import RightChevron from '../Assets/RightChevron.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  Button: {
    minWidth: '80vw',
    padding: '5% 5% 5% 10%',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function ViewAllButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.Button}>

        <Typography variant="body2" component="p">View All</Typography>

        <img src={RightChevron} className="Chevron CandA-Chevron" alt="rightchevron" />

      </Button>
    </div>
  );
}
