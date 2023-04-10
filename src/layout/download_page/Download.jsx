import React from "react";
import Chrome from "./img_download/Chrome.svg";
import Linux from "./img_download/Linux.svg";
import Mac from "./img_download/Mac_Client.svg";
import Windows from "./img_download/Windows_10.svg";
export default function Download() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            paddingBottom: "50px",
          }}
        >
          Select the operating system
        </h1>
        <div
          className="system"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img
            style={{
              width: "60px",
              cursor: "pointer",
            }}
            src={Chrome}
            alt="Chrome"
          />
          <img
            style={{
              width: "60px",
              cursor: "pointer",
            }}
            src={Linux}
            alt="Linux"
          />
          <img
            style={{
              width: "60px",
              cursor: "pointer",
            }}
            src={Mac}
            alt="Mac OS"
          />
          <img
            style={{
              widows: "10px",
              cursor: "pointer",
            }}
            src={Windows}
            alt="Windows"
          />
        </div>
      </div>
    </>
  );
}
