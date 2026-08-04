import React, { useState } from "react";

function Reflection() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [1, 2, 3, 4, 5];

  // Each reflection is separated here for easy editing
  const reflections = {
    1: `As a Computer Science student and amateur software developer, my mindset when building systems has always been focused on implementation and user experience. If I were to scale my knowledge and effort in system development, it was easily 70% functional implementation, 20% making the system look good and efficient to use, and only 10% for security. All the knowledge I kept seeing was about making systems look nice and operate well. I never really had a clear sense of direction when it comes to implementing security or making a system secure, mainly because I had no idea where to start. Security was just an abstract concept—something important, but without a clear guideline. Engaging with the McCumber Cube, the Foundations of Security, and Security Principles completely changed that perspective while working on my current project. Discovering the McCumber Cube gave me an actual idea and a new perspective as a developer. During the discussion, it really caught my attention because I am currently building a Portal System for the University Communications Office. Every single day while developing this portal, I’ve been thinking about how I can make the system I am building actually safe, and how far I can go to declare that it’s secure. In my experience, there are really no 100% secure systems out there, but at least I need to achieve around 70 to 80% security for this portal. Until I discovered the McCumber Cube, I didn't have a clear idea on how to implement these principles. But now, as I continue building the portal system, I finally have a sense of direction. I know what questions to ask myself to verify if my portal is doing something right or at least trying to be secure across its three dimensions: Information States (Storage, Processing, Transmission), Security Goals (Confidentiality, Integrity, Availability), and Safeguards (Technology, Policy & Practice, Human Factors). These ideas aren't just for academic compliance on my part—I am actively applying them to the portal system right now. The more I try to learn about the McCumber Cube, the more eager I feel to explore the Policy and Practice safeguard. As I imagine how this university portal system will actually be used, no matter how good I am at making it safe and secure, the staff, students, and admins using it are still the ones who are vulnerable. If these people don't follow rules, policies, and good practices when using the portal—if they are pabaya—then all the security built into the portal becomes useless. People are the weakest link. As an aspiring developer who wants to work in the military, I’m actually leaning heavily toward learning more about that specific safeguard. Not everyone who uses this university portal will care about computer security, so at the very least, I have to learn how to convince them to follow policies and maintain good practices. I am also very interested in seeing how these theoretical principles translate into real-world applications, which is an absolute must for me as I build this system and grow as a future developer. When it comes to the Foundations of Security, Authentication and Authorization are like partners. It's simple on paper: what's yours is yours, and what's mine is mine. It’s one of those concepts that is very easy to understand conceptually, but very difficult to implement in actual code. Right now in the portal system I am building, I am actively working on the user role features, and Confidentiality is what I am most worried about. Most of the time when testing the portal, when I act as a regular "member" and click certain pages, it directs me to pages meant only for the admin. I also keep asking myself if hashing passwords during user registration in the portal is even enough to protect an account. While I feel confident enough in other aspects of the portal system, Confidentiality is what keeps me concerned every day. Applying Security Principles in practice has forced me to rethink how I organize the portal's codebase. Since I knew from the start that the university portal system would have multiple user roles, I immediately decided to structure my code by role. I created dedicated locations and folders for each user role so that program files for a member don't fetch or mix components belonging to an admin. But balancing development time with security while building this portal is tough. Implementing system components is easy for me, but thinking about security causes serious cognitive fatigue. The part that consumes most of my time isn't writing the portal components themselves, but overthinking security and how every specific component relates to every other part of the system—overthinking tayo malala. This brings me to the hardest challenge I experienced with abstract principles while working on this project: translating the Economy of Mechanism (simplicity) into practice. The principle says we should avoid making complex systems because they are hard to secure. But at what point can a portal system like the one I am building be declared as "complex"? I don't know the exact level of complexity of the system I am currently building, so knowing where that boundary lies is difficult. The hardest part about applying these abstract principles to practical scenario-based problems is that I still struggle to imagine concrete real-world examples to avoid future problems in my portal system. Overall, learning about these frameworks took me out of the mindset of just building features for my project. As I continue developing this university portal system, security can no longer just take up 10% of my focus—it has to be a core part of how I design, structure, and think about the system from start to finish.`,
    2: `

As a Computer Science student and developer, my mindset about cybersecurity was always focused on code preventing bugs, securing databases, and making sure the system architecture holds up. But learning about the threat landscape and social engineering gave me a huge reality check. I realized that even if I build a system that is completely secure on paper, the staff, administrators, and regular users will always be vulnerable. This connects back to what I learned from the McCumber Cube about human factors. People are usually the weakest link in security.

This hit close to home while working on my current project: building the Portal System for the University Communications Office (UCO) at Ateneo de Zamboanga University. Recently, I built an automated feature using a custom Google email bot that emails UCO staff whenever a new task is assigned to them. From a coding standpoint, it works great. But after learning about social engineering, I started worrying about the human side. What if a UCO staff member receives a fake email that looks just like the bot I created? What if they fall for a phishing attack because they trusted the wrong message?

This made me realize that training users or setting rules is not enough. Attackers know how to manipulate people through pressure and deceit. Even someone like me, who knows about cybersecurity, could still fall for a smart trick on a busy day. Telling staff to "only trust emails from the bot address" will not fix the problem. On top of that, if I make the portal overly complex just to force tight security, it becomes hard to use and frustrating to manage. Finding the right balance between simplicity and security is tough.

I already know about technical threats like SQL Injection and rate limiting, but phishing and voice calls (*vishing*) are things I want to study more. I saw the videos showing how attackers get inside a company just by calling a phone number. They are trained to sound trustworthy, and employees give up sensitive access without realizing it. Seeing this made me think back to my goal of working in military cybersecurity. I never thought a simple phone call was such a common way to hack a system. It makes me ask: how can developers build software that protects users from being manipulated offline?

There are many threat terms to remember, but the hardest part of defense is not memorizing names or writing secure backend code, it is managing human behavior. The biggest challenge is finding staff who are always alert to social engineering. Since we cannot expect people to be alert 100% of the time, we need strict policies. For example, private and valuable data should only be shared through in-person checks or mandatory multi-step verification.

Learning about the threat landscape showed me that security does not end at the source code. Developing the UCO Portal for Ateneo de Zamboanga University means designing for real human behavior, including human mistakes. Going forward, I want to build system features that do not just protect the server, but also help keep the users from being tricked.

`,
    3: `To be replaced with your reflection paper for Reflection 3.`,
    4: `To be replaced with your reflection paper for Reflection 4.`,
    5: `To be replaced with your reflection paper for Reflection 5.`
  };

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
                Reflection {tab}
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
              <h3>Reflection {activeTab}</h3>
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
