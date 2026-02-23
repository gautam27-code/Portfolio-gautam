import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loader"
      style={{
        top: isVisible ? "0%" : "-100%",
        transition: "top 0.5s ease",
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
        position: "fixed",
        zIndex: 999,
        top: isVisible ? 0 : "-100%",
        transition: "all ease 0.7s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <h1 style={{ color: "transparent", fontSize: "4vw", WebkitTextStroke: "1px #fff" }}>Design</h1>
      <h1 style={{ color: "transparent", fontSize: "4vw", WebkitTextStroke: "1px #fff" }}>Develop</h1>
      <h1 style={{ color: "transparent", fontSize: "4vw", WebkitTextStroke: "1px #fff" }}>Deploy</h1>
    </div>
  );
};

export default Loader;
