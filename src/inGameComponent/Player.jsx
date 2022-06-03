import React, { useEffect, useState } from "react";
import "../styles.css";
import Kafe from "./Kafe";

// import Cerah from "../assets/assetIcon/sun.png";
// import Berawan from "../assets/assetIcon/cloudy.png";
// import Hujan from "../assets/assetIcon/rain.png";

import BoyEat from "../assets/assetKarakter/boy_eat.png";
import GirlEat from "../assets/assetKarakter/girl_eat.png";

import BoyPlay from "../assets/assetKarakter/boy_play.png";
import GirlPlay from "../assets/assetKarakter/girl-play.png";

import BoySleep from "../assets/assetKarakter/boy_sleep_fix.png";
import GirlSleep from "../assets/assetKarakter/girl_sleep_fix.png";

import BoyStudy from "../assets/assetKarakter/boy_study.png";
import GirlStudy from "../assets/assetKarakter/girl_study.png";

import BoyNormal from "../assets/assetKarakter/boy_normal.png";
import GirlNormal from "../assets/assetKarakter/girl_preview.png";

export default function Player(props) {
  function salamPlayer() {
    if (props.hour >= 0 && props.hour <= 10)
      return `Selamat Pagi, ${props.nama}`;
    if (props.hour >= 11 && props.hour <= 15)
      return `Selamat Siang, ${props.nama}`;
    if (props.hour >= 16 && props.hour <= 18)
      return `Selamat Sore, ${props.nama}`;
    if (props.hour >= 19 && props.hour <= 24)
      return `Selamat Malam, ${props.nama}`;
  }

  useEffect(() => {
    setAnimasiPemain(props.statusPlayer);
  }, [props.statusPlayer]);

  const [animasiPemain, setAnimasiPemain] = useState(props.statusPlayer);

  function gantiAnimasi() {
    if (props.gender) {
      // cowo
      if (animasiPemain === "normal") {
        return BoyNormal;
      } else if (animasiPemain === "belajar") {
        return BoyStudy;
      } else if (animasiPemain === "makan") {
        return BoyEat;
      } else if (animasiPemain === "tidur") {
        return BoySleep;
      } else if (animasiPemain === "main") {
        return BoyPlay;
      }
    } else {
      if (animasiPemain === "normal") {
        return GirlNormal;
      } else if (animasiPemain === "belajar") {
        return GirlStudy;
      } else if (animasiPemain === "makan") {
        return GirlEat;
      } else if (animasiPemain === "tidur") {
        return GirlSleep;
      } else if (animasiPemain === "main") {
        return GirlPlay;
      }
    }
  }

  const fetchCuaca = () => {
    if (props.cuaca === "Clear") return "Cerah";
    if (props.cuaca === "Rain") return "Hujan";
    if (props.cuaca === "Clouds") return "Berawan";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      {/* <div
        id="weather-report"
        style={{
          backgroundColor:
            props.cuaca === "Clear"
              ? "#96cbd9"
              : props.cuaca === "Clouds"
              ? "#62818a"
              : props.cuaca === "Rain"
              ? "#3a4b4f"
              : "#96cbd9"
        }}
      >
        <div
          id="weather-left"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: "5px"
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              color: props.cuaca === "Clear" ? "black" : "white"
            }}
          >
            {fetchCuaca()}
          </h1>
          <h1
            style={{
              fontSize: "10px",
              color: props.cuaca === "Clear" ? "black" : "white",
              marginLeft: "1px"
            }}
          >
            Tangerang
          </h1>
        </div>
        <div id="weather-right">
          <img
            src={
              props.cuaca === "Clear"
                ? Cerah
                : props.cuaca === "Clouds"
                ? Berawan
                : props.cuaca === "Rain"
                ? Hujan
                : null
            }
            style={{
              height: "60%",
              width: "60px",
              marginRight: "10px"
            }}
            alt="asd"
          />
        </div>
      </div> */}
      <h1 id="center-nama-pemain">{salamPlayer()}</h1>
      <div className="black-line"></div>
      <div
        id="div-tengah"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center"
        }}
      >
        <div id="center-notifikasi">
          <div id="header-notifikasi">
            <h1 id="text-header-notifikasi">DAILY NOTIFICATION</h1>
          </div>
          <h1 id="isi-notif">{props.status}</h1>
        </div>
        <img id="jendela-rumah-bg" src={props.jendela} alt="" />
      </div>
      <div id="home-section">
        <img id="center-gambar-pemain" src={gantiAnimasi()} alt="" />
      </div>
      {props.inKafe ? (
        <Kafe
          updateOpenKafe={props.updateOpenKafe}
          geserKiri_Kafe={props.geserKiri_Kafe}
          geserKanan_Kafe={props.geserKanan_Kafe}
          daftarBarangKafe={props.daftarBarangKafe}
          indexItemCafe={props.indexItemCafe}
          beliKopi={props.beliKopi}
        />
      ) : null}
    </div>
  );
}
