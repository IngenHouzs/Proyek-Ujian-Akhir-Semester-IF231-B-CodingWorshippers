import React, { useState } from "react";
import FotoFarrel from "../assets/assetGame/profile-farrel.png";
import FotoAxel from "../assets/assetGame/profile-axel.png";
import FotoRici from "../assets/assetGame/profile-rici.png";
import FotoDeo from "../assets/assetGame/profile-deo.png";
// import BGCredit from "../assets/assetGame/Credit_Website.png";
import "../styles.css";

export default function Credit(props) {
  const [members] = useState([
    ["Farrel Dinarta", "00000055702", FotoFarrel],
    ["Axel Ferdinand", "00000055952", FotoAxel],
    ["Bryan Richie Irawan", "00000056044", FotoRici],
    ["Leidevico Yudhisti", "00000055683", FotoDeo]
  ]);

  function Card(properties) {
    return (
      <div className="div-creator">
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            height: "80%"
          }}
        >
          <img
            src={properties.foto}
            alt="Creator"
            className="foto-creator"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="informasi-creator">
          <h1 className="creator-data" style={{ fontWeight: "bold" }}>
            {properties.nama}
          </h1>
          <h1 className="creator-data">{properties.nim}</h1>
          <h1 className="creator-data">Informatika</h1>
        </div>
      </div>
    );
  }

  return (
    <div id="credit-div" onClick={props.updateCredit}>
      <h1 className="credit-header">CodingWorshippers</h1>
      <div id="credit-grid">
        {members.map((member) => (
          <Card nama={member[0]} nim={member[1]} foto={member[2]} />
        ))}
      </div>
    </div>
  );
}
