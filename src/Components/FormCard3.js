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

export default function FormCardThree() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container ">
                    <Grid container spacing={3} justifyContent="center">

                        <Grid item xs={10}>

                            <FormQual />

                        </Grid>

                        <Grid item xs={10}>

                            <FormRelExp />
                        </Grid>

                        <Grid item xs={10}>

                            <FormTotalExp />
                        </Grid>


                        <Grid item xs={3}>

                            <Typography variant="body1">Hostel Accommodation </Typography>

                        </Grid>
                        <Grid item xs={7} ><FormYNRadio /></Grid>

                        <Grid item xs={3}>

                            <Typography variant="body1">MMC/MNC Registration </Typography>

                        </Grid>

                        <Grid item xs={7}><FormYNRadio /> </Grid>




                        <Grid item xs={7}>

                            <Typography variant="body1">Upload Resume </Typography>

                        </Grid>

                        <Grid item xs={3}><UploadButton /></Grid>


                    </Grid>

                </div>

            </CardContent >
        </Card >
    );
}
