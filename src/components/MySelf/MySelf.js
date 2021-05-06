import React from 'react';
import './MySelf.css'
import myself from '../../images/sabbir.png'

const MySelf = () => {
    return (
        <section className="myself-container container-fluid">
            <span className="my-self">My self</span>
            <div className="row mt-5  pb-5">
                <div className="col myself-text pb-5">
                    <p className="myself-text text-justify">I'm Sabbir Ahmmed, a dedicated and passionate coder. I always like to accept new challenges whatever our coding life or real life. Interpersonal communication skill encourages me to create high quality, scalable and high-performance web applications.</p>

                    <h5 className="mt-4">Recent Working Technologies</h5>
                    <span>JavaScript (ES6), </span>
                    <span>ReactJs, </span>
                    <span>NodeJs, </span>
                    <span>ExpressJs, </span>
                    <span>MongoDB , </span>
                    <span>MySQL </span>

                    <h5 className="mt-3">Always Beside Me</h5>
                    <span>HTML, </span>
                    <span>CSS, </span>
                    <span>Bootstrap, </span>
                    <span>Tailwindcss, </span>
                    <span>TypeScript </span>

                    <h5 className="mt-3">Comfortable</h5>
                    <span>Firebase-auth/JWT , </span>
                    <span>D3js, </span>
                    <span>React-Redux, </span>
                    <span>Django </span>
 
                    <h5 className="mt-3">Programming Languages</h5>
                    <span>C++, </span>
                    <span>Java, </span>
                    <span>Python, </span>
                    <span>C# </span>

                    <h5 className="mt-3">Tools</h5>
                    <span>VSCode, </span>
                    <span>Git, </span>
                    <span>Firebase, </span>
                    <span>Netlify, </span>
                    <span>Heroku </span>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xlg-6 d-flex align-items-center justify-content-center">
                    <div>
                        <img src={myself} alt="" className="myself-img img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySelf;