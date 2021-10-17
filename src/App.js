import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js';
import Landing from './Pages/Landing.js';
import Careers from './Pages/Careers.js';
import CandA from './Pages/CandA.js';
import PositionInfo from './Pages/PositionInfo.js';
import ApplicationForm from './Pages/ApplicationForm.js';
import Success from './Pages/Success';
import LandingAppBar from './Components/LandingAppBar';
import GlobalAppBar from './Components/GlobalAppBar';
import insta from './Assets/insta.svg';
import youtube from './Assets/yt.svg';
import facebook from './Assets/facebook.svg';
import linkedin from './Assets/linkedin.svg';
import twitter from './Assets/twitter.svg';
import AppFooter from './Components/Footer.js';
import HotlinesFAB from './Components/HotlinesFAB';
import HotlinesPopup from './Components/HotlinesPopup';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    backgroundColor: "#F1FFFB",
    // backgroundColor: "#ffffff",
    height: "100%",
  },

  FAB: {
    position: "fixed",
    top: '80%',
    right: '5%',
  },

});

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.App}>
      {/* Header (Navigation Bar) */}
      <header className={classes.AppHeader}>
        {/* <LandingAppBar /> */}
        <GlobalAppBar />
      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Landing /> </Route>
        <Route path={process.env.PUBLIC_URL + '/landing'}  > <Landing /> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/canda'} > <CandA /> </Route>
        <Route path={process.env.PUBLIC_URL + '/careers'} > <Careers /> </Route>
        <Route path={process.env.PUBLIC_URL + '/positioninfo'}  > <PositionInfo /> </Route>
        <Route path={process.env.PUBLIC_URL + '/applicationform'}  > <ApplicationForm /> </Route>
        <Route path={process.env.PUBLIC_URL + '/success'}  > <Success /> </Route>
      </Switch>

      <Box>
        <AppFooter />
      </Box>

      <Box className={classes.FAB}>
        <HotlinesPopup />
      </Box>

    </Box>
  );
};

export default App;
