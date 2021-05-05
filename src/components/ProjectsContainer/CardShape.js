import React from 'react';
import sundarban from '../../images/projects/3.png';
import slider from '../../images/projects/9.png';
import food from '../../images/projects/8.png';
import './style.css';

const CardShape = () => {
    return (
        <div className="card-deck mt-5 mb-5 pt-5 pb-5">
            <div className="card card-container">
                <div className="m-2 card-image">
                    <img src={sundarban} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card card-container">
                <div className="m-2 card-image">
                    <img src={slider} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card card-container">
                <div className="m-2 card-image">
                    <img src={food} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default CardShape;