import React from "react";
import styles from "./Header.scss";
import logo from "../../img/logo.png";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
          WARPLAY
        </a>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Servers</a>
        <a href="#">Download</a>
        <a href="#">Tech support</a>
        <a href="#">Prices</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
