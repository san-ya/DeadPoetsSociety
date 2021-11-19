import React from "react";
import Card from "../../components/Card/Card.js";
import blog2 from '../../assets/blog2.jpeg';
import './Blog2.css';
import book1 from '../../assets/book_1.jpg';
import book2 from '../../assets/book_2.jpg';
import book3 from '../../assets/book_3.jpg';
import book4 from '../../assets/book_4.jpg';
import book5 from '../../assets/book_5.jpg';
import { Row, Col } from "react-bootstrap";

const Blog2 = props => {
    return (
        <>
            <Card>
                <h1 className = "blog2Title">5 LGBTQ+ Books To Read Now & Always</h1>
                <div className = "postedOn2">Posted on June 6, 2021</div>
                <img src = {blog2} alt = "image" className = "Image_blog2" />
                <div className = "intro_blog2">
                    <p>Happy Pride Month, everyone!</p>
                    <p>Whether you’ve been going to Pride events for as long as you can remember, or are looking forward to taking part in your first Pride parade this year, the 5 books on this list by LBGTQ+ authors are just what you need on your nightstand — this June, and beyond.</p>
                </div>
                <div className = "books">
                    <Row className = "bookInfo">
                        <img src = {book1} className = "bookImage" />
                        <Col className = "bookDesc">
                            <br />
                            <h1>1.</h1>
                            <h3 className = "bookTitle">Ace: What Asexuality Reveals About Desire, Society, and the Meaning of Sex</h3>
                            <div>Perhaps the most misunderstood sexual orientation, asexuality is the lack of sexual attraction to anyone, regardless of gender. Ace people — and aromantic people, who do not experience romantic attraction — are often treated as if they have some form of sexual dysfunction, and they may struggle to find their experiences represented in pop culture and literature. In Ace, Angela Chen explores asexuality in the modern day, and analyzes what mainstream culture’s treatment of asexual people reveals about society’s relationship to sex, romance, queerness, and intimacy.</div>
                        </Col>
                    </Row>
                    <Row className = "bookInfo">
                        <img src = {book2} className = "bookImage" />
                        <Col className = "bookDesc">
                            <br />
                            <br />
                            <br />
                            <h1>2.</h1>
                            <h3 className = "bookTitle">Boy Meets Boy</h3>
                            <div>David Levithan’s Boy Meets Boy follows a sophomore attending an LBGTQ+ friendly high school. When a mistake foils his chance at love with the boy he’s certain is the one, our protagonist must figure out a way to defy the odds and win him back .</div>
                        </Col>
                    </Row>
                    <Row className = "bookInfo">
                        <img src = {book3} className = "bookImage" />
                        <Col className = "bookDesc">
                            <br />
                            <br />
                            <br />
                            <h1>3.</h1>
                            <h3 className = "bookTitle">Call Me by Your Name</h3>
                            <div>André Aciman’s bestseller won the Lambda Literary Award for Gay Fiction, and the movie adaptation of the same name took home the Academy Award for Best Adapted Screenplay. Set along the Italian Riviera in the 1980s, Call Me by Your Name centers on 17-year-old Elio, a bisexual Jewish boy, who has a passionate affair with an older Jewish med student, 24-year-old Oliver, during one fateful summer.</div>
                        </Col>
                    </Row>
                    <Row className = "bookInfo">
                        <img src = {book4} className = "bookImage" />
                        <Col className = "bookDesc">
                            <br />
                            <br />
                            <br />
                            <h1>4.</h1>
                            <h3 className = "bookTitle">How We Fight for Our Lives</h3>
                            <div>Saeed Jones’ memoir of growing up Black and gay in the American South won the Lambda Literary Award for Gay Memoir/Biography and the Kirkus Prize for Nonfiction. Moving between rhyme and reason, <i>How We Fight for Our Lives</i> investigates how individuals — particularly marginalized individuals — come into their own.</div>
                        </Col>
                    </Row>
                    <Row className = "bookInfo">
                        <img src = {book5} className = "bookImage" />
                        <Col className = "bookDesc">
                            <br />
                            <br />
                            <br />
                            <h1>5.</h1>
                            <h3 className = "bookTitle">Hunger Makes Me a Modern Girl</h3>
                            <div>From Sleater-Kinney founder and Portlandia star Carrie Brownstein comes this bestselling memoir of growing up bisexual in a wash of punk rock and ’90s grunge.</div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </>
    )
};

export default Blog2;