import React, { useState } from "react";
import img from "../assets/gautam.png"

const Projects = () => {
    const [fixedImage, setFixedImage] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    const projects = [
        { name: "Air Force 2021", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/gautam27-code" },
        { name: "Track Back App", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/gautam27-code/BEE-final.git" },
        { name: "Apple UI clone", image: "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/gautam27-code" },
        { name: "Smart Expense Tracker", image: "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/gautam27-code/Expense-track-backend.git" },
        { name: "Smart Pdf Reader (python + docker)", image: "https://images.unsplash.com/photo-1598190896090-9dc5c70361d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://github.com/jaingautam14/BinaryBrains_Challenge1b.git" },
        { name: "Multiplayer Gaming Platform", image: "https://images.unsplash.com/photo-1511296265581-c2450046447d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://multiplayer-gaming-platform.vercel.app/" },
        { name: "Project Management Tool", image: "https://i.pinimg.com/564x/12/75/ec/1275eca00efa74a6705175b0a86d205d.jpg", link: "https://github.com/gautam27-code/Work-management-tool-Hira.git" },
        { name: "Gautam - Instagram", image: img, link: "https://www.instagram.com/gautam_jain.09/" },
    ];

    return (
        <div id="page3">
            {/* Moved fixed-img here, controlled by React state */}
            <div
                id="fixed-img"
                style={{
                    display: isHovering ? "block" : "none",
                    backgroundImage: fixedImage ? `url(${fixedImage})` : "none"
                }}
            ></div>

            <span>
                <div id="gola"></div>
                <p>Featured projects</p>
            </span>

            <div
                id="elem-container"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {projects.map((proj, index) => (
                    <a
                        key={index}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div
                            className="elem"
                            onMouseEnter={() => setFixedImage(proj.image)}
                        >
                            <div className="overlay"></div>
                            <h2>{proj.name}</h2>
                        </div>
                    </a>
                ))}
            </div>

            <div id="quote">
                <p>
                    <i>"Design creates culture. Culture shapes values. Values determine the future."</i>
                    <br />– Robert L. Peters
                </p>
            </div>
        </div>
    );
};

export default Projects;
