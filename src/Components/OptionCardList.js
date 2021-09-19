import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Ambulance from '../Assets/Ambulance.svg';
import Calender from '../Assets/Calender.svg';
import HealthCare from '../Assets/HealthCare.svg';
import Finances from '../Assets/Finances.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function OptionCardList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem button>
          <img src={Ambulance} className="Ambulance-logo Priority-Logos" alt="ambulance" />
          <ListItemText primary="Ambulance" />
        </ListItem>

        <ListItem button>
          <img src={Calender} className="Calender-logo Priority-Logos" alt="calender" />
          <ListItemText primary="Appointments" />
        </ListItem>

        <ListItem button>
          <img src={HealthCare} className="HealthCare-logo Priority-Logos" alt="healthcare" />
          <ListItemText primary="Ambulance" />
        </ListItem>

        <ListItem button>
          <img src={Finances} className="Finances-logo Priority-Logos" alt="finances" />
          <ListItemText primary="Finances" />
        </ListItem>

      </List>

    </div>
  );
}
