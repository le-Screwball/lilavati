import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormFields from './FormTextField';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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
});

export default function FormCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container">

                    <div className="flexbox-item Position-Info-Text">

                        <FormFields />


                    </div>

                    <div className="flexbox-item Position-Info-Text">

                        <FormFields />


                    </div>

                    <div className="flexbox-item Position-Info-Text">

                        <FormFields />


                    </div>

                    <div className="flexbox-item Position-Info-Text">

                        <FormFields />


                    </div>

                    <div className="flexbox-item Position-Info-Text">

                        <FormFields />

                    </div>

                </div>

            </CardContent>
        </Card>
    );
}
