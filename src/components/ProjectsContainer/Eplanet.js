import React from 'react';
import eplanet from '../../images/projects/2.png';
import './style.css'

const Eplanet = () => {
    return (
        <div>
            <div className="row mt-5 lg-eplanet">
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
                        <div className='mt-2'>
                            <h6>Deploy Server</h6>
                            <span>Firebase, </span>
                            <span>Heroku, </span>
                            <span>github, </span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xlg-5 img-style d-flex align-items-center justify-content-center">
                    <div>
                        <img src={eplanet} alt="" className="img-fluid" />
                        <a href={`https://${'e-planetshop.web.app/'}`} target='_blank' rel="noreferrer" className="text-decoration-none"> <button className="btn btn-outline-success mt-3 mx-auto d-block">view project</button> </a>
                    </div>
                </div>
            </div>

            {/* toggle */}
            <div className="row repair-res sm-eplanet">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xlg-5 img-style d-flex align-items-center justify-content-center">
                    <div>
                        <img src={eplanet} alt="" className="img-fluid" />
                        <a href={`https://${'e-planetshop.web.app/'}`} target='_blank' rel="noreferrer" className="text-decoration-none"> <button className="btn btn-outline-success mt-3 mx-auto d-block">view project</button> </a>
                    </div>
                </div>
                <div className="col details d-flex align-items-center" style={{ color: "#CCD6F6" }}>
                    <div className="">
                        <h4>E-Planet</h4>
                        <p>E-Planet is an online shopping place where you can easily buy any electronic products or devices.</p>
                        <ul>
                            <li>Authentication system</li>
                            <li>Admin product management</li>
                            <li>Buy product and smart checkout page</li>
                            <li>Authentication</li>
                            <li>Total order list and more</li>
                        </ul>
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
                        <div className='mt-2'>
                            <h6>Deploy Server</h6>
                            <span>Firebase, </span>
                            <span>Heroku, </span>
                            <span>github, </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eplanet;