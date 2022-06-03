import React, { useState, useEffect } from "react";
import TimeAndDate from "../assets/assetTimeAndDate/TimeAndDate.png";
import "../styles.css";

export default function Waktu(props) {
  // const [day, setDay] = useState("");
  // //const [totalminute, setTotalminue] = useState();
  // const [hour, setHour] = useState(11);
  // const [minute, setMinute] = useState(0);
  // const [currentHari, setCurrentHari] = useState(3);

  // const listHari = [
  //   "SENIN",
  //   "SELASA",
  //   "RABU",
  //   "KAMIS",
  //   "JUMAT",
  //   "SABTU",
  //   "MINGGU"
  // ];

  // props.get_day(listHari[currentHari]);
  // props.get_hour(hour);
  // /*
  // function setJam(){

  // }

  // function setHari(){

  // }
  // */
  // function changeMinute() {
  //   setDay((day) => {
  //     const newDay = listHari[currentHari];
  //     return newDay;
  //   });
  //   setMinute((minute) => {

  //     const newMinute = minute + 5;
  //     const checkHour = hour;
  //     if (checkHour === 8 && day !== "MINGGU")
  //       props.updateNotif("Waktunya kuliah!");
  //     if (checkHour === 17 && day !== "MINGGU")
  //       props.updateNotif("Waktu kuliah Anda telah selesai!");
  //     if (listHari[currentHari] === "MINGGU")
  //       props.updateNotif("Hari ini libur! Lakukan apapun sesuka Anda...");

  //     if (newMinute >= 60) {
  //       setHour((hour) => {
  //         var intervalInt = 1;
  //         const newHour = hour + intervalInt;
  //         if (newHour >= 24) {
  //           setCurrentHari((currentHari) => {
  //             const newHari = currentHari + 1;
  //             if (newHari >= 7) {
  //               setDay((day) => {
  //                 const newDay = listHari[0];
  //                 return newDay;
  //               });
  //               return 0;
  //             }
  //             setDay((day) => {
  //               const newDay = listHari[newHari];
  //               return newDay;
  //             });
  //             return newHari;
  //           });
  //           return 0;
  //         }
  //         return newHour;
  //       });
  //       return 0;
  //     }
  //     return newMinute;
  //   });
  // }

  // useEffect(() => {
  //   const interval = setInterval(changeMinute, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      className="container-jam"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4px"
      }}
    >
      <img
        src={TimeAndDate}
        alt=""
        style={{ height: "40px", width: "40px", marginRight: "10px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth > 1040 ? "row" : "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1
          style={{
            fontSize: window.innerWidth > 1040 ? "2.0rem" : "1.1rem",
            marginRight: "10px",
            color:
              props.listHari[props.currentHari] === "MINGGU" ? "red" : "black"
          }}
        >
          {props.listHari[props.currentHari]}
        </h1>
        <div className="flex-item jam-waktu p-2">
          <h3
            style={{
              fontSize: window.innerWidth >= 1100 ? "25px" : "18px",
              marginBottom: "10px"
            }}
          >
            {props.hour < 10 ? "0" + props.hour : props.hour} :{" "}
            {props.minute < 10 ? "0" + props.minute : props.minute}
          </h3>
        </div>
      </div>
    </div>
    //   <div className="container container-jam mt-2 mb-4">
    //   <div className="row">
    //     <div className="jam-content d-flex justify-content-end">
    //       <div className="flex-item jam-img">
    //         <img className="imgTime img-fluid" src={TimeAndDate} alt="" />
    //       </div>
    //       <div className="flex-item jam-hari p-2">
    //         <h3>{props.listHari[props.currentHari]}</h3>
    //       </div>
    //       <div className="flex-item jam-waktu p-2">
    //         <h3>
    //           {props.hour < 10 ? "0" + props.hour : props.hour} :{" "}
    //           {props.minute < 10 ? "0" + props.minute : props.minute}
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
