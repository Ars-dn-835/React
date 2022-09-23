import React from "react";
import Layout from "../components/layout";
import Article from "../components/acrticle";
import ArticleContent from "../components/acrticle";
import ArticleMedia from "../components/acrticle";
import Images from "../components/images";

export default function About() {
    return (
        <>
            <Layout>
                <Article>
                    <ArticleContent className="text" title="ABAUT">
                        <h1>About</h1>
                        <p> Holly is a free HTML/CSS landing page designed and developed by @pacovitiello and
                            @DavidePacilio!
                        </p>
                        <p>Holly is suitable for all kind of startups, it's easily customizable, and it's downloadable
                            for
                            personal
                            and commercial use.</p>
                        <p> This template is distributed under the MIT License.
                        </p>
                    </ArticleContent>
                    <ArticleMedia className="images">
                        <img
                            src="https://picsum.photos/420/640?grayscale"
                            alt="Lorem Picsum"
                        />
                        <Images
                            src={require("../assets/images/Screenshot_2.jpg")}
                            className="imgClass"
                            width="420px"
                            height="640px"
                            alt="one"

                        />
                    </ArticleMedia>
                </Article>
            </Layout>
        </>
    )
}