import React from 'react';
import { ColLayout } from './../../common';

const styles = {
  iframe: {
    width: '100%',
    height: '400px'
  }
}

const Events = props => (
    <ColLayout title='UPCOMING EVENTS'>
      <iframe style={styles.iframe} src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=5l4mprip9tr3k2kko3j1ul8558%40group.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FNew_York"  frameBorder="0" scrolling="no"></iframe>
    </ColLayout>
);

export default Events;