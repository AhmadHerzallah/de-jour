import logo from "../assets/imgs/black.svg";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
export default function nav() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>
        <ul className="nav">
          <li>
            <Link to="#about-us">About us</Link>
          </li>
          <li>
            <Link to="#vision">Vision</Link>
          </li>
          <li>
            <Link to="#du-jouers">Du Jouers</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
