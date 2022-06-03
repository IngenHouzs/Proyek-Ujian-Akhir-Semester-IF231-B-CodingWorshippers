import React, { useState } from "react";
import DeathPict from "../assets/assetGame/death.png";

export default function DeathGameOver(props) {
  return (
    <div
      style={{
        backgroundColor: "#120202",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 className="text-white">Jaga Kesehatan...</h1>
      <img
        width="800"
        src={DeathPict}
        style={{
          boxShadow: "0px 0px 5px 1px white"
        }}
        alt=""
      />
      <div className="btnDo">
        <button className="mt-2 btn btn-danger" onClick={props.restartGame}>
          Main Lagi
        </button>
      </div>
    </div>
  );
}
