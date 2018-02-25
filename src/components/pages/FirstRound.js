import React, { Component } from 'react';

class FirstRoundDraftPick extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <section className='lightgray-bg black-text'>
                    <h1>1st Round Draft Pick</h1>
                    <p>The 1st Round Draft Pick program allows companies to engage in unique ways with the GT Athletic Association. Some of these opportunities include special networking events with student-athletes, private meetings with the Athletic Director, site visits from interested student-athletes, face time with head coaches, increased branding and advertising around athletic facilities, and other career opportunities.</p>
                </section>
                <section className='gold-bg black-text'>
                    <p>Information about GM....</p>
                </section>
                <section className='white-bg black-text'>
                    <p>Interested in getting involved? Contact Dave B....</p>
                </section>
            </div>
        );
    }
};

export default FirstRoundDraftPick;