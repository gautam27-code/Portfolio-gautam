import React, { useState } from "react";

const DesignCodeExecute = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Design.", desc: "Desigining for good", image: "/page4img.webp" },
        { title: "Code.", desc: "Coding for future", image: "/pg4img-2.jpg" },
        { title: "Execute.", desc: "Executing to see it!", image: "/pg4img3.jpg" }
    ];

    return (
        <div className="page-4">
            <div className="page-4-cont">
                <div className="pg4-text">
                    {tabs.map((tab, idx) => (
                        <h2
                            key={idx}
                            className={`pg4-tab ${activeTab === idx ? 'active' : ''}`}
                            onClick={() => setActiveTab(idx)}
                        >
                            {tab.title}
                        </h2>
                    ))}
                    <p id="pg4-desc">{tabs[activeTab].desc}</p>
                </div>
                <img src={tabs[activeTab].image} className="pg4img" alt="" />
            </div>
        </div>
    );
};

export default DesignCodeExecute;
