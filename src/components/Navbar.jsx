import React from "react";

const Navbar = ({ toggleMenu, openContact }) => {
    return (
        <nav>
            {/* semantics */}
            <h1>gautam.space</h1>
            <div id="nav-part2">
                <h4><a href="#">Work</a></h4>
                <h4>
                    <a
                        href="/Gautam_Jain_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </h4>
                <h4>
                    <button onClick={openContact}>
                        Contact
                    </button>
                </h4>
            </div>
            <h3 onClick={toggleMenu} style={{ cursor: "pointer" }}>Menu</h3>
        </nav>
    );
};

export default Navbar;


// Why button instead of <a>?
// <a> → navigation (page reload)
// button → triggers React logic (state change)