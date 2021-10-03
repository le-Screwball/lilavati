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


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        {/* <LandingAppBar/> */}
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

      <HotlinesPopup />

      <AppFooter />

    </div>
  );
}

export default App;
