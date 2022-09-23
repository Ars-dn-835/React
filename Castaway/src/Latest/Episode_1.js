import React from "react";
import './episode.css';

function Episode_1() {
    return (
        <div className="episode">
            <div className="episode_right">
                <img className="episode_right_img" src={require("../images/episode_1.png")} alt="#"/>
            </div>
            <div className="episode_left">
                <a href="/"><p className="episode_left_category">Gear</p></a>
                <p className="episode_left_episode">Episode 1</p>
                <a href="/"><h2 className="episode_left_name">The best microphone under $200</h2></a>
                <p className="episode_left_text">With so many microphones on the market, how are you supposed to know
                    what’s the best? Take a look at our top picks.</p>
                <div>
                    <button className="episode_left_button" type="button" name="View Episode Details">View Episode Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Episode_1;
