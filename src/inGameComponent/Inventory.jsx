import React, { useState } from "react";
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

export default function Inventory(props) {
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

  function InventoryItemCard(properties) {
    return (
      <div className="inventory-card-div">
        <img
          className="gambar-supermarket"
          src={gambarMakanan[properties.gambar - 1]}
          alt="GAMBAR"
        />
        <h1 className="font-tulisan inventory-content-text">
          {properties.nama}
        </h1>
        <h1 className="font-tulisan inventory-content-text">
          {properties.stok}
        </h1>
      </div>
    );
  }

  return (
    <div id="inventory-div">
      <div id="inventory-header" style={{ marginBottom: "15px" }}>
        <h1 className="font-tulisan inventory-title">Stok Makanan</h1>
        <button
          className="btn btn-secondary btnHover"
          onClick={props.updateOpenInventory_OUT}
        >
          X
        </button>
      </div>
      <div id="inventory-content">
        {props.userInventory.map((elements) => (
          <InventoryItemCard
            nama={elements[0]}
            stok={elements[1]}
            gambar={elements[2]}
          />
        ))}
      </div>
    </div>
  );
}
