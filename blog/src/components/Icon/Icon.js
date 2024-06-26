import React from "react";
import './Icon.css';

const Icon = props => {
    return (
        <>
            <div className = "icon">
                Welcome to my blog!
            </div>
            <p className="disclaimer">
                DISCLAIMER: Source of content - <a href="https://www.bustle.com/bustle-book-club">Bustle Book Club</a>
            </p>
        </>
    )
}

export default Icon;