import React from "react";
import './episode.css';

function Episode_3() {
    return (
        <div className="episode">
            <div className="episode_right">
                <img className="episode_right_img" src={require("../images/episode_3.png")} alt="#"/>
            </div>
            <div className="episode_left">
                <a href="/"><p className="episode_left_category">Gear</p></a>
                <p className="episode_left_episode">Episode 3</p>
                <a href="/"><h2 className="episode_left_name">Should you get outboard audio gear?</h2></a>
                <p className="episode_left_text">Is hardware really worth it when it comes to podcasting? The answer
                    is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
                <div>
                    <button className="episode_left_button" type="button" name="View Episode Details">View Episode
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Episode_3;
