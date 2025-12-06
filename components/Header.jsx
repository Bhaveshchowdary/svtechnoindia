import "./Header.css"
import { FiPhone, FiMail, FiMapPin, FiSearch } from "react-icons/fi"

export default function Header() {
  return (
    <header>

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          <span><FiMail /> support@svtechnoindia.co.in</span>
          <span><FiMapPin /> 1-794, Yanamalapalam, Nellore, AP</span>
        </div>
        {/* <div className="top-right">
          <a href="/contact">Contact</a>
        </div> */}
      </div>

      {/* MAIN NAV BAR */}
      <div className="nav-bar">

        {/* LOGO + NAME */}
        <div className="nav-left">
          <img src="/logo.png" className="logo" alt="logo" />
          <div>
            <h2 className="company-name">SVTECHNOINDIA.CO.IN</h2>
            <p className="tagline">Craft & Engineering Services</p>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/company">Company</a>
          <a href="/services">Services</a>
          <a href="/standards">Our Standards</a>
          <a href="/clients">Our Clients</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* RIGHT SIDE ICONS */}
        <div className="nav-right">
          {/* <FiSearch className="icon" /> */}
          <div className="call-box">
            <p className="call-label">CALL ANYTIME</p>
            <p className="call-number">+91 9908955084</p>
          </div>
          {/* <FiPhone className="call-icon" /> */}
        </div>

      </div>

    </header>
  )
}
