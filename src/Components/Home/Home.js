import React from 'react';
import Bannar from '../Bannar/Bannar';

import Upcomming from '../Upcomming/Upcomming';
import Feedbacks from './FeedBack/FeedBacks/Feedbacks';
import Partner from './Partner/Partner';



const Home = () => {
    return (
        <div id='home'>
           
            <Bannar></Bannar>
            <Feedbacks></Feedbacks>
            <Partner></Partner>
            <Upcomming></Upcomming>
            
        </div>
    );
};

export default Home;