import React from "react";
import './Contents.css';
import Card from "../Card/Card.js";
import { NavLink } from "react-router-dom";

const Contents = props => {
    return (
        <div className = "sidebarContainer">
            <Card>

                <div className = "cardHeader">
                    <span>Contents</span>
                </div>

                <div className = "cardContents">
                    <div className = "postTitle">
                        <NavLink to = "/10-Essay-Collections-For-When-A-Novel-Feels-Too-Much"><h4>10 Essay Collections For When A Novel Feels Too Much</h4></NavLink>
                        <div className = "date">6th July'2021</div>
                    </div>

                    <div className = "postTitle">
                        <NavLink to = "/5-LGBTQ+-Books-To-Read-Now-&-Always"><h4>4 LGBTQ+ Books To Read Now & Always</h4></NavLink>
                        <div className = "date">6th June'2021</div>
                    </div>

                    <div className = "postTitle">
                        <NavLink to = "/Detransition-Baby-Author-Torrey-Peter-Procrastinates-By-Reading-Moby-Dick"><h4>Detransition, Baby Author Torrey Peters Procrastinates By Reading Moby Dick</h4></NavLink>
                        <div className = "date">6th May'2021</div>
                    </div>

                    <div className = "postTitle">
                        <NavLink to = "/10-Tips-For-Hosting-A-Digital-Book-Club"><h4>10 Tips For Hosting A Digital Book Club</h4></NavLink>
                        <div className = "date">6th April'2021</div>
                    </div>
                </div>
                
            </Card>
        </div>
    )
};

export default Contents;