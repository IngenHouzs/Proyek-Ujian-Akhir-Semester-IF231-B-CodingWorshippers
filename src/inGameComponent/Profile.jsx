import React, { useState } from "react";
import BGprofile from "../assets/assetGame/background-profile.png";
import ProfileCowo from "../assets/assetGame/profile-cowo.png";
import ProfileCewe from "../assets/assetGame/profile-cewe.png";
import "../styles.css";

export default function Profile(props) {
  return (
    <div
      id="profile-div"
      onClick={props.updateProfile}
      style={{
        backgroundImage: `url(${BGprofile})`,
        backgroundRepeat: "no-repeat"
      }}
    >
      <img
        id="profile-foto"
        src={props.gender ? ProfileCowo : ProfileCewe}
        alt=""
      />
      <p id="profile-nim">00000058743</p>
      <h2 id="profile-nama">{props.nama}</h2>
      <p id="profile-jurusan">{props.jurusan}</p>
      <p id="profile-tanggal">Angkatan 2021</p>
    </div>
  );
}
