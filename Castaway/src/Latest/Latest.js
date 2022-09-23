import React from "react";
import Episode_1 from './Episode_1';
import Episode_2 from './Episode_2';
import Episode_3 from './Episode_3';
import './latest.css';


function Latest() {
    return (
        <div className="latest">
            <div className="latest_top">
                <div><p className="latest_top_p">Latest episodes</p></div>
                <div><button className="latest_top_button" type="button" name="View all episodes">View all episodes</button></div>
            </div>
            <Episode_3/>
            <Episode_2/>
            <Episode_1/>
        </div>
    );
}

export default Latest;
