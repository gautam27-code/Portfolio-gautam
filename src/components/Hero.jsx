import React from "react";

const Hero = () => {
    return (
        <>
            <div id="center">
                <div id="left">
                    <h3>
                        “I’m a creative web developer and designer, crafting digital
                        experiences that blend code, design, and storytelling.”
                    </h3>
                </div>
                <div id="right">
                    <h1>
                        PIXELS <br />
                        WITH <br />
                        PURPOSE
                    </h1>
                </div>
            </div>
            <div id="hero-shape">
                <div id="hero-1"></div>
                <div id="hero-2"></div>
                <div id="hero-3"></div>
            </div>

            {/* browser does'nt allow play sound automatically so muted */}
            <video autoPlay loop muted src="/video.mp4"></video>
        </>
    );
};

export default Hero;
