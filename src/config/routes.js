import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './../components/Main';
import { Home, Alumni, Career, Community, Events, GetInvolved, Leadership, Nutrition, Personal, Stories } from './../components/pages';

const routes = (
  <Router>
    <Main>
      <Route exact path='/' component={Home} />
      <Route path='/alumni' component={Alumni} />
      <Route path='/career-development' component={Career} />
      <Route path='/community-outreach' component={Community} />
      <Route path='/leadership-development' component={Leadership} />
      <Route path='/personal-development' component={Personal} />
      <Route path='/sports-nutrition' component={Nutrition} />
      <Route path='/our-stories' component={Stories} />
      <Route path='/events' component={Events} />
      <Route path='/get-involved' component={GetInvolved} />
    </Main>
  </Router>
);

export default routes;