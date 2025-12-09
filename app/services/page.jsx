import "./page.css";

const services = [
  {
    title: "Fabrication & Erection",
    desc: "We specialize in the fabrication and erection of all types of pipes, tanks, equipment, and heavy lifting with approved safety standards according to client requirements."
  },
  {
    title: "Technical Manpower Supply",
    desc: "We provide highly skilled technical manpower and maintenance services for power plants, including annual maintenance contracts and specialized operational support."
  },
  {
    title: "Operations & Maintenance",
    desc: "We offer support for operations, maintenance, overhauls, statutory inspections, and electrical inspections with experienced engineering teams."
  },
  {
    title: "Turbine Overhauls",
    desc: "We conduct major and minor overhauls of gas and steam turbines in collaboration with OEMs such as Siemens and LMZ."
  },
  {
    title: "Boiler Inspections",
    desc: "We perform inspections and troubleshooting for HRSG, CFBC, AFBC, and Travelling Grate boilers across various industries."
  },
  {
    title: "Electrical & Cable Works",
    desc: "We undertake HT & LT cable laying, cable tray erection, panel erection, and electrical maintenance activities."
  },
];

export default function ServicesPage() {
  return (
    <div className="services-container">

      <h1 className="services-title">Services</h1>

      <div className="services-list">
        {services.map((item, index) => (
          <div className="service-card fadeup" style={{ animationDelay: `${index * 0.15}s` }} key={index}>

            <div className="service-header">
              <h2>{item.title}</h2>
            </div>

            <div className="service-divider"></div>

            <p className="service-desc">{item.desc}</p>

          </div>
        ))}
      </div>

    </div>
  );
}
