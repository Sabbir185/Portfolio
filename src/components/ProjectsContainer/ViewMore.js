import React, { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';
import './style.css';
import a from '../../images/projects/a.png';
import c from '../../images/projects/c.png';
import b from '../../images/projects/b.png';

const ViewMore = () => {
    const [open, setOpen] = useState(false);
 
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="view-more"
                aria-expanded={open}
                className="d-block mx-auto px-5 btn-success"
            >
                {open ? 'Close Now' : 'View More'}
            </Button>
            <Fade in={open}>
                <div id="view-more" className="pt-2">
                    <div className="card-deck mt-5 mb-5 pb-3 responsive">
                        <div className="card card-container">
                            <div className="m-2 card-image">
                                <img src={a} className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="card-body card-description">
                                <h5 className="card-title">Alpha Teams</h5>
                                <p className="card-text text-justify">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, alias fugiat optio ratione aut natus.
                                </p>
                                <a href={`https://${'sabbir185-alpha-teams.netlify.app/'}`} target='_blank' className="text-decoration-none"> <button className="btn btn-success mt-3 ml-auto d-block">view project</button> </a>
                            </div>
                        </div>
                        <div className="card card-container">
                            <div className="m-2 card-image">
                                <img src={c} className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="card-body card-description">
                                <h5 className="card-title">Hard Rock Lyric</h5>
                                <p className="card-text text-justify">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi in similique excepturi quas velit eum!
                                </p>
                                <a href={`https://${'sabbir185.github.io/JavaScript/API-basic-concept/hard-rock-music/index.html'}`} target='_blank' className="text-decoration-none"> <button className="btn btn-success mt-3 ml-auto d-block">view project</button> </a>
                            </div>
                        </div>
                        <div className="card card-container">
                            <div className="m-2 card-image">
                                <img src={b} className="card-img-top img-fluid" alt="..." />
                            </div>
                            <div className="card-body card-description">
                                <h5 className="card-title">Penguin Fashion</h5>
                                <p className="card-text text-justify">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque optio reiciendis eligendi labore delectus.
                                </p>
                                <a href={`https://${'sabbir185.github.io/penguin-fashion/index.html'}`} target='_blank' className="text-decoration-none"> <button className="btn btn-success mt-3 ml-auto d-block">view project</button> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ViewMore;