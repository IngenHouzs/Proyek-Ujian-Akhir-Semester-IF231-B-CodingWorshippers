import React, { useState } from "react";
import BoyLogin from "../assets/assetKarakter/boy_preview.png";
import GirlLogin from "../assets/assetKarakter/girl_preview.png";

export default function Character(props) {
  function swap() {
    props.gantiGender(!props.gender);
  }

  return (
    <div id="pilih-gender-frame">
      <div id="pg-title">
        <h1>Welcome to 7DAYS UMN LIFE</h1>
        <h1>Choose your gender</h1>
      </div>
      <div id="pg-visual">
        <div className="gantiKiri" onClick={swap}></div>
        <img
          className="gambar-karakter"
          src={props.gender ? BoyLogin : GirlLogin}
          alt=""/>
        <div className="gantiKanan" onClick={swap}></div>
      </div>
    </div>
  );
}

// berantakan w ganti la ya
// yg tadi w simpen di temp.txt
