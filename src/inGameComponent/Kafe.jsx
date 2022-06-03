import React, { useState } from "react";
import KopiPaste from "../assets/assetKafe/kopi-paste.png";
import KopiKapalUdara from "../assets/assetKafe/kopi-kapal-udara.png";
import KopiCinta from "../assets/assetKafe/kopi-cinta.png";
import KopiDaun from "../assets/assetKafe/kopi-daun.png";
import KopiHitam from "../assets/assetKafe/kopi-hitam.png";
import "../styles.css";

export default function Kafe(props) {
  // const [indexKopi, setIndexKopi] = useState(0);
  const [gambarKopi, setGambarKopi] = useState([
    KopiPaste,
    KopiKapalUdara,
    KopiCinta,
    KopiDaun,
    KopiHitam
  ]);

  return (
    <div id="kafe-div">
      <h1>StarBak</h1>
      <div id="kafe-subdiv">
        <img
          src={gambarKopi[props.indexItemCafe]}
          style={{ borderRadius: "50%" }}
          alt="KOPI"
        />
        <div id="kafe-choose-widget">
          <h1 className="info-barang-kafe">
            {props.daftarBarangKafe[props.indexItemCafe][0]}
          </h1>
          <h1 className="info-barang-kafe">
            Rp. {props.daftarBarangKafe[props.indexItemCafe][1]}
          </h1>
          <div id="kafe-carousel">
            <button
              className="button-geser-kafe"
              onClick={props.geserKiri_Kafe}
            >
              &lt;
            </button>
            <button onClick={props.beliKopi} className="button-beli-kopi">
              BUY
            </button>
            <button
              className="button-geser-kafe"
              onClick={props.geserKanan_Kafe}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      {/* <div id="kafe-carousel">
        <button className="button-geser-kafe" onClick={props.geserKiri_Kafe}>
          left
        </button>
        <div id="kafe-menu">
          <img src="" alt="GAMBAR" />
          <h1 className="info-barang-kafe">
            {props.daftarBarangKafe[props.indexItemCafe][0]}
          </h1>
          <h1 className="info-barang-kafe">
            {props.daftarBarangKafe[props.indexItemCafe][1]}
          </h1>
        </div>
        <button className="button-geser-kafe" onClick={props.geserKanan_Kafe}>
          right
        </button>
      </div> */}
    </div>
  );
}
