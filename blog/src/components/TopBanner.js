import React from "react";
import Card from "../components/Card/Card.js";
import Icon from "../components/Icon/Icon.js";

const TopBanner = props => {
    return(
        <div>
            <Card>
                <div style = {{padding: '100px 0'}}>
                    <Icon />
                </div>
            </Card>
        </div>
    )
};

export default TopBanner;