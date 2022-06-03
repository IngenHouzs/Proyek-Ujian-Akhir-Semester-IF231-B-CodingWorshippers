import React, { useState } from "react";
import "../styles.css";

export default function Goto(props) {
  const [button1, setButton1] = useState("Campus");
  const [button2, setButton2] = useState("Cafe");
  const [button3, setButton3] = useState("Supermarket");

  function changeLocation(e) {
    if (e.target.value == 1) {
      props.onclick(button1);
      // props.updateGoToSupermarket();;
      if (
        button1 !== "Supermarket" &&
        button2 !== "Supermarket" &&
        button3 !== "Supermarket"
      )
        props.updateGoToSupermarket_OUT();
      else {
        if (button1 === "Supermarket") props.updateGoToSupermarket_IN();
      }

      // Kafe
      if (button1 !== "Cafe" && button2 !== "Cafe" && button3 !== "Cafe")
        props.updateOpenKafe_OUT();
      else {
        if (button1 === "Cafe") props.updateOpenKafe_IN();
      }

      setButton1(props.lokasiPemain);
    } else if (e.target.value == 2) {
      props.onclick(button2);
      if (
        button1 !== "Supermarket" &&
        button2 !== "Supermarket" &&
        button3 !== "Supermarket"
      )
        props.updateGoToSupermarket_OUT();
      else {
        if (button2 === "Supermarket") props.updateGoToSupermarket_IN();
      }

      if (button1 !== "Cafe" && button2 !== "Cafe" && button3 !== "Cafe")
        props.updateOpenKafe_OUT();
      else {
        if (button2 === "Cafe") props.updateOpenKafe_IN();
      }

      setButton2(button1);
      setButton1(props.lokasiPemain);
    } else if (e.target.value == 3) {
      props.onclick(button3);
      if (
        button1 !== "Supermarket" &&
        button2 !== "Supermarket" &&
        button3 !== "Supermarket"
      )
        props.updateGoToSupermarket_OUT();
      else {
        if (button3 === "Supermarket") props.updateGoToSupermarket_IN();
      }

      if (button1 !== "Cafe" && button2 !== "Cafe" && button3 !== "Cafe")
        props.updateOpenKafe_OUT();
      else {
        if (button3 === "Cafe") props.updateOpenKafe_IN();
      }
      // props.updateGoToSupermarket();
      setButton3(button2);
      setButton2(button1);
      setButton1(props.lokasiPemain);
    }
    // console.log(props.lokasiPemain);
  }

  return (
    <div id="left-goto">
      <div>
        <h3 id="left-judul1">
          {props.isOnMobile ? "Lokasi saat ini:" : ""}
          <span class="highlight">{props.lokasiPemain}</span>
        </h3>
        <div id="left-judul2-bg">
          <h3 id="left-judul2">Daftar Tujuan</h3>
        </div>
      </div>
      <div id="left-button">
        <button
          className="btn-primary left-goto-button left-btnzoom button-place"
          onClick={changeLocation}
          value={1}
        >
          {button1}
        </button>
        <button
          className="btn-primary left-goto-button left-btnzoom button-place"
          onClick={changeLocation}
          value={2}
        >
          {button2}
        </button>
        <button
          className="btn-primary left-goto-button left-btnzoom button-place"
          onClick={changeLocation}
          value={3}
        >
          {button3}
        </button>
      </div>
    </div>
  );
}
