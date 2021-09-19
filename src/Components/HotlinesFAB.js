import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Hotlines from '../Assets/HotlinesIcon.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function HotlinesFAB() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Fab color="secondary" aria-label="edit">
                <img src={Hotlines} className="Hotlines-Icon" alt="Hotlines" />
            </Fab>

        </div>
    );
}
