import React, { useState, useEffect } from "react";
import Belajar from "../assets/assetIconButton/belajar.png";
import Main from "../assets/assetIconButton/main.png";
import Makan from "../assets/assetIconButton/makan.png";
import Tidur from "../assets/assetIconButton/tidur.png";
import "../styles.css";

export default function Status(props) {
  // useEffect(function appRunTimer() {
  //   const interval = setInterval(() => {
  //     var tempActions = [...progress];

  //     if (tempActions[0][1] >= 100) {
  //       tempActions[0][1] = 100;
  //     }
  //     if (tempActions[1][1] >= 100) {
  //       tempActions[1][1] = 100;
  //     }
  //     if (tempActions[2][1] >= 100) {
  //       tempActions[2][1] = 100;
  //     }

  //     if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
  //     if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
  //     if (tempActions[2][1] >= 2) tempActions[2][1] -= 2;

  //     // console.log(tempActions[0][1]);
  //     // console.log(tempActions[1][1]);
  //     // console.log(tempActions[2][1]);

  //     if (tempActions[0][1] <= 15) {
  //       props.updateNotif("Makan dl");
  //     }
  //     if (tempActions[1][1] <= 15) {
  //       props.updateNotif("Main");
  //     }
  //     if (tempActions[2][1] <= 15) {
  //       props.updateNotif("Tidur dl");
  //     }

  //     if (tempActions[3][1] <= 15) {
  //       props.updateNotif("Belajar dl");
  //     }

  //     if (tempActions[3][1] >= 100) {
  //       props.getBelajarValue(tempActions[3][1]);
  //       tempActions[3][1] = 0;
  //     }
  //     props.getBelajarValue(tempActions[3][1]);
  //     setProgress(tempActions);
  //   }, 1000);

  //   return function stopTimer() {
  //     clearInterval(interval);
  //   };
  // }, []);

  // // const interval = setInterval(function () {
  // //   var tempActions = [...progress];
  // //   if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
  // //   if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
  // //   if (tempActions[2][1] >= 2) tempActions[2][1] -= 2;

  // //   console.log(tempActions[0][1]);
  // //   // console.log(tempActions[1][1]);
  // //   // console.log(tempActions[2][1]);

  // //   if (tempActions[0][1] <= 15) {
  // //     props.updateNotif("Makan dl");
  // //   }
  // //   if (tempActions[1][1] <= 15) {
  // //     props.updateNotif("Main");
  // //   }
  // //   if (tempActions[2][1] <= 15) {
  // //     props.updateNotif("Tidur dl");
  // //   }

  // //   if (tempActions[3][1] <= 15) {
  // //     props.updateNotif("Belajar dl");
  // //   }

  // //   if (tempActions[3][1] >= 100) {
  // //     props.getBelajarValue(tempActions[3][1]);
  // //     tempActions[3][1] = 0;
  // //   }
  // //   props.getBelajarValue(tempActions[3][1]);

  // //   setProgress(tempActions);
  // //   clearInterval(interval);
  // // }, 1000);

  // function doAction(action) {
  //   var incrementVal = 10;
  //   if (action === "Belajar") incrementVal = 1;
  //   var tempActions = [...progress];
  //   for (let i of tempActions) {
  //     if (i[0] === action) i[1] += incrementVal;
  //   }
  //   setProgress(tempActions);
  //   // clearInterval(interval);
  // }

  return (
    <div
      id="right-status-frame"
      style={{
        backgroundColor: "#2e6566",
        borderRadius: "8px",
        boxShadow: "0px 0px 5px 2px black"
      }}
    >
      {props.progress.map((status) => (
        <div>
          <p className="progress-text">{status[0]}</p>
          <div className="progress-div">
            <button
              onClick={() => props.doAction(status[0])}
              disabled={status[status.length - 1]}
              className="player-action-button"
              style={{ marginLeft: window.innerWidth > 700 ? "20px" : "8px" }}
            >
              <img
                className="logoStatus"
                src={
                  status[0] === "Makan"
                    ? Makan
                    : status[0] === "Main"
                    ? Main
                    : status[0] === "Tidur"
                    ? Tidur
                    : status[0] === "Belajar"
                    ? Belajar
                    : null
                }
                alt=""
              />
            </button>
            <progress
              className="progress-bar"
              value={status[1]}
              max="100"
              min="0"
              style={{ marginRight: "20px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
