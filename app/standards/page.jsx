import React from "react";
import "./page.css";

const standards = [
  {
    title: "Piping",
    items: [
      "Material Verification",
      "Welding Procedure",
      "Non-Destructive Testing (NDT)",
      "Hydrostatic Testing Documentation"
    ]
  },
  {
    title: "Structures",
    items: [
      "Material Inspection",
      "Fabrication & Installation Checks",
      "Welding Inspection",
      "Dimensional Verification",
      "Coating / Protective System Application"
    ]
  },
  {
    title: "Tankage",
    items: [
      "Material Verification",
      "Welding Procedure (WP)",
      "NDT (Radiography, Ultrasonic)",
      "Hydrostatic Testing",
      "Coating / Lining Application"
    ]
  },
  {
    title: "QAP Stages",
    items: [
      "Ensures Compliance with Codes & Standards",
      "Enhances Safety",
      "Reduces Rework & Costs",
      "Improves Reliability",
      "Increases Customer Satisfaction"
    ]
  },
  {
    title: "Relevant Standards",
    items: [
      "ASME B31.1 (Power Piping)",
      "ASME B31.3 (Process Piping)",
      "API 650 (Storage Tanks)",
      "AISC (American Institute of Steel Construction)",
      "AWS (American Welding Society)"
    ]
  },
  {
    title: "Documentation",
    items: [
      "Quality Manuals",
      "Inspection & Test Plans (ITP)",
      "Welding Procedure Specifications (WPS)",
      "Material Certification",
      "Inspection Reports"
    ]
  }
];

const hsItems = [
  {
    title: "1. Commitment to Zero Harm:",
    desc: "We are dedicated to providing a safe and healthy work environment, ensuring zero harm to employees, contractors, and the community."
  },
  {
    title: "2. Compliance with Regulations:",
    desc: "We adhere to all relevant health & safety laws, regulations, and industry standards."
  },
  {
    title: "3. Risk Management:",
    desc: "We identify, assess and mitigate potential risks to prevent accidents and injuries."
  },
  {
    title: "4. Employee Training & Awareness:",
    desc: "Regular HSE training programs to educate employees on best practices and safe procedures."
  },
  {
    title: "5. Incident Reporting & Investigation:",
    desc: "Prompt reporting and investigation of incidents to prevent recurrence."
  },
  {
    title: "6. Emergency Preparedness:",
    desc: "Established emergency response plans to ensure timely and effective responses."
  },
  {
    title: "7. Occupational Health:",
    desc: "Monitoring and managing workplace health hazards to prevent work-related illnesses."
  }
];

export default function StandardsPage() {
  return (
    <div className="standards-container">
      <div className="standards-inner">

        <h1 className="standards-title">Our Standards</h1>

        <p className="standards-intro">
          SV Techno Craft and Engineering Services is committed to maintaining the best
          quality of work in all possible aspects and providing a documented list of
          plans in order to accomplish the Quality of work.
        </p>

        {/* ===== STANDARDS GRID ===== */}
        <div className="standards-grid">
          {standards.map((s, i) => (
            <div
              className="standard-block fadeup"
              key={s.title}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <h2 className="standard-heading">{s.title}</h2>
              <ul>
                {s.items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== HEALTH & SAFETY SECTION ===== */}
        <section className="hs-section fadeup" style={{ animationDelay: `${standards.length * 0.12 + 0.12}s` }}>
          <p className="hs-intro">
            "At SV TECHNO CRAFT AND ENGINEERING SERVICES, we prioritize the health, safety,
            and well-being of our employees, contractors, and the community. Our goal is to
            achieve zero harm and ensure a safe, healthy, and environmentally responsible operation."
          </p>

          <h2 className="hs-title">Health and Safety</h2>

          <div className="hs-list">
            {hsItems.map((h, idx) => (
              <div className="hs-item" key={idx}>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
