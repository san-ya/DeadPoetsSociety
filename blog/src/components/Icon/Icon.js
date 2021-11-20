import React from "react";
import './Icon.css';

const Icon = props => {
    return (
        <>
            <div className = "icon">
                Welcome to my blog!
            </div>
            <div className = "author">
                <div>by</div>
                SANYA BANSAL
            </div>
            <p className="disclaimer">
                DISCLAIMER! All dummy text has been taken from - <a href="https://www.bustle.com/bustle-book-club">Bustle Book Club</a>
            </p>
        </>
    )
}

export default Icon;