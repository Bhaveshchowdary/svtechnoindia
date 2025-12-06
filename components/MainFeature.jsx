import "./MainFeature.css"
import { FiCheck } from "react-icons/fi"

export default function MainFeature() {
  return (
    <section className="main-feature">

      {/* LEFT SIDE */}
      <div className="feature-left">
        <p className="section-label">Corporate Features</p>

        <h2 className="feature-title">
          <span className="highlight">We</span> Shape the Perfect Solution
        </h2>

        <div className="feature-mini">
          <img src="/main-feature.jpg" alt="person" className="mini-image" />
          <p className="mini-text">
            There are many variations of passages of Lorem Ipsum available,
            but majority alteration in some form, by humour or randomised words.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="feature-right">

        <div className="promise-box">
          <p>We promise to respect your time</p>
          <span className="check-icon"><FiCheck /></span>
        </div>

        <div className="promise-box">
          <p>We hire only professionals you can trust</p>
          <span className="check-icon"><FiCheck /></span>
        </div>

        <div className="promise-box">
          <p>We promise to provide upfront pricing</p>
          <span className="check-icon"><FiCheck /></span>
        </div>

      </div>

    </section>
  )
}
