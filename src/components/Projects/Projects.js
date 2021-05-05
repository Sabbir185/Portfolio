import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import './Projects.css';
import RepairGuruji from '../ProjectsContainer/RepairGuruji';
import Eplanet from '../ProjectsContainer/Eplanet';
import CardShape from '../ProjectsContainer/CardShape';


const Projects = () => {
    return (
        <section>
            <HeaderNav />
            <main className="projects-bg">
                <h1 className="projects-title"> <p> Projects </p> </h1>

                <article className="container-fluid">
                    <RepairGuruji/>
                </article>

                <article className="container-fluid mt-5 pt-5">
                    <Eplanet/>
                </article>

                <article className="container-fluid pt-5">
                    <CardShape/>
                </article>

            </main>
        </section>
    );
};

export default Projects;