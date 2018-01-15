import React, { Component } from 'react';

class FifthStreetBridgeProgram extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className='gold-bg black-text'>
                    <h1>5th Street Bridge Program</h1>
                    <p>Each year, Georgia Tech student-athletes gain experience in their career field to prepare them for the future. This program is dubbed the 5th Street Bridge Program, due to the high profile technology companies we have partnerhsips with in Technology Square and 5th Street.</p>
                    <p>Image here</p>
                </section>
                <section className='darkgray-bg black-text'>
                    <p>Below is a list of our 88 student-athletes who secured internships with companies for the 2016-2017 year.</p>
                    <p>Image here</p>
                </section>
            </div>
        );
    }
};

export default FifthStreetBridgeProgram;