import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SearchField from './SearchField.js'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    minWidth: '80vw',
    borderRadius: '50px',
    padding: '5%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '5% 5%',
  },
});

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Search All
        </Typography>

      </CardContent>
      <CardActions className={classes.cardActions}>
        <SearchField />
        <SearchIcon />
      </CardActions>
    </Card>
  );
}
