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

export default function FormCardTwo() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.Content}>



                <Grid container className={classes.masterGrid} spacing={3} justifyContent="center">



                    <Grid item className={classes.gridItem} xs={12}> <FormName /></Grid>



                    <Grid item className={classes.gridItem} xs={12}> <FormPhone /> </Grid>
                    <Grid item xs={12}><FormEmail /></Grid>



                    <Grid item className={classes.gridItem} xs={12}> <FormAddressOne /></Grid>
                    <Grid item className={classes.gridItem} xs={12}><FormAddressTwo /></Grid>
                    <Grid item className={classes.gridItem} xs={12}><FormAddressThree /></Grid>



                </Grid>



            </CardContent>
        </Card>
    );
}
