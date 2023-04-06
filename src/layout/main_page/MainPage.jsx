import React from "react";
import "./MainPage.scss";

//Photos//
import bg from "../../img/bg.png";
import work__scetion from "../../img/work__scetion.png";
//Icons//
import Arcad from "../../img/icon/Arcad.svg";
import cloud from "../../img/icon/cloud.svg";
import mail from "../../img/icon/mail.svg";
import tool from "../../img/icon/tool.svg";
export default function MainPage() {
  return (
    <main>
      <div className="main__section">
        <img src={bg} alt="bg_photo" />
        <p>Cloud gaming service</p>
        <h1>Turn your device into a gaming device </h1>
        <button>UPGRADE</button>
      </div>
      <div className="work__section">
        <div className="left__block">
          <img src={work__scetion} alt="work__section_img" />
        </div>
        <div className="right__block">
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
          <a href="/">Download</a>
        </div>
      </div>
      <div className="game__section">
        <span>Quick Start</span>
        <h3>Start playing</h3>
        <div className="game__section_container">
          <div className="img__block">
            <img src={mail} alt="" />
            Create an account
          </div>
          <div className="line"></div>
          <div className="img__block">
            <img src={cloud} alt="" />
            Download the module
          </div>
          <div className="line"></div>
          <div className="img__block">
            <img src={tool} alt="" />
            Choose a rate
          </div>
          <div className="line"></div>
          <div className="img__block">
            <img src={Arcad} alt="" />
            Start playing
          </div>
        </div>
        <a href="#">Start</a>
      </div>
      <div className="tariffs__section">
        <h3>Available subscriptions</h3>
        <div className="tariffs__section_cards">
          <div className="card">
            <div className="description">
              <h4>Hourly pay</h4>
              <p>
                Available: <br /> Game Catalog <br /> Virtual PC <br />{" "}
                Unlimited Game Session
              </p>
              <button>Select</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
