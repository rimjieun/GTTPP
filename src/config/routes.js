import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './../components/Main';
import Home from './../components/pages/Home';
import Alumni from './../components/pages/Alumni';
import Career from './../components/pages/Career';
import Community from './../components/pages/Community';
import Leadership from './../components/pages/Leadership';
import Personal from './../components/pages/Personal';
import Nutrition from './../components/pages/Nutrition';
import Stories from './../components/pages/Stories';
import Events from './../components/pages/Events';

const routes = (
  <Router>
    <Main>
      <Route exact path='/' component={Home} />
      <Route path='/alumni' component={Alumni} />
      <Route path='/career' component={Career} />
      <Route path='/community' component={Community} />
      <Route path='/leadership' component={Leadership} />
      <Route path='/personal' component={Personal} />
      <Route path='/nutrition' component={Nutrition} />
      <Route path='/stories' component={Stories} />
      <Route path='/events' component={Events} />
    </Main>
  </Router>
);

export default routes;