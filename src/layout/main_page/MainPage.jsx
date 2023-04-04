import React from "react";
import styles from "./MainPage.scss";
export default function MainPage() {
  return (
    <main>
      <div className="main__section">
        <img src="./bg.png" alt="bg_photo" />
        <p>Cloud gaming service</p>
        <h1>Turn your device into a gaming device </h1>
        <button>UPGRADE</button>
      </div>
      <div className="work__section">
        <div className="left__block">
          <img src="./work__scetion.png" alt="work__scetion_img" />
        </div>
        <div className="rigth__block">
          <span>Cloud Gaming</span>
          <h2>How it works?</h2>
          <p>
            Our servers run the game and give you <br /> you a picture that you
            can control! <br /> in real time!
          </p>
          <div className="line"></div>
          <p>
            The application will run on a PC with a processor <br /> of 1.5 GHz
            and above, 1 Gb RAM and internet access <br /> 15 mbps and higher On
            all operating systems <br /> Windows 7, 8, 10 MacOS and Linux.
          </p>
          <a href="#">Download</a>
        </div>
      </div>
    </main>
  );
}
