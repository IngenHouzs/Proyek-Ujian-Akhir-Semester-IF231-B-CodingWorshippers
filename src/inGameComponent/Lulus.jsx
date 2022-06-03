import React, { useState } from "react";
import LogoUMN from "../assets/assetLogin/logoumn.png";
import ProfileCewe from "../assets/assetGame/profile-cewe.png";
import ProfileCowo from "../assets/assetGame/profile-cowo.png";

export default function Lulus(props) {
  return (
    <div
      id="ijazah-frame"
      style={{
        backgroundColor: "#ffe08c",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        boxShadow: "0px 0px 4px 4px grey",
        height: "80%",
        width: "80%",
        zIndex: 10,
        overflowY: "hidden",
        border: "1px solid #291809"
      }}
    >
      <div className="sidepipe sp-1"></div>
      <div className="sidepipe sp-2"></div>

      <img
        id="foto-mhs"
        src={props.gender ? ProfileCowo : ProfileCewe}
        alt=""
      />
      <div id="ijazah-content">
        <h1 id="ijazah-title-bold">IJAZAH</h1>
        <h1 id="ijazah-diberikan-kepada">diberikan kepada</h1>
        <h1 className="ijazah-identitas">
          <i>{props.nama}</i>
        </h1>
        <h1 className="ijazah-pernyataan">
          atas pemenuhan persyaratan sebagai lulusan Strata-1
        </h1>
        <h1 className="ijazah-identitas">
          <i>Jurusan {props.jurusan}</i>
        </h1>

        <h1 className="ijazah-footer">Sincerely,</h1>
        <h1 className="ijazah-footer">Universitas Multimedia Nusantara</h1>
        <button onClick={props.backToMainMenu} id="button-exit-ijazah">
          Kembali ke beranda
        </button>
      </div>
      <img id="logo-umn" src={LogoUMN} alt="logoumn" />
    </div>
  );
}
