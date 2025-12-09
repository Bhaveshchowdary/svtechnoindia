import "./Footer.css"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="footer">

      {/* ===== TOP CONTACT STRIP ===== */}
      <div className="footer-top">
        
        <div className="footer-contact">
          <div className="icon-box"><FiPhone /></div>
          <div>
            <p className="contact-title">Call Anytime</p>
            <p className="contact-value">+91 9908955084</p>
          </div>
        </div>

        <div className="footer-contact">
          <div className="icon-box"><FiMail /></div>
          <div>
            <p className="contact-title">Send Email</p>
            <p className="contact-value">support@svtechnoindia.co.in</p>
          </div>
        </div>

        <div className="footer-contact">
          <div className="icon-box"><FiMapPin /></div>
          <div>
            <p className="contact-title">Address</p>
            <p className="contact-value">
              1-794, Yanamalapalem,<br />
              Navabu peta, Nellore – 524 002, AP
            </p>
          </div>
        </div>

      </div>

      {/* ===== MAIN FOOTER AREA ===== */}
      <div className="footer-main">

        {/* BRANDING */}
        <div className="footer-contact">
        <div className="footer-brand">
          <h2>SVTECHNOINDIA.CO.IN</h2>
          <p className="brand-sub">Craft & Engineering Services</p>
          {/* <p className="brand-desc">Craft and Engineering Services</p> */}
        </div>
        </div>

        {/* EXPLORE LINKS */}
        <div className="footer-contact">
        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/services/">Services</a>
          <a href="/clients/">Clients</a>
          <a href="/contact/">Contact</a>
        </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-contact">
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get latest news.</p>
          
          <div className="newsletter-box">
            <input type="email" placeholder="Email Address" />
          </div>
          <button className="newsletter-btn">Subscribe</button>
        </div>
        </div>

      </div>

    </footer>
  )
}
