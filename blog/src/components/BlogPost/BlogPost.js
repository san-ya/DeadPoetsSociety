import React from "react";
import './BlogPost.css';
import Card from '../Card/Card.js';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpeg';
import blog3 from '../../assets/blog3.jpg';
import blog4 from '../../assets/blog4.jpg';
import { NavLink } from "react-router-dom";

const BlogPost = props => {
    return (
        <div className = "blogPostContainer">
            <Card style = {{marginBottom: '30px'}}>
                <div className = "blogHeader">
                    <NavLink to = "/10-Essay-Collections-For-When-A-Novel-Feels-Too-Much" className = "blogTitle">
                        <a><h1 className = "blog1">10 Essay Collections For When A Novel Feels Too Much</h1></a>
                    </NavLink>
                    <span className = "postedOn">Posted on July 6, 2021</span>
                </div>
                <div className = "postImage">
                    <img src = {blog1} className = "Image1 Image" alt = "image"/>
                </div>
            </Card>

            <Card style = {{marginBottom: '30px'}}>
                <div className = "blogHeader">
                    <NavLink to = "/5-LGBTQ+-Books-To-Read-Now-&-Always" className = "blogTitle">
                        <a><h1 className = "blog2">5 LGBTQ+ Books To Read Now & Always</h1></a>
                    </NavLink>
                    <span className = "postedOn">Posted on June 6, 2021</span>
                </div>
                <div className = "postImage">
                    <img src = {blog2} className = "Image2 Image" alt = "image"/>
                </div>
            </Card>

            <Card style = {{marginBottom: '30px'}}>
                <div className = "blogHeader">
                    <NavLink to = "/Detransition-Baby-Author-Torrey-Peter-Procrastinates-By-Reading-Moby-Dick" className = "blogTitle">
                        <a><h1 className = "blog3">Detransition, Baby Author Torrey Peters Procrastinates By Reading Moby Dick</h1></a>
                    </NavLink>
                    <span className = "postedOn">Posted on May 6, 2021</span>
                </div>
                <div className = "postImage">
                    <img src = {blog3} className = "Image3 Image" alt = "image"/>
                </div>
            </Card>

            <Card>
                <div className = "blogHeader">
                    <NavLink to = "/10-Tips-For-Hosting-A-Digital-Book-Club" className = "blogTitle">
                        <a><h1 className = "blog4">10 Tips For Hosting A Digital Book Club</h1></a>
                    </NavLink>
                    <span className = "postedOn">Posted on April 6, 2021</span>
                </div>
                <div className = "postImage">
                    <img src = {blog4} className = "Image4 Image" alt = "image"/>
                </div>
            </Card>
        </div>
    )
};

export default BlogPost;