import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "../styles.css";
import IconUang from "../assets/assetIcon/money.png";

export default function Uang(props) {
  return (
    <div className="container-uang mb-2">
      <div id="uang">
        <img src={IconUang} alt="" />
        <NumberFormat
          value={props.uang}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp. "}
          suffix={".00"}
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: window.innerWidth > 750 ? "20px" : "14px"
          }}
        />
      </div>
    </div>
  );
}
