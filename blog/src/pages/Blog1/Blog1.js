import React from "react";
import Card from "../../components/Card/Card.js";
import blog1post from '../../assets/blog1post.jpg';
import './Blog1.css';
import BookList from "../BookList/BookList";

const Blog1 = props => {
    return (
        <div>
            <Card>
                <h1 className = "blog1Title">10 Essay Collections For When A Novel Feels Too Much</h1>
                <div className = "postedOn1">Posted on July 6, 2021</div>
                <img src = {blog1post} alt = "image" className = "Image_blog1" />
                <div class = "text_blog1">
                    <div className = "intro">
                        <p>Sitting in the sun with a cold drink and a great book is one of life's greatest joys. Getting lost in the life of someone else can be the perfect way to relax. So, when you hit a reading slump it can be incredibly frustrating. So, here are some of the best essay collections to help you beat a summer reading slump. A novel may be too hard to get into but each of these collections is like sitting and having a frank conversation with a friend.</p>
                        <p>From sharing their love of bookshops and gardens to lifting the lid on what home really means, the essayists listed below have captured the rich tapestry of everyday life through their words. There’s something so comforting about getting lost in someone explaining their lived experiences, some you’ll be able to identify with and others that will open your eyes to something totally new.</p>
                        <p>You can dip into these essays one at a time or settle down to take the whole book in, in one go.</p>
                    </div>
                    <br />
                    <BookList />
                </div>
            </Card>
        </div>
    )
};

export default Blog1;