import React, { useState } from "react";
import NumberFormat from "react-number-format";
import NasiHainan from "../assets/assetSupermarket/nasi-hainan.png";
import BuburAyam from "../assets/assetSupermarket/bubur-ayam.png";
import NasiGoreng from "../assets/assetSupermarket/nasi-goreng.png";
import MieAyam from "../assets/assetSupermarket/mie-ayam.png";
import Ketoprak from "../assets/assetSupermarket/ketoprak.png";
import GadoGado from "../assets/assetSupermarket/gado-gado.png";
import PecelLele from "../assets/assetSupermarket/pecel-lele.png";
import Tekwan from "../assets/assetSupermarket/tekwan.png";
import Bakso from "../assets/assetSupermarket/bakso.png";
import NasiUduk from "../assets/assetSupermarket/nasi-uduk.png";
import SatePadang from "../assets/assetSupermarket/sate-padang.png";
import Pizza from "../assets/assetSupermarket/pizza.png";
import "../styles.css";

export default function Supermarket(props) {
  const [gambarMakanan, setGambarMakanan] = useState([
    NasiHainan,
    BuburAyam,
    NasiGoreng,
    MieAyam,
    Ketoprak,
    GadoGado,
    PecelLele,
    Tekwan,
    Bakso,
    NasiUduk,
    SatePadang,
    Pizza
  ]);

  function callBeliBarang(callback, namaBarang) {
    callback(namaBarang);
  }

  function ItemCard(properties) {
    return (
      <div className="supermarket-item-card">
        <img
          className="gambar-supermarket"
          src={properties.gambar}
          alt="GAMBAR"
        />
        <div>
          <h1 className="supermarket-nama-item font-tulisan supermarket-text">
            {properties.nama}
          </h1>
          <h1 className="supermarket-harga-item font-tulisan supermarket-text">
            <NumberFormat
              value={properties.harga}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp. "}
              suffix={".00"}
            />
          </h1>
          <h1 className="supermarket-stok-item font-tulisan supermarket-text">
            <span>Stok</span> : {properties.stok}
          </h1>
        </div>
        <button
          className="font-tulisan"
          id="tombol-beli"
          onClick={() => properties.beliBarang(properties.nama)}
          style={{
            border: "none",
            borderRadius: "15px",
            backgroundColor: "#33823d",
            color: "white",
            width: "40%"
          }}
        >
          Beli
        </button>
      </div>
    );
  }

  return (
    <div id="supermarket-div">
      <div id="supermarket-header">
        <h1
          className="font-tulisan"
          style={{
            fontWeight: "bold",
            color: "#33823d",
            fontSize: window.innerWidth >= 480 ? "25px" : "18px"
          }}
        >
          Welcome to Supermarket
        </h1>
        <button
          className="btn btn-secondary btnHover"
          onClick={props.updateOpenSupermarketMenu}
          style={{
            height: "28px",
            width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          X
        </button>
      </div>
      <div id="frame-barang">
        {props.daftarBarangSupermarket.map((obj) => (
          <ItemCard
            nama={obj[0]}
            harga={obj[1]}
            stok={obj[2]}
            gambar={gambarMakanan[obj[3] - 1]}
            beliBarang={props.beliBarang}
          />
        ))}
      </div>
    </div>
  );
}
