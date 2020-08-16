import React from 'react';

import Slider from '../../components/Home/Slider/Slider';
import Services from '../../components/Home/Services/Services';
import Sponsors from '../../components/Home/Sponsors/Sponsors';

import classes from './Home.module.css';

const Home = props => {

    return(
        <div>
            <Slider />
            <Services />
            <Sponsors />
        </div>
    );
}

export default Home;