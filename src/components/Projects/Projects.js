import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import './Projects.css';
import repair from '../../images/projects/1.png';
import eplanet from '../../images/projects/2.png';


const Projects = () => {
    return (
        <section>
            <HeaderNav />
            <main className="projects-bg">
                <h1 className="projects-title"> <p> Projects </p> </h1>

                <article className="container-fluid">
                    <div className="row">
                        <div className="col-5 img-style d-flex align-items-center">
                            <img src={repair} alt="" className="img-fluid w-75" />
                        </div>
                        <div className="col d-flex align-items-center" style={{ color: "#CCD6F6" }}>
                            <div className="pl-5">
                                <h4>Repair Guruji</h4>
                                <p>Repair guruji is a repair service provider. User and Admin have dynamic interfaces.</p>
                                <ul>
                                    <li>Stripe Payment method</li>
                                    <li>dynamic service card</li>
                                    <li>dynamic review from users</li>
                                    <li>authentication</li>
                                    <li>Responsive design and more</li>
                                </ul>
                                <h5>Technology</h5>
                                <div>
                                    <h6>Frontend</h6>
                                    <span>HTML, </span>
                                    <span>CSS, </span>
                                    <span>Bootstrap, </span>
                                    <span>Material-UI, </span>
                                    <span>FontAwesome, </span> <br />
                                    <span>React, </span>
                                    <span>Context-API, </span>
                                    <span>React-Router, </span>
                                    <span>Private-Route</span>
                                </div>
                                <div className='mt-2'>
                                    <h6>Backend</h6>
                                    <span>NodeJs, </span>
                                    <span>ExpressJs, </span>
                                    <span>MongoDB, </span>
                                    <span>Firebase-auth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="container-fluid mt-5 pt-5">
                    <div className="row mt-5">
                        <div className="col d-flex align-items-center justify-content-center project-two" style={{ color: "#CCD6F6" }}>
                            <div className="text-center ">
                                <h4>E-Planet</h4>
                                <p>E-Planet is an online shopping place where you can easily buy any electronic products or devices.</p>
                                <div className="list-style mb-3">  
                                    <li>Authentication system</li>
                                    <li>Admin product management</li>
                                    <li>Buy product and smart checkout page</li>
                                    <li>Authentication</li>
                                    <li>Total order list and more</li>
                                </div>
                                <h5>Technology</h5>
                                <div>
                                    <h6>Frontend</h6>
                                    <span>HTML, </span>
                                    <span>CSS, </span>
                                    <span>Bootstrap, </span>
                                    <span>Material-UI, </span>
                                    <span>React, </span>
                                    <span>Context-API, </span>
                                    <span>React-Router, </span>
                                    <span>Private-Route</span>
                                </div>
                                <div className='mt-2'>
                                    <h6>Backend</h6>
                                    <span>NodeJs, </span>
                                    <span>ExpressJs, </span>
                                    <span>MongoDB, </span>
                                    <span>Firebase-auth</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-5 img-style d-flex align-items-center">
                            <img src={eplanet} alt="" className="img-fluid w-75" />
                        </div>
                    </div>
                </article>

            </main>
        </section>
    );
};

export default Projects;