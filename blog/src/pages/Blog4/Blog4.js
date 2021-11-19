import React from "react";
import Card from "../../components/Card/Card.js";
import blog4 from '../../assets/blog4.jpg';
import './Blog4.css';
import Blog4Tips from "../Blog4Tips/Blog4Tips";

const Blog4 = props => {
    return (
        <div>
            <Card>
                <h1 className = "blog4Title">10 Tips For Hosting A Digital Book Club</h1>
                <div className = "postedOn4">Posted on April 6, 2021</div>
                <img src = {blog4} alt = "image" className = "Image_blog4" />
                <div class = "text_blog4">
                    <p>If you've ever dreamed of starting a book club, but worried you didn't have the right space to do it in, we've got some great news for you: meeting up in person is no longer the only way. Starting an online reading group with friends is simple if you follow these tips for hosting a digital book club.</p>
                    <p>In addition to all of the incredible benefits that being in a book club holds normally, there are even more upsides to hosting a digital version. In an online book club, it doesn't matter if your members are in the same city or halfway across the world, because thanks to the power of the internet, you can all be in one digital space at the same time.</p>
                    <Blog4Tips />
                </div>
            </Card>
        </div>
    )
};

export default Blog4;