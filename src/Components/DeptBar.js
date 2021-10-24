import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeptFilter from './DeptFilter';
import RightChevron from '../Assets/RightChevron.svg';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: '80vw',
    borderRadius: '50px',
    padding: '5%',
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default function DeptBar() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Filter By Department
        </Typography>

      </CardContent>
      <CardActions className={classes.cardActions}>
        <DeptFilter />
        <Link to={process.env.PUBLIC_URL + '/positioninfo'}>
          <img src={RightChevron} className="Chevron CandA-Chevron" alt="rightchevron" />
        </Link>
      </CardActions>
    </Card>
  );
}
