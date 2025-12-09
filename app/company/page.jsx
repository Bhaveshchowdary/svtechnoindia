"use client";

import React from "react";
import "./page.css";

const keyPersons = [
  {
    name: "Mr. Murugesh Venkat Sruzith (South zone Operational head / Technical Director)",
    desc: `He is a Mechanical Engineering graduate from JNTU University with BOE certification.
    He is also certified by Dassault Systems in mechanical and aerospace designing. With over 5 years
    of experience in the refinery and power industry, he has expertise in power plant erection,
    commissioning, and the operation and maintenance of refineries and thermal power plants.`
  },
  {
    name: "G. Sajeev Kumar (Managing Partner / E&I Head)",
    desc: `He is an Instrumentation Engineer with over 19 years of experience in the marine and power sectors.
    He has extensive expertise in the erection, commissioning, operation, and maintenance of large gas and thermal
    power plants. Additionally, he has significant experience in servicing and maintaining gas and steam turbo
    generator sets and rotating equipment, as well as in operation and maintenance within the marine sector.`
  },
  {
    name: "Mr. CH. Venkatesh (Managing partner / Director of Planning Dpt)",
    desc: `He holds a Diploma in Mechanical Engineering with BOE certification and has over 19 years of experience
    in the power sector. He has extensive expertise in the erection, commissioning, operation, and maintenance of
    large gas and thermal power plants, and experience in servicing and maintaining gas and steam turbo generator sets
    and rotating equipment, including AFBC and travelling grate boilers.`
  },
  {
    name: "Mr. Ramesh Gadi (Managing Director)",
    desc: `He holds a Diploma in Electrical Engineering and has over 25 years of experience in the power sector,
    specifically in the sugar, paper, and oil & gas industries. Extensive experience in power plant commissioning
    and the operation and maintenance of large thermal power plants, with significant expertise in high-pressure boilers
    including AFBC and travelling grate boilers.`
  }
];

export default function Company() {
  return (
    <section className="company-section">

      <div className="company-content">
        {/* HERO title area */}
        <div className="company-hero-inner">
          <h1 className="company-title">Company</h1>
        </div>

        {/* central container */}
        <div className="company-inner">

          {/* about card */}
          <div className="company-wrapper fadeup" style={{ animationDelay: "0.05s" }}>
            <article className="company-card">
              <h2>About Us</h2>

              <p className="lead"><strong>SV Techno craft and Engineering services</strong> is a highly experienced engineering and technical-services provider company established on <strong>28-Oct-2022</strong>.</p>

              <p>
                <strong>SV Techno craft and Engineering services</strong> (hereafter <strong>SVTCE</strong>) is registered under section 58(1) of the India Partnership Act 1932 and has its office at <strong>Nellore, Andhra Pradesh</strong>. SVTCE specializes in technical services of power projects and refineries — from fabrication and erection to commissioning, material & equipment supply, and long-term operation and maintenance services.
              </p>

              <p>
                SVTCE is committed to integrity, quality workmanship, scheduled completions, and the safety of the people we serve and employ. With decades of experience in the emerging power market, our organization prides itself on professionalism, commitment, and integrity.
              </p>
            </article>
          </div>

          {/* inline image */}
          <div className="company-wrapper fadeup" style={{ animationDelay: "0.18s" }}>
          </div>

          {/* continued about */}
          <div className="company-wrapper fadeup" style={{ animationDelay: "0.32s" }}>
            <article className="company-card">
              <p>
                The founding members of SVTCE possess extensive experience in the power industry and oil refineries, covering all aspects from greenfield development and construction to long-term operation and maintenance. The key personnel have served in this market for more than 25 years, delivering multiple successful construction, commissioning, and plant operation projects.
              </p>
            </article>
          </div>

          {/* key persons list (each item staggered) */}
          <div className="company-wrapper fadeup" style={{ animationDelay: "0.46s" }}>
            <article className="company-card">
              <h2>Personnel Profile of key persons</h2>

              <div className="kp-list">
                {keyPersons.map((kp, idx) => (
                  <div
                    className="kp-wrapper"
                    key={idx}
                    style={{ animationDelay: `${0.55 + idx * 0.15}s` }} /* per-item stagger inline */
                  >
                    <div className="kp-item">
                      <h3 className="kp-name">{kp.name}</h3>
                      <p className="kp-desc">{kp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
