import React from 'react';
import '../../App.css';
import HeroSection from '../../components/HeroSecation/index';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

const Home = () =>{
    return(
        <React.Fragment>
            <HeroSection />
            <Cards />
            <Footer />
        </React.Fragment>
    )
}
export default Home;