import React from 'react';
import Header from '../Header/Header';
import HomeBlog from '../HomeBlog/HomeBlog';
import MySelf from '../MySelf/MySelf';
import SwiperProject from '../SwiperProject/SwiperProject';

const Home = () => {
    return (
        <main>
           <Header/>
           <MySelf/>
           <SwiperProject/>
           <HomeBlog/> 
        </main>
    );
};

export default Home;