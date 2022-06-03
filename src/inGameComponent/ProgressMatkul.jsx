import React, { useState, useEffect } from "react";
import "../styles.css";
import Warning from "../assets/assetIcon/warning.png";

export default function ProgressMatkul(props) {
  const [mataKuliah, setMataKuliah] = useState(props.mata_kuliah);
  const [jurusan, setJurusan] = useState(props.jurusan);

  //

  function ProgressBarMatkul(properties) {
    return (
      <div className="progress-widget">
        <h1 style={{ color: "white" }}>
          {properties.nama[0]}{" "}
          <span
            style={{
              fontWeight: "bold"
            }}
          >
            (Week {properties.val} / 14) {properties.nama[1]} :{" "}
            {properties.nama[2] < 10
              ? "0" + properties.nama[2] + ".00"
              : properties.nama[2] + ".00"}{" "}
            -{" "}
            {properties.nama[3] < 10
              ? "0" + properties.nama[3] + ".00"
              : properties.nama[3] + ".00"}
          </span>
        </h1>
        <progress className="progress-bar" value={properties.val} max="14" />
      </div>
    );
  }

  return (
    <div id="progress-matkul-div" onClick={props.updatePM}>
      <h1 style={{ fontSize: "2rem" }}>Program Studi</h1>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        {jurusan}
      </h1>
      <div id="progress-bar-wrapper">
        {props.mata_kuliah.map((matkul) => (
          <ProgressBarMatkul nama={matkul[0]} val={matkul[1]} />
        ))}
      </div>
      <div id="warning-absensi">
        <img
          src={Warning}
          style={{
            height: "70px",
            width: "70px"
          }}
          alt=""
        />
        <h1 style={{ fontSize: "25px" }}>REMINDER</h1>
        <h1 style={{ fontSize: "16px" }}>
          Syarat kelulusan adalah absensi diatas 85%
        </h1>
        <h1 style={{ fontSize: "16px" }}>
          Mohon tekuni perkuliahan dengan sungguh-sungguh
        </h1>
      </div>
    </div>
  );
}
