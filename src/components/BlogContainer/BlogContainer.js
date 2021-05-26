import React from 'react';
import './BlogContainer.css';
import Slide from 'react-reveal/Slide';

const BlogContainer = (props) => {
    const { blog, description, link } = props.blog;

    return (
        <div className="move-trans">
            <Slide bottom>
                <div className="card p-3 text-clr bg-dark">
                    <h6>Title : {blog}</h6>
                    <hr />
                    <p className="text-justify">{description}</p>
                    <a href={`https://${link}`} target='_blank' rel="noreferrer" className="text-decoration-none"><button className="btn btn-outline-success d-block ml-auto nav-link">read more</button></a>
                </div>
            </Slide>
        </div>
    );
};

export default BlogContainer;