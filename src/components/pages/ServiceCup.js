import React from 'react';
import { ColLayout } from './../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const ServiceCup = props => (
    <ColLayout title="ATHLETIC DIRECTOR'S COMMNUNITY SERVICE CUP">
        <p className="header center">Each year, teams compete by accumulating community service hours for recognition in the A.D.’s Community Service cup. The three involved most teams will receive prizes and will be honored at the annual Yellow Jacket Celebration event.</p>
    </ColLayout>
);

export default ServiceCup;