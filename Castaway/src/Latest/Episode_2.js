import React from "react";
import './episode.css';

function Episode_2() {
    return (
        <div className="episode">
            <div className="episode_right">
                <img className="episode_right_img" src={require("../images/episode_2.png")} alt="#"/>
            </div>
            <div className="episode_left">
                <a href="/"><p className="episode_left_category">Tips & Tricks</p></a>
                <p className="episode_left_episode">Episode 2</p>
                <a href="/"><h2 className="episode_left_name">Mic tricks to take you to the next level</h2></a>
                <p className="episode_left_text">Stop rolling with those default settings on your mic. These small
                    tweaks will take you from sounding good to great.</p>
                <div>
                    <button className="episode_left_button" type="button" name="View Episode Details">View Episode
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Episode_2;
