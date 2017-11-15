import React from 'react';

const Events = props => (
    <div className='page-container'>
        <h1 className="header center lightgray-text">UPCOMING EVENTS</h1>
        <div className='right'>
            <iframe className='agenda' src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showTabs=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=5l4mprip9tr3k2kko3j1ul8558%40group.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FNew_York" frameBorder="0" scrolling="no"></iframe>
        </div>
    </div>
);

export default Events;