import React from 'react';

import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Protection from '../Protection/Protection';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <Protection></Protection>
            <Reviews></Reviews>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;