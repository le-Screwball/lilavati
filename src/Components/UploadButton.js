import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UploadIcon from '../Assets/UploadButton.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function UploadButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained"><img src={UploadIcon} className="Upload-Button" alt="Upload" /></Button>
        </div>
    );
}
