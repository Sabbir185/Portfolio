import React from 'react';
import './MySelf.css'
import myself from '../../images/sabbir.png';
import Slide from 'react-reveal/Slide';


const MySelf = () => {
    return (

        <section className="myself-container container-fluid">
            <span className="my-self">My self</span>
            <div className="row mt-5  pb-5">
                <div className="col myself-text pb-5">
                    <div>
                        <p className="myself-text text-justify">I'm Sabbir Ahmmed, a dedicated and passionate coder. I always like to accept new challenges whatever our coding life or real life. Interpersonal communication skill encourages me to create high quality, scalable and high-performance web applications.</p>

                        <Slide bottom>
                            <h5 className="mt-4">Recent Working Technologies</h5>

                            <div className="row mt-3">
                                <div className="col">
                                    <ul>
                                        <li><span>JavaScript (ES6) </span></li>
                                        <li><span>ReactJs </span></li>
                                        <li><span>NodeJs </span></li>
                                        <li><span>ExpressJs </span></li>
                                        <li><span>MongoDB </span></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li><span>Git </span></li>
                                        <li><span>Firebase </span></li>
                                        <li><span>Heroku </span></li>
                                        <li><span>Netlify </span></li>
                                        <li><span>SASS</span></li>
                                    </ul>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 d-flex  justify-content-center">
                    <div className="tans-effect">
                        <img src={myself} alt="" className="myself-img img-fluid" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MySelf;