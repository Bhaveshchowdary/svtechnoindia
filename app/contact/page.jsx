import React from "react";
import "./page.css";

const people = [
  {
    name: "Mr. M.V. Sruzith",
    phone: "9390003097",
    email: "Sruzithvenkat9000@gmail.com",
    address: "Bujji Bujji Nellore Ramaylayam street Nellore, AP"
  },
  {
    name: "Mr. G. Sajeeve",
    phone: "9390003097",
    address: "Vadayapalem, Nellore, AP 524004"
  },
  {
    name: "Mr. CH. Venkatesh",
    phone: "9345603286",
    address: "H.no:1-794, Yanamalapalem, nawabpeta, Nellore-524004.DT (AP)"
  },
  {
    name: "Mr. Ramesh Gadi",
    phone: "9908955084",
    address: "H.no:1-794, Yanamalapalem, nawabpeta, Nellore-524004.DT (AP)"
  },
];

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-inner">
      <h1 className="contacts-title">Contact Us</h1>

      <div className="card-grid">
        {people.map((person, index) => (
          <div className="card-wrapper" key={index}>
          <div className="contact-card">
            <h2>{person.name}</h2>

            <p>
              <strong>📞 Phone:</strong> {person.phone}
            </p>
            {/* <p>
              <strong>📧 Email:</strong> {person.email}
            </p> */}
            <p>
              <strong>📍 Address:</strong> {person.address}
            </p>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
