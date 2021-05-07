import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import MySelf from '../MySelf/MySelf';

const AboutMe = () => {
    return (
        <div style={{backgroundColor:'#0A192F'}}>
            <HeaderNav/>
            <div className="pt-5">
                <MySelf/>
            </div>
        </div>
    );
};

export default AboutMe;