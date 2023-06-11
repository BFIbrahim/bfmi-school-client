import React from 'react';
import Banner from '../Banner/Banner';
import HomeClasses from '../HomeClasses/HomeClasses';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || BFMI School</title>
            </Helmet>

            <Banner></Banner>
            <HomeClasses></HomeClasses>
        </div>

    );
};

export default Home;