import React from "react";
import './Home.css';
import TopBanner from "../../components/TopBanner.js";
import BlogPost from "../../components/BlogPost/BlogPost.js";
import Contents from "../../components/Contents/Contents";

const Home = props => {
    return (
        <>
            <TopBanner />
            <section className = "postContainer">
                <Contents />
                <BlogPost />
            </section>
        </>
    )
};

export default Home;