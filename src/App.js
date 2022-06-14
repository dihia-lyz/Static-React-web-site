import React from 'react';
// import Navbar from './components/Navbar';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './screens/Login';
import SitesPage from './screens/SitesPage';
import HomePage from './screens/HomePage';
import RatingPage from './screens/RatingPage';
import ListZonesPage from './screens/ListZonesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/SitesPage' component= {SitesPage} />
          <Route path='/HomePage' component={HomePage} />
          <Route path='/RatingPage' component={RatingPage} />
          <Route path='/ListZonesPage' component={ListZonesPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
