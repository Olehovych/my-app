import React from "react";
import Styles from "./Footer.scss";
//Photos//
import logo from "../../img/logo.png";
export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
          WARPLAY
        </a>
      </div>
      <div className="other">
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Files</a>
      </div>
    </footer>
  );
}
