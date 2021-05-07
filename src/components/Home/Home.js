import React from 'react';
import Footer from '../Footer/Footer';
import GetInTouch from '../GetInTouch/GetInTouch';
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
           <GetInTouch/>
           <Footer/>
        </main>
    );
};

export default Home;