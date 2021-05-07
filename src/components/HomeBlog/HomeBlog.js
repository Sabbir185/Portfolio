import React, { useEffect, useState } from 'react';
import BlogContainer from '../BlogContainer/BlogContainer';
import './HomeBlog.css';
import blogData from '../../Data/Blogs.json'

const HomeBlog = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(()=>{
        setBlog(blogData)
    },[])
    console.log(blogs)

    return (
        <section className="homeBlog-container">
            <span className="homeBlog-title">Latest Projects</span>

            <div className="blogStyle text-dark container mt-5 pt-5">
                {
                    blogs.map(blog=><BlogContainer key={blog.id} blog={blog}></BlogContainer>)
                }
            </div>
            
        </section>
    );
};

export default HomeBlog;