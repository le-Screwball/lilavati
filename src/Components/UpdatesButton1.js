import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function UpdatesButtonOne() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">

        Lilavati Hospital introduces SAR-CoV-2 Antibody to Spike Protein (Quantitative) Test at Rs.1200/-

      </Button>
    </div>
  );
}
