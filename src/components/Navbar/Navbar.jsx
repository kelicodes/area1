import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { RiMenuAddLine } from "react-icons/ri";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="Navbar">
      {/* Desktop Right Section */}
      <div className="right">
        <img src={assets.mylogo} alt="Logo" />
        <p>Area1</p>
      </div>

      {/* Desktop Left Section */}
      <div className="left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#About-us">About us</a></li>
          <li><a href="#Featured-Apartments">Featured Apartments</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
         <li className="last"><Link onClick={() => setMobile(false)} to='/collection'>Our Collection</Link></li>
        </ul>
        <Link to="/login">
          <button className="btn">Sign up</button>
        </Link>
      </div>

      {/* Mobile Header */}
      <div className="small">
      <RiMenuAddLine  className="menu"
          onClick={() => setMobile(!mobile)} />
       
        <img className="logo" src={assets.mylogo} alt="Logo" />
        <Link to="/login">
          <button className="btn">Sign up</button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`myon ${mobile ? "show" : ""}`}>
        <ul>
          <li><Link onClick={() => setMobile(false)} to="/">Home</Link></li>
          <li><a onClick={() => setMobile(false)} href="#About-us">About us</a></li>
          <li><a onClick={() => setMobile(false)} href="#Featured-Apartments">Featured Apartments</a></li>
          <li><a onClick={() => setMobile(false)} href="#Testimonials">Testimonials</a></li>
          <li className="last"><Link onClick={() => setMobile(false)} to='/collection'>Our Collection</Link></li>
        </ul>
      </div>
    </div>
  );
}
