import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function FormCardFour() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container">

                    <Grid container spacing={3} justifyContent="center">

                        <Grid item xs={10}>

                            <Typography variant="body1" gutterBottom>
                                I declare that the information given is true and correct and I am fully aware that it will form the basis for shortlisting for interview.
                            </Typography>

                        </Grid>

                        <Grid item xs={10}>

                            <Typography variant="body1" gutterBottom>
                                And anytime if it is found incorrect I will qualify for "disqualification".
                            </Typography>

                        </Grid>

                    </Grid>

                </div>

            </CardContent>
        </Card>
    );
}
