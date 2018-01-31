import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, SideNav, SideNavItem, Button, Dropdown } from 'react-materialize';

class Navbar2 extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="nav-div">
                <div className="navbar-logo center">
                    <img className="brand-logo" alt="Brand" src="./assets/images/logos/gttpp4.png" />
                </div>
                <Navbar>
                    <NavItem href='/'>HOME</NavItem>
                    <NavItem href='/alumni'>ALUMNI</NavItem>

                    <Dropdown trigger={
                        <NavItem href="/career-development" className="career">
                            CAREER DEVELOPMENT
                            <i className="material-icons right">arrow_drop_down</i>
                        </NavItem>
                    }>
                        <NavItem href="/fifth-street-bridge-program">5th Street Bridge Program</NavItem>
                        <NavItem href="/first-round-draft-pick">1st Round Draft Pick</NavItem>
                        <NavItem href="/business-cards">Business Card Request</NavItem>
                    </Dropdown>

                    <Dropdown trigger={
                        <NavItem href="/leadership-development" className="dropdown-button">
                            LEADERSHIP DEVELOPMENT
                            <i className="material-icons right">arrow_drop_down</i>
                        </NavItem>
                    }>
                        <NavItem href="/freshman-leadership-academy">Freshman Leadership Academy</NavItem>
                        <NavItem href="/leadership-series">Leadership Series</NavItem>
                        <NavItem href="/student-athlete-advisory-board">Student-Athlete Advisory Board</NavItem>
                    </Dropdown>

                    <NavItem href="/personal-development">PERSONAL DEVELOPMENT</NavItem>

                    <Dropdown trigger={
                        <NavItem href="/community-outreach" className="dropdown-button">
                            COMMUNITY OUTREACH
                            <i className="material-icons right">arrow_drop_down</i>
                        </NavItem>
                    }>
                        <NavItem href="/jackets-without-borders">JWOB</NavItem>
                        <NavItem href="/community-service-cup">Community Service Cup</NavItem>
                    </Dropdown>

                    <NavItem href="/sports-nutrition">SPORTS NUTRITION</NavItem>
                    <NavItem href="/our-stories">OUR STORIES</NavItem>
                    <NavItem href="/get-involved">GET INVOLVED</NavItem>

                </Navbar>

            </div>
        )
    }
};

export default Navbar2;