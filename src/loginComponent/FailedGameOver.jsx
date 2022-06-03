import React, { useState } from "react";
import DO from "../assets/assetGame/dropout.png";

export default function FailedGameOver(props) {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>OOOPS.. KAMU DI DROP OUT :(</h1>
      <h1>BELAJAR YANG LEBIH RAJIN LAGI!</h1>
      <img
        width="800"
        src={DO}
        style={{
          boxShadow: "0px 0px 5px 1px white"
        }}
        alt=""
      />
      <div className="btnDo">
        <button
          className="mt-2 btn btn-secondary"
          onClick={props.restartGame}
          style={{ border: "1px solid black" }}
        >
          Main Lagi
        </button>
      </div>
    </div>
  );
}
