import React from 'react';
import repair from '../../images/projects/1.png';
import './style.css';
import Pulse from 'react-reveal/Pulse';
import { motion } from 'framer-motion';

const RepairGuruji = () => {

    return (
        <div className="row repair-res">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xlg-5 img-style d-flex align-items-center justify-content-center">
                <Pulse>
                    <div className="tans-effect">
                        <img src={repair} alt="" className="img-fluid" />
                        <a href={`https://${'repair-guruji.web.app'}`} target='_blank' rel="noreferrer" className="text-decoration-none"> <button className="btn btn-outline-success mt-3 mx-auto d-block">view project</button> </a>
                    </div>
                </Pulse>
            </div>
            <div className="col details d-flex align-items-center" style={{ color: "#CCD6F6" }}>
                <div className="">
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
                    <div className='mt-2'>
                        <h6>Deploy Server</h6>
                        <span>Firebase, </span>
                        <span>Heroku, </span>
                        <span>github, </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepairGuruji;