import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderMain.css';
import Typewriter from 'typewriter-effect';


const HeaderMain = () => {
    return (
        <section className='main-header'>
            <div className="row">
                <div className="col"></div>
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
                    <Button className="mt-3" variant="outline-success">GET IN TOUCH</Button>
                </div>
                <div className="col"></div>
            </div>
        </section>
    );
};

export default HeaderMain;