import React from 'react';
import insta from '../Assets/insta.svg';
import youtube from '../Assets/yt.svg';
import facebook from '../Assets/facebook.svg';
import linkedin from '../Assets/linkedin.svg';
import twitter from '../Assets/twitter.svg';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5% 5% 5% 5%',
    margin: '20% 0% 0% 0%',
    borderRadius: '50px 50px 0px 0px',
  },

  appFooter: {
    padding: '15% 0% 0% 0%',
  },

  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  footerTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  footerTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  footerItem: {
    margin: '1% 0%',
  },

  firstItem: {
    margin: '10% 0% 0% 0%',
  },

  socialMedia: {
    margin: '10% 0%',
    display: 'flex',
    justifyContent: 'space-around',
  },

  socialMediaItem: {
    margin: '0% 10%',
  },

  copyright: {
    display: 'flex',
    justifyContent: 'center',
  },

});


export default function AppFooter() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>

      <footer className={classes.appFooter}>
        <Box className={classes.footerContainer}>

          <Box className={classes.footerTitle}>
            <Typography variant='h4'>Lilavati Hospitals</Typography>
            <Typography variant='body2'>More Than Healthcare, Human Care</Typography>
          </Box>

          <Box className={classes.footerItem, classes.firstItem}>
            <Typography variant='h6'>Ambulance</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>Convenience &amp; Facilities</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>Media &amp; Press Releases</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>Social Initiatives</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>Floor Directory</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>Photo Gallery</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>Statutory Compliance</Typography>
          </Box>

          <Box className={classes.footerItem}>
            <Typography variant='h6'>E-Tender</Typography>
          </Box>

          <Box className={classes.socialMedia}>

            <Box className={classes.socialMediaItem}>
              <img src={insta} className={classes.instaLogo} alt="insta" />
            </Box>

            <Box className={classes.socialMediaItem}>
              <img src={youtube} className={classes.youtubeLogo} alt="youtube" />
            </Box>

            <Box className={classes.socialMediaItem}>
              <img src={facebook} className={classes.facebookLogo} alt="facebook" />
            </Box>

            <Box className={classes.socialMediaItem}>
              <img src={linkedin} className={classes.linkedinLogo} alt="linkedin" />
            </Box>

            <Box className={classes.socialMediaItem}>
              <img src={twitter} className={classes.twitterLogo} alt="twitter" />
            </Box>

          </Box>

          <Box className={classes.copyright}>
            <Typography align='center' variant='b2'>&copy; 2021, Mahti Ganatra, Juhi Goenka, Srikar Kanchumarthi</Typography>
          </Box>

        </Box>
      </footer>

    </Paper >
  );
}