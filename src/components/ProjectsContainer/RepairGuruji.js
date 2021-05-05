import React from 'react';
import repair from '../../images/projects/1.png';
import './style.css'

const RepairGuruji = () => {

    return (
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
    );
};

export default RepairGuruji;