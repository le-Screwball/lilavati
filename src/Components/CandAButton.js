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
}));

export default function CandAButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        <Typography variant="body2" component="p">Careers</Typography>

        <img src={RightChevron} className="Chevron CandA-Chevron" alt="rightchevron" />

      </Button>
    </div>
  );
}
