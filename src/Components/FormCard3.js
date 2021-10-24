import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormQual from './FormQual';
import FormRelExp from './FormRelExp';
import FormTotalExp from './FormTotalExp';
import FormYNRadio from './FormYNRadio';
import UploadButton from './UploadButton';
import Grid from '@material-ui/core/Grid';

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
        // display: 'grid',
        // alignItems: 'center',
    },

    gridItem: {
        display: 'grid',
        justifyContent: 'space-between',
    },

    radioButton: {
        display: 'grid',
        justifyContent: 'right',
    },

});

export default function FormCardThree() {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardContent className={classes.Content}>

                <Grid container className={classes.masterGrid} spacing={3} justifyContent="center">

                    <Grid item className={classes.gridItem} xs={10}>

                        <FormQual />

                    </Grid>

                    <Grid item className={classes.gridItem} xs={10}>

                        <FormRelExp />
                    </Grid>

                    <Grid item className={classes.gridItem} xs={10}>

                        <FormTotalExp />
                    </Grid>


                    <Grid item className={classes.gridItem, classes.hostelLabel} xs={3}>

                        <Typography variant="body1">Hostel Accommodation </Typography>

                    </Grid>
                    <Grid item className={classes.gridItem, classes.radioButton} xs={7} ><FormYNRadio /></Grid>

                    <Grid item className={classes.gridItem} xs={3}>

                        <Typography variant="body1">MMC/MNC Registration </Typography>

                    </Grid>

                    <Grid item className={classes.gridItem, classes.radioButton} xs={7}><FormYNRadio /> </Grid>




                    <Grid item className={classes.gridItem} xs={7}>

                        <Typography variant="body1">Upload Resume </Typography>

                    </Grid>

                    <Grid item className={classes.gridItem} xs={3}><UploadButton /></Grid>


                </Grid>

            </CardContent >
        </Card >
    );
}
