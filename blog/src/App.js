import React from "react";
import './App.css';
import Header from './components/Header/Header.js';
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReachOut from "./pages/ReachOut/ReachOut";
import Footer from './components/Footer/Footer.js';
import Blog1 from "./pages/Blog1/Blog1.js";
import Blog2 from "./pages/Blog2/Blog2";
import Blog3 from "./pages/Blog3/Blog3";
import Blog4 from "./pages/Blog4/Blog4";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path = "/" exact component = { Home } />
        <Route path = "/contact-me" component = { ReachOut } />
        <Route path = "/10-Essay-Collections-For-When-A-Novel-Feels-Too-Much" component = { Blog1 } />
        <Route path = "/5-LGBTQ+-Books-To-Read-Now-&-Always" component = { Blog2 } />
        <Route path = "/Detransition-Baby-Author-Torrey-Peter-Procrastinates-By-Reading-Moby-Dick" component = { Blog3 } />
        <Route path = "/10-Tips-For-Hosting-A-Digital-Book-Club" component = { Blog4 } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;