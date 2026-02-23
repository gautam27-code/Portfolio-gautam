import React from "react";

const FullScreenMenu = ({ isOpen, closeMenu }) => {
    return (
        <div
            id="full-scr"
            style={{
                top: isOpen ? "0%" : "-140%",
                transition: "all ease 0.8s",
            }}
        >
            <div id="full-div1">
                <h1>
                    <a
                        href="/Gautam_Jain_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={closeMenu}
                    >
                        RESUME
                    </a>
                </h1>
                <h1>DESIGN</h1>
                <h1>CONTACT</h1>
            </div>
        </div>
    );
};

export default FullScreenMenu;
