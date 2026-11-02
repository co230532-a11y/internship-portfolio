import React, { useState } from "react";
import reflections from "/reflections_data.json";

function Reflection() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [1, 2, 3, 4, 5];

  const titles = {
    3: "Risk Assessment",
    4: "Information Security Audit"
  };
  const getTitle = (tab) => titles[tab] || `Reflection ${tab}`;

  const activeReflectionText = reflections[activeTab];

  return (
    <>
      <div className="nav-fixed-frame">
        <a href="/" className="logo" style={{ textDecoration: "none", color: "white" }}>KHAN</a>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center" }}>
          <nav className="capsule-dock">
            <a href="/" className="dynamic-anchor">Home</a>
          </nav>
          <a href="/" style={{ 
            position: "absolute",
            left: "100%",
            marginLeft: "50px",
            whiteSpace: "nowrap",
            color: "#ff5a1f", 
            fontSize: "0.75rem", 
            fontWeight: "500",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            cursor: "pointer",
            opacity: "0.9"
          }}>
            <i className="fa-solid fa-arrow-left"></i> Check my portfolio
          </a>
        </div>
      </div>

      <section className="agent-canvas" id="reflection-infrastructure" style={{ paddingTop: "120px" }}>
        <div className="agent-container">
          
          <div className="agent-header">
            <div className="header-badge">
              <span className="pulse-beacon"></span>
              INFORMATION SECURITY
            </div>
            <h2>Reflection Papers</h2>
            <div className="pipeline-tag">ACADEMIC // INSIGHTS</div>
          </div>

          <div className="filter-navigation-bar" style={{ marginBottom: "40px", justifyContent: "flex-start" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`filter-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {getTitle(tab)}
              </button>
            ))}
          </div>

          <div className="agent-grid">
            
            <div className="agent-visual-panel">
              <div className="embedded-terminal">
                <div className="term-bar">
                  <span className="t-dot"></span>
                  <span className="t-dot"></span>
                  <span className="t-dot"></span>
                  <span className="term-label">security_reflection_{activeTab}.sh</span>
                </div>
                <div className="term-body">
                  <p><span className="p-sign">khan@infrastructure:~#</span> cat reflection_{activeTab}.txt</p>
                  <p className="p-out">// LOADING REFLECTION DATA...</p>
                  <p className="p-out">[SUCCESS] Insights verified.</p>
                  <p><span className="p-sign">khan@infrastructure:~#</span> analyze --context</p>
                  <p className="p-out" style={{ color: "#ff5a1f" }}>SYSTEM STABLE // SECURITY PRINCIPLES APPLIED</p>
                  <p><span className="p-sign">khan@infrastructure:~#</span> <span className="term-cursor">▒</span></p>
                </div>
              </div>

              <div className="integration-breakdown" style={{ marginTop: "30px" }}>
                <div className="breakdown-row">
                  <div className="row-meta">
                    <span className="row-num">01</span>
                    <h4>McCumber Cube</h4>
                  </div>
                  <p>Information States, Security Goals, and Safeguards shaping the foundation of systems.</p>
                </div>
                <div className="breakdown-row">
                  <div className="row-meta">
                    <span className="row-num">02</span>
                    <h4>Authentication & Authorization</h4>
                  </div>
                  <p>Structuring clean role-based boundaries and ensuring confidentiality.</p>
                </div>
                <div className="breakdown-row">
                  <div className="row-meta">
                    <span className="row-num">03</span>
                    <h4>Economy of Mechanism</h4>
                  </div>
                  <p>Balancing development time with security, simplifying complex systems.</p>
                </div>
              </div>
            </div>

            <div className="agent-content-panel">
              <h3>{getTitle(activeTab)}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
                {activeReflectionText.split('. ').length > 2 ? (
                  activeReflectionText.split('. ').map((sentence, i) => {
                    if (i % 3 === 0) {
                      const paragraph = activeReflectionText.split('. ').slice(i, i + 3).join('. ');
                      const suffix = (i + 3 < activeReflectionText.split('. ').length && !paragraph.endsWith('.')) ? '.' : '';
                      return <p key={i}>{paragraph}{suffix}</p>;
                    }
                    return null;
                  })
                ) : (
                  <div style={{ 
                    padding: "20px", 
                    border: "1px dashed rgba(255,255,255,0.2)", 
                    borderRadius: "10px",
                    color: "rgba(255,255,255,0.6)",
                  }}>
                    {activeReflectionText}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Reflection;
