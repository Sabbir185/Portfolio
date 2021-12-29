import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import sabbir from '../../images/5.jpg';
import './AboutMe.css';
import Qualifications from '../Qualifications/Qualifications';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';


const AboutMe = () => {
    return (
        <section style={{ backgroundColor: '#0A192F' }}>
            <HeaderNav />
            <div className="pt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xlg-4 aboutMe-img pb-5">
                        <Pulse >
                            <div className="tans-effect">
                                <img src={sabbir} alt="" />
                            </div>
                        </Pulse>
                    </div>
                    <div className="col aboutMe-textColor aboutInfo-container">
                        <Pulse>
                            <div>
                                <h4> <em><span className="aboutMe-mainTitle">Bismillahir Rahmanir Rahim</span></em> </h4>
                                <h4 className="aboutMe-headerColor mt-5">Hi, you're welcome</h4>
                                <article className="w-75 text-justify mt-3">
                                    <p>My name is Sabbir Ahmmed. I'm a MERN Stack Web Developer. I love to design and building web applications. Blogging, problem-solving and learning new technologies is my another passion. I always try to keep update myself on technologies.</p>
                                </article>
                            </div>
                        </Pulse>
                    </div>
                </div>

                <Qualifications />

                <div className="container mt-5 pt-3 pb-5">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-xs-10 col-sm-8 col-md-7 col-lg-7 col-xlg-7 skill-info">
                            <Slide bottom>
                                <h4><span className="aboutMe-mainTitle aboutMe-headerColor">Skills</span></h4>

                                <h5 className="aboutMe-headerColor mt-4">Frontend</h5>
                                <span>HTML, </span>
                                <span> CSS, </span>
                                <span> Bootstrap, </span>
                                <span> Material-UI, </span>
                                <span> JavaScript (ES6), </span>
                                <span> ReactJs, </span>
                                <span> Redux, </span>

                                <h5 className="aboutMe-headerColor mt-3">Backend</h5>
                                <span>NodeJs, </span>
                                <span> ExpressJs, </span>
                                <span> MongoDB, </span>
                                <span> REST-API, </span>
                                <span> MySQL, </span>
                                <span> Jest, </span>
                                <span> Firebase-Auth & JWT</span>

                                <h5 className="aboutMe-headerColor mt-3">Familiar</h5>
                                <span>TypeScript, </span>
                                <span> Tailwindcss, </span>
                                <span> Django, </span>
                                <span> SASS </span>

                                <h5 className="aboutMe-headerColor mt-3">Programming Languages</h5>
                                <span>C++, </span>
                                <span> JavaScript, </span>
                                <span> Java, </span>
                                <span> Python, </span>

                                <h5 className="aboutMe-headerColor mt-3">Tools</h5>
                                <span>Git, </span>
                                <span> Docker, </span>
                                <span> VSCode, </span>
                                <span> Chrome Dev Tools, </span>
                                <span> Firebase, </span>
                                <span> Netlify, </span>
                                <span> Heroku,</span>


                                <div className="mt-5 pb-5">
                                    <h5><span className="aboutMe-mainTitle aboutMe-headerColor">Languages</span></h5>
                                    <h6 className="mt-4 lag-style">Fluent : English, Bangla</h6>
                                    <h6 className="mt-3 lag-style">Conversational : Hindi</h6>
                                </div>

                            </Slide>

                        </div>
                        <div className="col"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;