import React from "react";
import styles from "./Header.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          WARPLAY
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/download">Download</Link>
        <Link to="/prices">Prices</Link>
        <Link to="/support">Tech support</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signUp">Sign up</Link>
      </nav>
    </header>
  );
}
