import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderMain.css';
import Typewriter from 'typewriter-effect';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import behance from '../../images/behance.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import { motion } from "framer-motion"


const HeaderMain = () => {
    return (
        <section className='main-header'>
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                    <article>
                        <a href={`https://${'www.linkedin.com/in/sabbir185/'}`} target='_blank' rel="noreferrer"><img src={linkedin} alt="" className="img-fluid social-icon d-block mb-3"/></a>

                        <a href={`https://${'github.com/Sabbir185'}`} target='_blank' rel="noreferrer"><img src={github} alt="" className="img-fluid social-icon d-block mb-3"/></a>

                        <a href={`https://${'www.behance.net/sabbir185'}`} target='_blank' rel="noreferrer"><img src={behance} alt="" className="img-fluid social-icon d-block mb-3"/></a>

                        <a href={`https://${'www.facebook.com/sabbir185/'}`} target='_blank' rel="noreferrer"><img src={facebook} alt="" className="img-fluid social-icon d-block mb-3"/></a>
                        
                        <a href={`https://${'twitter.com/sabbir185'}`} target='_blank' rel="noreferrer"><img src={twitter} alt="" className="img-fluid social-icon d-block"/></a>
                    </article>
                </div>
                <div className="col-8 col-lg-6 col-xlg-6">
                    <h4 className="text-success main-hello">Hi, my name is</h4>
                    <h1 className="main-title">SABBIR AHMMED</h1>
                    <div className="main-skill mt-3">
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Developer', 'Frontend Developer','Web API Developer','Backend Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    {/* <h3 className="main-skill mt-3">MERN Stack Developer</h3> */}
                    <p className="main-description mt-3">the passion for coding, commitment to the deadline, life for humanity <span style={{color:'red',fontSize:'20px'}}> &#9829;</span></p>
                    <motion.div
                        initial={{x:'-100vw'}}
                        animate={{x: 0}}
                        transition={{ duration: .5}}
                    >
                        <a href={`https://${'drive.google.com/file/d/1TM2r3Ch8WG01aTB2Ej0r3COtXPCM5baN/view'}`} target='_blank' rel="noreferrer"><Button className="mt-3 btn-trans" variant="outline-success">Download Resume</Button></a>
                    </motion.div>
                </div>
                <div className="col"></div>
            </div>
        </section>
    );
};

export default HeaderMain;