import React, { useState } from "react";
import "../styles.css";

export default function Tambahan(props) {
  return (
    <div className="row right-bottom-menu">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan tombol-supermarket btnHover"
            onClick={props.updateOpenSupermarketMenu}
          >
            Beli kebutuhan
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updateProfile}
          >
            Profile
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updateCredit}
          >
            Credit
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button
            className="btn btn-secondary tombol-menu-tambahan btnHover"
            onClick={props.updatePM}
          >
            Mata Kuliah
          </button>
        </div>
      </div>
    </div>
  );
}
