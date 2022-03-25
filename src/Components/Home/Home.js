import React from 'react';
import Bannar from '../Bannar/Bannar';

import Upcomming from '../Upcomming/Upcomming';
import Feedbacks from './FeedBack/FeedBacks/Feedbacks';



const Home = () => {
    return (
        <div id='home'>
           
            <Bannar></Bannar>
            <Feedbacks></Feedbacks>
            <Upcomming></Upcomming>
            
        </div>
    );
};

export default Home;