import React from 'react';
import OptionCard from '../Components/OptionCard';
import BannersCarousel from '../Components/Banners';
import UpdatesButtonOne from '../Components/UpdatesButton1';
import SocInitCardOne from '../Components/SocInitCardOne';
import SocInitCardTwo from '../Components/SocInitCardTwo';
import SocInitCardThree from '../Components/SocInitCardThree';
import SocInitCardFour from '../Components/SocInitCardFour';
import UpdatesButtonTwo from '../Components/UpdatesButton2';
import UpdatesButtonThree from '../Components/UpdatesButton3';
import UpdatesButtonFour from '../Components/UpdatesButton4';
import UpdatesButtonFive from '../Components/UpdatesButton5';
import UpdatesButtonSix from '../Components/UpdatesButton6';
import TestimonialCardOne from '../Components/TestimonialCardOne';
import TestimonialCardTwo from '../Components/TestimonialCardTwo';
import TestimonialCardThree from '../Components/TestimonialCardThree';
import TestimonialCardFour from '../Components/TestimonialCardFour';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: "#F1FFFB",
    height: "100%",
  },

  masterBox: {
    justifyContent: 'center',
  },

  gridContainer: {
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionHeader: {
    display: 'flex',
    justifyContent: 'center',
  },

  updatesBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  testimonialBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  testimonial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10% 0%',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Box className={classes.masterBox}>

        <Grid container spacing={3} className={classes.gridContainer} >

          <Grid item xs={10} className={classes.sectionHeader}>

            <Box>

              <h2>Priority Links</h2>

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className="flexbox-item Option-Card">

              <OptionCard />

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className="flexbox-item">

              <BannersCarousel />

            </Box>

          </Grid>

          <Grid item xs={10} className={classes.sectionHeader}>

            <Box>

              <h2>Updates</h2>

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className={classes.updatesBox}>

              <Box>
                <UpdatesButtonOne />
              </Box>
              <Box>
                <UpdatesButtonTwo />
              </Box>
              <Box>
                <UpdatesButtonThree />
              </Box>
              <Box>
                <UpdatesButtonFour />
              </Box>
              <Box>
                <UpdatesButtonFive />
              </Box>
              <Box>
                <UpdatesButtonSix />
              </Box>

            </Box>

          </Grid>


          <Grid item xs={10} className={classes.sectionHeader}>

            <Box>

              <h2>Testimonials</h2>

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className={classes.testimonialBox}>

              <Box className={classes.testimonial}>
                <TestimonialCardOne />
              </Box>
              <Box className={classes.testimonial}>
                <TestimonialCardTwo />
              </Box>
              <Box className={classes.testimonial}>
                <TestimonialCardThree />
              </Box>
              <Box className={classes.testimonial}>
                <TestimonialCardFour />
              </Box >

            </Box>

          </Grid>

          <Grid item xs={10} className={classes.sectionHeader}>

            <Box>

              <h2>Social Initiatives</h2>

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className="flexbox-item SocInit-Card">

              <SocInitCardOne />

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className="flexbox-item SocInit-Card">

              <SocInitCardTwo />

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className="flexbox-item SocInit-Card">

              <SocInitCardThree />

            </Box>

          </Grid>

          <Grid item xs={10}>

            <Box className="flexbox-item SocInit-Card">

              <SocInitCardFour />

            </Box>

          </Grid>

        </Grid>


      </Box>




    </React.Fragment >
  );
}