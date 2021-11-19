import React from "react";
import './BookList.css';
import { Row, Col } from "react-bootstrap";
import book1 from "../../assets/book1.jpeg";
import book2 from "../../assets/book2.jpeg";
import book3 from "../../assets/book3.jpg";
import book4 from "../../assets/book4.jpg";
import book5 from "../../assets/book5.jpg";
import book6 from "../../assets/book6.jpg";
import book7 from "../../assets/book7.jpg";
import book8 from "../../assets/book8.jpg";
import book9 from "../../assets/book9.jpg";
import book10 from "../../assets/book10.jpg";

const BookList = props => {
    return (
        <div className = "books">
            <br />
            <Row className = "testing123">
                <Col>
                <img src = {book1} className = "bookImages" />
                </Col>
                <div>
                    <Col className = "bookDesc">
                        <h3 className = "bookTitle">In the Garden: Essays on Nature and Growing</h3>
                        <div>In this collection of essays, fourteen writers go beyond simply considering a plot of soil to explore how gardening is a shared language, an opportunity for connection, something that is always evolving. Penelope Lively trains her gardening eye on her gardens past and present; Paul Mendez reflects on the image of the paradisal garden; Jon Day asks whether an urban community garden can be a radical place; and Victoria Adukwei Bulley considers the power of herbs and why there is no such thing as a weed.</div>
                        <div>A collection about gardening unlike any other, <i>In the Garden</i> brings together fourteen brilliant writers to interrogate what is most important and pressing about growing today.</div>
                        <br />
                        <div className = "line"><hr /></div>
                    </Col>
                </div>
            </Row>
            
            <Row className = "testing123">
                <Col>
                <img src = {book2} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <h3 className = "bookTitle">In The Kitchen: Essays on Food and Life</h3>
                    <div>In these essays thirteen writers consider the subjects of cooking and eating and how they shape our lives, and the possibilities and limitations the kitchen poses. Rachel Roddy traces an alternative personal history through the cookers in her life; Rebecca May Johnson considers the radical potential of finger food; Ruby Tandoh discovers other definitions of sweetness through the work of writer Doreen Fernandez; Yemisí Aríbisálà remembers a love affair in which food failed as a language; and Julia Turshen considers food’s ties to community.</div>
                    <div>A collection to savour and inspire, <i>In the Kitchen</i> brings together thirteen contemporary writers whose work brilliantly explores food, capturing their reflections on their experiences in the kitchen and beyond.</div>
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book3} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <h3 className = "bookTitle">Intimations</h3>
                    <div>Deeply personal and powerfully moving, a short and timely series of reflective essays by one of the most clear-sighted and essential writers of our time. Written during the early months of lockdown, <i>Intimations</i> explores ideas and questions prompted by an unprecedented situation.</div>
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book4} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <h3 className = "bookTitle">Some Body To Love</h3>
                    <div>Some Body to Love is Alex's profoundly open-hearted memoir about losing her husband but gaining a best friend, and together bringing up a baby in a changing world. Its exploration of what it means to have a human body, to feel connected or severed from it, and how we might learn to accept our own, makes it a vital and inspiring contribution to some of the most complex and heated conversations of our times.</div>
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book5} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <br />
                    <h3 className = "bookTitle">The Librarian</h3>
                    <div>I'm sharing stories from my daily life to show you that being a librarian isn't what you think it is. Libraries are falling apart at the seams and we need to start caring before its too late. So this is my eye-opening account of the strange and wonderful library that saved me and why I'm on a mission to save yours.</div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book6} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <h3 className = "bookTitle">The Panic Years</h3>
                    <div>Every woman will experience the panic years in some way between her mid-twenties and early-forties.</div>
                    <div>This maddening period of transformation and personal crisis is recognisable by the myriad of decisions we make - about partners, holidays, jobs, homes, savings, friendships - all of which are impacted by the urgency of the single decision that comes with a biological deadline, the one decision that is impossible to take back; whether or not to have a baby.</div>
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book7} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <h3 className = "bookTitle">It's Not About The Burqa</h3>
                    <div>Taking one of the most politicized and misused words associated with Muslim women and Islamophobia, It's Not About the Burqa is poised to change all that. Here are voices you won't see represented in the national news headlines: seventeen Muslim women speaking frankly about the hijab and wavering faith, about love and divorce, about feminism, queer identity, sex, and the twin threats of a disapproving community and a racist country.</div>
                    <div>What does it mean, exactly, to be a Muslim woman in the West today? According to the media, it's all about the burqa.</div>
                    <div>Here's what it's really about.</div>
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book8} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <br />
                    <h3 className = "bookTitle">Real Estate</h3>
                    <div>Home means different things to different people. For you, it might be where you were born or grew up. It might be your chosen home. In Deborah Levy's latest meditation on living, she explores what possessions and roperty mean and how they can define us.</div>
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book9} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <h3 className = "bookTitle">The Good Immigrant</h3>
                    <div>The authors have come together to talk about what it means to be a 'good' immigrant in today's world. From hearing your native language misappropriated and used against you, to answering the question, "Where are you from?", these essays are honest, heartbreaking, and, at times, hilarious too.</div>
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>

            <Row className = "testing123">
                <Col>
                <img src = {book10} className = "bookImages" />
                </Col>
                <Col className = "bookDesc">
                    <br />
                    <br />
                    <br />
                    <h3 className = "bookTitle">Books v. Cigarettes</h3>
                    <div>At the very beginning of <i>Books v Cigarettes</i>, George Orwell reflects on which addiction he spends more money on. This essay collection goes on to talk about the magic of second-hand bookshops and the people who fill them.</div>
                    <br />
                    <br />
                    <br />
                    <div className = "line"><hr /></div>
                </Col>
            </Row>
        </div>
    )
};

export default BookList;