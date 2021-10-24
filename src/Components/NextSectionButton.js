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

    Button: {
        minWidth: '80vw',
        padding: '5% 5% 5% 5%',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
    },
}));

export default function NextButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button className={classes.Button} variant="contained">

                <Typography variant="body2">Next</Typography>

            </Button>
        </div>
    );
}
