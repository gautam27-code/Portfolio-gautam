import React, { useEffect } from "react";

const ContactPanel = ({ isOpen, onClose }) => {

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    return (
        <div className={`contact-overlay ${isOpen ? "open" : ""}`}>
            {/* Blue backdrop on the bottom half */}
            <div className="contact-backdrop" onClick={onClose}></div>

            {/* The panel sliding from top */}
            <div className="contact-panel">
                <button className="contact-close" onClick={onClose}>✕</button>

                <div className="contact-links">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:contact@example.com">Email</a>
                    <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">Leetcode</a>
                    <a href="https://github.com/gautam27-code" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default ContactPanel;