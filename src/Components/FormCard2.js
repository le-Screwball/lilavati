import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormName from './FormName';
import FormPhone from './FormPhoneNo';
import FormEmail from './FormEmail';
import FormAddressOne from './FormAddress1';
import FormAddressTwo from './FormAddress2';
import FormAddressThree from './FormAddress3';
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

export default function FormCardTwo() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container ">

                    <Grid container spacing={3} justifyContent="center">



                        <Grid item xs={10}> <FormName /></Grid>



                        <Grid item xs={10}> <FormPhone /> </Grid> <Grid item xs={10}><FormEmail /></Grid>



                        <Grid item xs={10}> <FormAddressOne /></Grid>
                        <Grid item xs={10}><FormAddressTwo /></Grid>
                        <Grid item xs={10}><FormAddressThree /></Grid>



                    </Grid>

                </div>

            </CardContent>
        </Card>
    );
}
