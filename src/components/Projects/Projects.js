import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import './Projects.css';
import RepairGuruji from '../ProjectsContainer/RepairGuruji';
import Eplanet from '../ProjectsContainer/Eplanet';
import CardShape from '../ProjectsContainer/CardShape';
import ViewMore from '../ProjectsContainer/ViewMore';


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

                <article className="container-fluid px-5 pt-5">
                    <CardShape/>
                </article>

                <article className="container-fluid px-5 pb-5">
                    <ViewMore/>
                </article>

            </main>
        </section>
    );
};

export default Projects;