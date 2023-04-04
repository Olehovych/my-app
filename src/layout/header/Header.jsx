import React from "react";
import styles from "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#">
          {/* <img src="./logo.png" alt="logo" /> */}
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
