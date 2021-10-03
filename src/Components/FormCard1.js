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

export default function FormCardOne() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container">

                    <Grid container spacing={3} justifyContent="center">

                        <Grid item xs={10}>

                            <div className="flexbox-item Position-Info-Text">

                                <Typography variant="body1" gutterBottom>
                                    You are applying to work in
                                    <br />
                                    The <Typography variant="h4" >Medical</Typography>Department
                                </Typography>

                            </div>

                        </Grid>

                        <Grid item xs={10}>

                            <div className="flexbox-item Position-Info-Text">

                                <Typography variant="body1" gutterBottom>
                                    As the
                                    <br />
                                    <Typography variant="h5" >Junior Consultant</Typography>
                                    <br />
                                    Of <Typography variant="h5" >Casualty &amp; Emergency Medecine</Typography>
                                </Typography>

                            </div>

                        </Grid>

                    </Grid>


                </div>

            </CardContent>
        </Card>
    );
}
