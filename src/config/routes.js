import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './../components/Main';
import { Home, AdvisoryBoard, Alumni, BusinessCard, Career, Community, FreshmanLeadership, GetInvolved, JWOB, Leadership, LeadershipSeries, Nutrition, Personal, Stories, FifthStreet, FirstRound, ServiceCup, RyanTestPage, JieunTestPage } from './../components/pages';
import CommunityService from '../components/subcomponents/Community/CommunityService';

const routes = (
  <Router>
    <Main>
      <Route exact path='/' component={Home} />
      <Route path='/alumni' component={Alumni} />

      <Route path='/career-development' component={Career} />
      <Route path='/business-cards' component={BusinessCard} />
      <Route path='/fifth-street-bridge-program' component={FifthStreet} />
      <Route path='/first-round-draft-pick' component={FirstRound} />

      <Route path='/personal-development' component={Personal} />

      <Route path='/community-outreach' component={Community} />
      <Route path='/jackets-without-borders' component={JWOB} />
      <Route path='/community-service-cup' component={ServiceCup} />


      <Route path='/leadership-development' component={Leadership} />
      <Route path='/freshman-leadership-academy' component={FreshmanLeadership} />
      <Route path='/student-athlete-advisory-board' component={AdvisoryBoard} />
      <Route path='/leadership-series' component={LeadershipSeries} />

      <Route path='/sports-nutrition' component={Nutrition} />
      <Route path='/our-stories' component={Stories} />
      <Route path='/get-involved' component={GetInvolved} />

      <Route path='/ryan' component={RyanTestPage} />
      <Route path='/jieun' component={JieunTestPage} />
    </Main>
  </Router>
);

export default routes;