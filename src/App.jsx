import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import DesignCodeExecute from "./components/DesignCodeExecute";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import FullScreenMenu from "./components/FullScreenMenu";
import ContactPanel from "./components/ContactPanel";

const App = () => {
    const containerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <>
            <Loader />
            <FullScreenMenu
                isOpen={isMenuOpen}
                closeMenu={() => setIsMenuOpen(false)}
            />

            <ContactPanel
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <div id="main" ref={containerRef} data-scroll-container>
                <div id="page1" data-scroll-section>
                    <Navbar
                        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                        openContact={() => setIsContactOpen(true)}
                    />
                    <Hero />
                </div>

                <div data-scroll-section>
                    <Marquee />
                </div>

                <div data-scroll-section>
                    <Projects />
                </div>

                <div data-scroll-section>
                    <DesignCodeExecute />
                </div>

                <div data-scroll-section>
                    <TechStack />
                </div>

                <div id="page-6" data-scroll-section></div>
            </div>

            <Footer />
        </>
    );
};

export default App;
