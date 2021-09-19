import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchField from './SearchField';
import DeptFilter from './DeptFilter';
import RightChevron from '../Assets/RightChevron.svg';
import { Link, Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function DeptBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="realtive" color="primary" className={classes.appBar}>
        <Typography className={classes.text} variant="h6" gutterBottom>
          Filter By Department
        </Typography>
        <Toolbar>
          <form className={classes.root} noValidate autoComplete="off">
            <DeptFilter />
          </form>
          <div className={classes.grow} />
          <Link to={process.env.PUBLIC_URL + '/positioninfo'}>
            <IconButton color="inherit">
              <img src={RightChevron} className="Chevron CandA-Chevron" alt="rightchevron" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}
