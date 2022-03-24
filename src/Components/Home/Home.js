import React from 'react';
import Bannar from '../Bannar/Bannar';

import Upcomming from '../Upcomming/Upcomming';
import RattingPage from './RattingPage/RattingsPage';


const Home = () => {
    return (
        <div id='home'>
           
            <Bannar></Bannar>
            <RattingPage></RattingPage>
            <Upcomming></Upcomming>
            
        </div>
    );
};

export default Home;