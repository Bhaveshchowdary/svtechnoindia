"use client";
import "./page.css";

const clients = [
  {
    name: "M/s. Uttam Energy Ltd.",
    text: "Supply of Fabrication and erection manpower for Indian Projects."
  },
  {
    name: "M/s. Barath Petroleum Corporation Ltd.",
    text: "Executing Erection of Boiler in 2G Bio Ethanol plant."
  },
  {
    name: "M/s. Uttam Energy Ltd.",
    text: "Executing Fabrication and Erection of Boiler in 2G Bio Ethanol plant under M/s. Barath Petroleum Corporation Ltd."
  },
  {
    name: "M/s. Barath Petroleum Corporation Ltd.",
    text: "Executing Fabrication and Erection of Material handling system in 2G Bio Ethanol plant, Bargar, Odisha."
  },
  {
    name: "Various Clients",
    text: "Executing erection and electrical panel installation and cable tray & cable laying for LT supply for Boiler Material handling systems in 2G Bio Ethanol plants."
  },
  {
    name: "M/s Kumar Agro Refinery",
    text: "Executed plant maintenance, fabrication and erecting of SS tanks and MS pipelines."
  },
  {
    name: "Multiple Projects (summary)",
    text: "Mission commissioning of more than 100 boilers including Oil & Gas variants, AFBC, CFBC, Travel Grate, Servo Grate and Thermic fluid boilers all over India."
  }
];

export default function Clients() {
  return (
    <section className="clients-section">

      <div className="clients-content">
        <div className="clients-hero-inner">
          <h1 className="clients-title">Our Clients</h1>
        </div>
        <div className="clients-inner">

          <div className="clients-list">
            {clients.map((c, i) => (
            <div className="client-wrapper" key={i}>
              <article className="client-item">
                <h3 className="client-name">
                  <span className="client-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="client-name-text">{c.name}.</span>
                </h3>
                <p className="client-desc">{c.text}</p>
              </article>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
