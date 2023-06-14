import React from 'react';
import Banner from '../Banner/Banner';
import HomeClasses from '../HomeClasses/HomeClasses';
import { Helmet } from 'react-helmet-async';
import About from '../About Section/About';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || BFMI School</title>
            </Helmet>

            <Banner></Banner>
            <HomeClasses></HomeClasses>
            <About></About>
        </div>

    );
};

export default Home;