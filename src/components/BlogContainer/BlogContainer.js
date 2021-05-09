import React from 'react';
import './BlogContainer.css';
import Slide from 'react-reveal/Slide';

const BlogContainer = (props) => {
    const { blog, description } = props.blog;

    return (
        <div className="move-trans">
            <Slide bottom>
                <div className="card p-3 text-clr bg-dark">
                    <h6>Title : {blog}</h6>
                    <hr />
                    <p className="text-justify">{description}</p>
                    <button className="btn btn-outline-success d-block ml-auto">read more</button>
                </div>
            </Slide>
        </div>
    );
};

export default BlogContainer;