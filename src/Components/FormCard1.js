import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        minWidth: '80vw',
        borderRadius: '50px',

    },

    Content: {
        margin: '5% 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    masterGrid: {
        display: 'grid',
        alignItems: 'center',
    },

    gridItem: {
        display: 'grid',
        justifyContent: 'center',
    },

});

export default function FormCardOne() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.Content}>

                <Grid container className={classes.masterGrid} spacing={3} justifyContent="center">

                    <Grid item className={classes.gridItem} xs={12}>


                        <Typography align='center' variant="body1" gutterBottom>
                            You are applying to work in
                            The <Typography align='center' variant="h4" >Medical</Typography>Department
                        </Typography>


                    </Grid>

                    <Grid item className={classes.gridItem} xs={12}>



                        <Typography align='center' variant="body1" >
                            As the
                        </Typography>
                        <br />
                        <Typography align='center' variant="h5" gutterBottom>Junior Consultant</Typography>

                    </Grid>

                    <Grid item className={classes.gridItem} xs={12}>

                        <Typography align='center' variant="body1" >
                            Of
                        </Typography>
                        <Typography align='center' variant="h5" >Casualty &amp; Emergency Medecine</Typography>


                    </Grid>



                </Grid>

            </CardContent>
        </Card>
    );
}
