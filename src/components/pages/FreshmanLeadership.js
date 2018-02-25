import React from 'react';
import { ColLayout, Banner } from './../common';
import { Carousel } from "react-materialize";

const styles = {
    text: {
        fontSize: '20px',
        lineHeight: '50px'
    }
};

const FreshmanLeadership = props => (
    <div>
       <section className="gold-bg black-text">
            <ColLayout title='FRESHMAN LEADERSHIP ACADEMY'>
                <p style={styles.text}>The Freshman Leadership Academy is a series of interactive and engaging sessions that prepare incoming student-athletes for their transition to college. Every new student will participate, as part of their Athletics Orientation programming. Here, they are introduced to the Total Person Program, and begin to work on many personal development areas. Additionally, they will meet their freshman peers, build relationships with key staff members, and learn about campus, and get involved with the community. </p>
            </ColLayout>
        </section>
        <section className="lightgray-bg"
            style={{
                overflow: "hidden",
                height: "600px"
            }}>
            <Carousel
                className="freshman-carousel"
                options={{
                    fullWidth: true
                }}

                images={[
                    './assets/images/freshman-academy/freshman-academy-1.JPG',
                    './assets/images/freshman-academy/freshman-academy-2.JPG',
                    './assets/images/freshman-academy/freshman-academy-3.JPG',
                    './assets/images/freshman-academy/freshman-academy-4.JPG'
                ]}
            />
            <a className="left carousel-controls carousel-prev"><i className="material-icons">chevron_left</i></a>
            <a className="right carousel-controls carousel-fwd"><i className="material-icons">chevron_right</i></a>
        </section>


    </div>
);

export default FreshmanLeadership;