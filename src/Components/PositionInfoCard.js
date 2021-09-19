import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ApplyButton from './ApplyButton';
import { Link, Router } from "react-router-dom";

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

export default function PositionInfoCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>

                <div className="flexbox-container">

                    <div className="flexbox-item Position-Info-Text">

                        <Typography variant="body1" component="p">Department</Typography>
                        <Typography variant="body2" component="p">Medical</Typography>

                    </div>

                    <div className="flexbox-item button">

                        <Typography variant="body1" component="p">Position</Typography>
                        <Typography variant="body2" component="p">Junior Consultant</Typography>
                        <Typography variant="body2" component="p">Casualty &amp; Emergency Medicine</Typography>

                    </div>

                    <div className="flexbox-item button">

                        <Typography variant="body1" component="p">Minimum Qualifications</Typography>
                        <Typography variant="body2" component="p">MD/DNB(Emergency Medicine)</Typography>

                    </div>

                    <div className="flexbox-item button">

                        <Typography variant="body1" component="p">Preferred Job Experience</Typography>
                        <Typography variant="body2" component="p">1-2 Years &amp; above</Typography>

                    </div>

                    <div className="flexbox-item button">

                        <Typography variant="body1" component="p">Vacancy</Typography>
                        <Typography variant="h2" component="p">4</Typography>

                    </div>

                    <div className="flexbox-item button">
                        <Link to={process.env.PUBLIC_URL + '/applicationform'}>

                            <ApplyButton />

                        </Link>
                    </div>

                </div>

            </CardContent>
        </Card>
    );
}
