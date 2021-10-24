import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ApplyButton from './ApplyButton';
import { Link, Router } from "react-router-dom";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
        width: '80vw',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // padding: '5% 5%',
    },

    Content: {
        margin: '5% 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    textSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '3% 0%',
    },

});

export default function PositionInfoCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.Content}>

                <Box className={classes.textSection}>

                    <Typography variant="h6" component="p">Department</Typography>
                    <Typography variant="body2" component="p">Medical</Typography>

                </Box>

                <Box className={classes.textSection}>

                    <Typography variant="h6" component="p">Position</Typography>
                    <Typography variant="body2" component="p">Junior Consultant</Typography>
                    <Typography variant="body2" component="p">Casualty &amp; Emergency Medicine</Typography>

                </Box>

                <Box className={classes.textSection}>

                    <Typography variant="h6" component="p">Minimum Qualifications</Typography>
                    <Typography variant="body2" component="p">MD/DNB(Emergency Medicine)</Typography>

                </Box>

                <Box className={classes.textSection}>

                    <Typography variant="h6" component="p">Preferred Job Experience</Typography>
                    <Typography variant="body2" component="p">1-2 Years &amp; above</Typography>

                </Box>

                <Box className={classes.textSection}>

                    <Typography variant="h6" component="p">Vacancy</Typography>
                    <Typography variant="h2" component="p">4</Typography>

                </Box>

                <Box className={classes.textSection}>
                    <Link to={process.env.PUBLIC_URL + '/applicationform'}>

                        <ApplyButton />

                    </Link>
                </Box>

            </CardContent>
        </Card>
    );
}
