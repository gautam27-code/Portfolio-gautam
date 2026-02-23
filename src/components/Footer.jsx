import React from "react";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div id="gooeyE"></div>
                <div id="gooeyE2"></div>
                <div id="gooeyE3"></div>

                <div id="footer-div">
                    <div className="footer-cont">
                        <h2 style={{ fontSize: "40px" }}>Work</h2>
                        <h2 style={{ fontSize: "40px" }}>Studio</h2>
                        <h2 style={{ fontSize: "40px" }}>Contact</h2>
                    </div>
                    <div className="footer-cont">
                        <h2>Hope it was interesting visiting my website!</h2>
                    </div>
                </div>
                <h1>Gautam</h1>
                <div id="footer-bottom">
                    <h3>
                        <a
                            href="https://www.linkedin.com/in/gautamjain114/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                        >
                            Linkedin
                        </a>
                    </h3>
                    <h3>
                        <a
                            href="https://www.instagram.com/gautam_jain.09/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                        >
                            Instagram
                        </a>
                    </h3>
                    <h3>
                        <a
                            href="https://github.com/gautam27-code"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
                        >
                            GitHub
                        </a>
                    </h3>
                    <h3>Thanks For visit 🤍</h3>
                </div>
            </div>
        </>
    );
};

export default Footer;
