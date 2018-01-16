import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './../components/Main';
import { Home, Alumni, BusinessCard, Career, Community, GetInvolved, Leadership, Nutrition, Personal, Stories, FifthStreet, FirstRound } from './../components/pages';

const routes = (
  <Router>
    <Main>
      <Route exact path='/' component={Home} />
      <Route path='/alumni' component={Alumni} />
      <Route path='/business-cards' component={BusinessCard} />
      <Route path='/career-development' component={Career} />
      <Route path='/fifth-street-bridge-program' component={FifthStreet} />
      <Route path='/first-round-draft-pick' component={FirstRound} />
      <Route path='/community-outreach' component={Community} />
      <Route path='/leadership-development' component={Leadership} />
      <Route path='/personal-development' component={Personal} />
      <Route path='/sports-nutrition' component={Nutrition} />
      <Route path='/our-stories' component={Stories} />
      <Route path='/get-involved' component={GetInvolved} />
    </Main>
  </Router>
);

export default routes;