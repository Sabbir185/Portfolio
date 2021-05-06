import React from 'react';
import Header from '../Header/Header';
import MySelf from '../MySelf/MySelf';
import SwiperProject from '../SwiperProject/SwiperProject';

const Home = () => {
    return (
        <main>
           <Header/>
           <MySelf/>
           <SwiperProject/> 
        </main>
    );
};

export default Home;