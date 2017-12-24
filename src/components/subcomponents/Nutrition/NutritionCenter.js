import React from 'react';
import { ColLayout } from './../../common';

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const NutritionCenter = props => (
    <ColLayout title='NUTRITION CENTER'>
        <p style={styles.text}>The Sports Nutrition Center is maintained by Leah Thomas, a registered and licensed dietitian with a specialty certification in Sports Nutrition (Certified Specialist in Sports Dietetics - CSSD). Individual consultations are provided to student-athletes where comprehensive computerized dietary analysis' are performed and individual recommendations for improving nutrient intake are discussed. In addition, body composition testing is done via the Bod Pod, a Life Measurement, Inc. product, and can provide an appropriate measurement of achievement. This method of body composition analysis provides a safe, fast, and accurate method for determining body fat and lean mass through air displacement. The Georgia Tech Sports Nutrition Center provides Core Power products to all Georgia Tech student-athletes to aid in recovery following athletic activities.</p>
    </ColLayout>
);

export default NutritionCenter;