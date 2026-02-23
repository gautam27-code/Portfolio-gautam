import React from "react";

const Marquee = () => {
    // We duplicate the inner content to make the seamless infinite scroll.
    return (
        <div id="page2">
            <div id="moving-text">
                <div className="con">
                    <h1>DESIGNS</h1>
                    <div id="gola"></div>
                    <h1>STORIES</h1>
                    <div id="gola"></div>
                    <h1>INTERFACES</h1>
                    <div id="gola"></div>
                </div>
                <div className="con">
                    <h1>DESIGNS</h1>
                    <div id="gola"></div>
                    <h1>STORIES</h1>
                    <div id="gola"></div>
                    <h1>INTERFACES</h1>
                    <div id="gola"></div>
                </div>
                <div className="con">
                    <h1>DESIGNS</h1>
                    <div id="gola"></div>
                    <h1>STORIES</h1>
                    <div id="gola"></div>
                    <h1>INTERFACES</h1>
                    <div id="gola"></div>
                </div>
            </div>

            <div id="page2-bottom">
                <h1>
                    From art and craft to coding,<br />
                    I transform blank pages into<br />
                    interactive digital canvases,<br />
                    using techs like MERN & Figma<br />
                    as my brushes of creativity.
                </h1>
                <div id="bottom-part2">
                    <img src="/nike_img.jpg" id="nike-img" alt="Nike" />
                    <p>
                        I’m passionate about creating, solving, and collaborating through
                        code and design. For me, every project is an opportunity to
                        transform ideas into reality while focusing on creativity, detail,
                        and meaningful connections.
                    </p>
                </div>
            </div>
            <div id="gooey"></div>
        </div>
    );
};

export default Marquee;
