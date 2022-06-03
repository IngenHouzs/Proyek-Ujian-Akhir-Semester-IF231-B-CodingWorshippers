import React, { useEffect, useState } from "react";
import "../styles.css";

export default function Evaluasi(props) {
  const [dataMatkul, setDataMatkul] = useState([]);

  useEffect(() => {
    console.log("BERUBAH");
    setDataMatkul([]);
    const tempData = dataMatkul;
    var ctr = 0;
    for (let mk of props.daftarAbsenMatkul) {
      tempData.push([mk[0][0]]);
      // console.log(props.infoMatkul);
      tempData[tempData.length - 1].push(mk[0][1]);
      tempData[tempData.length - 1].push(mk[0][2]);
      tempData[tempData.length - 1].push(mk[0][3]);
      tempData[tempData.length - 1].push(props.infoMatkul[ctr][1]);
      tempData[tempData.length - 1].push(mk[1]);
      ctr++;
    }
    setDataMatkul(tempData);
    console.log(dataMatkul);
  }, [props.infoMatkul, props.daftarAbsenMatkul]);

  useEffect(() => {
    console.log("wwlwlwlw");
    props.updateUang(props.uang + 1500 * props.tingkatBelajar);
    console.log(props.tingkatBelajar);
  }, [props.tingkatBelajar]);

  const laporanTingkatBelajar = () => {
    if (props.tingkatBelajar < 100)
      return "Minggu ini kamu terlihat sangat malas :)";
    if (props.tingkatBelajar < 200) return "Belajarnya masih kurang nih :)";
    if (props.tingkatBelajar < 350) return "Kamu lumayan rajin ya :)";
    if (props.tingkatBelajar < 450)
      return "Kamu kelihatan semangat minggu ini :)";
    if (props.tingkatBelajar >= 450)
      return "Keren! Semangatmu sangat patut diacungi jempol!!!";
  };

  function TableRow(properties) {
    return (
      <tr>
        <td>{properties.matkul}</td>
        <td>
          <h1 className="evaluasi-cell-text">{properties.hari}</h1>
          <h1 className="evaluasi-cell-text">
            {properties.jadwalStart < 10
              ? "0" + properties.jadwalStart + ".00"
              : properties.jadwalStart + ".00"}
            -
            {properties.jadwalEnd < 10
              ? "0" + properties.jadwalEnd + ".00"
              : properties.jadwalEnd + ".00"}
          </h1>
        </td>
        <td>{properties.progress} / 14</td>
        <td>{properties.presensi ? "Hadir" : "Tidak Hadir"}</td>
      </tr>
    );
  }

  function cekAbsensiKelas() {
    // setColorCtr((colorCtr) => colorCtr + 1);
    return (
      <table id="absen-matkul-table">
        <tr>
          <th>Mata Kuliah</th>
          <th>Jadwal</th>
          <th>Progress</th>
          <th>Presensi</th>
        </tr>
        {dataMatkul.map((element, index) => (
          <TableRow
            matkul={element[0]}
            hari={element[1]}
            jadwalStart={element[2]}
            jadwalEnd={element[3]}
            progress={element[4]}
            presensi={element[5]}
            style={{
              backgroundColor:
                index % 2 == 0 ? "red !important" : "blue !important"
            }}
          />
        ))}
      </table>
    );
  }

  return (
    <div id="evaluasi-div">
      <h1 id="evaluasi-title">Evaluasi Week {props.mingguKe}</h1>
      <div id="evaluasi-header">
        <div className="line"></div>
        <div id="evaluasi-identity-wrapper">
          <div className="identity-box">
            <h1 className="evaluasi-header-texts">{props.nama}</h1>
          </div>
          <div className="identity-box">
            <h1 className="evaluasi-header-texts">{props.jurusan}</h1>
          </div>
        </div>
      </div>
      <div className="evaluasi-content-wrapper">
        <h1 className="evaluasi-regular-text">{laporanTingkatBelajar()}</h1>
        <progress
          value={props.tingkatBelajar}
          max="600"
          id="progress-belajar-mandiri"
          className="progress-bar"
        ></progress>
        <h1 className="evaluasi-regular-text">
          Skor belajar mandirimu : {props.tingkatBelajar}
        </h1>
        <h1 className="evaluasi-regular-text" style={{ marginTop: "20px" }}>
          Data Absensi Kelas Minggu Ini
        </h1>
        {cekAbsensiKelas()}
      </div>
      <button
        style={{
          marginTop: "50px",
          width: "20%",
          backgroundColor: "#ff6e6e",
          borderRadius: "50px",
          border: "none",
          color: "white",
          boxShadow: "0px 0px 2px 2px grey"
        }}
        onClick={props.resetProgressMingguan}
      >
        Tutup
      </button>
    </div>
  );
}
