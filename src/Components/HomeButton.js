import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function HomeButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained">

                <Typography variant="body2" component="p">Home</Typography>


            </Button>
        </div>
    );
}
