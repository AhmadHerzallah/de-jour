import { Link } from "@remix-run/react";
import styles from "~/styles/nav/index.css";
import logo from "../../public/images/black.svg";
export default function nav() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} />
        </Link>
        <ul className="nav">
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Vision</Link>
          </li>
          <li>
            <Link to="/">Du Jouers</Link>
          </li>
          <li>
            <Link to="/">Sign in</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
