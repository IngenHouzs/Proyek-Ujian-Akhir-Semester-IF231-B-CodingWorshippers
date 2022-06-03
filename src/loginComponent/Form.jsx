import React, { useState } from "react";
import LogoUMN from "../assets/assetLogin/logoumn.png";

export default function Form(props) {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");

  const pilihanProdi = [
    {
      id: 0,
      prodi: "Choose your major"
    },
    {
      id: 1,
      prodi: "Informatika",
      matkul: [
        ["Sistem Digital", "SENIN", 8, 12],
        ["Civic", "SELASA", 10, 12],
        ["Religiusitas", "SELASA", 13, 17],
        ["Programming Fundamental", "KAMIS", 13, 17]
      ]
    },
    {
      id: 2,
      prodi: "Sistem Informasi",
      matkul: [
        ["Sistem Digital", "SENIN", 8, 12],
        ["Probabilitas & Statitiska", "SELASA", 13, 17],
        ["Algoritma & Pemrograman", "KAMIS", 13, 17]
      ]
    },
    {
      id: 3,
      prodi: "Teknik Elektro",
      matkul: [
        ["Sirkuit Elektronik Dasar", "SENIN", 8, 12],
        ["Fisika Dasar 1", "SELASA", 13, 17],
        ["Computer Architecture & Organization", "KAMIS", 13, 15]
      ]
    },
    {
      id: 4,
      prodi: "Ilmu Komunikasi",
      matkul: [
        ["Creative Thinking", "SENIN", 8, 12],
        ["Public Relations", "SELASA", 13, 17],
        ["Komunikasi Massa", "KAMIS", 13, 15]
      ]
    },
    {
      id: 5,
      prodi: "Manajemen",
      matkul: [
        ["Matematika Bisnis", "SENIN", 8, 12],
        ["Manajemen Keuangan", "SELASA", 13, 17],
        ["Statistika Bisnis", "KAMIS", 13, 15]
      ]
    },
    {
      id: 6,
      prodi: "Desain Komunikasi Visual",
      matkul: [
        ["Media Interaktif", "SENIN", 8, 12],
        ["Komunikasi Visual", "SELASA", 13, 17],
        ["Tipografi Aplikatif", "KAMIS", 13, 15]
      ]
    },
    {
      id: 7,
      prodi: "Perhotelan",
      matkul: [
        ["Tata Boga", "SENIN", 8, 12],
        ["Pastry", "SELASA", 13, 17],
        ["Tata Hidang", "KAMIS", 13, 15]
      ]
    }
  ];

  function changeState(e) {
    if (name === "" || major === "" || major === "Choose your major") {
      if (
        (name !== "" && major === "Choose your major") ||
        (name !== "" && major === "")
      ) {
        alert("Silakan masukkan program studi Anda!");
        return;
      } else if (name === "" && major !== "Choose your major" && major !== "") {
        alert("Silakan masukkan nama Anda!");
        return;
      } else {
        alert("Silakan masukkan nama dan program studi!");
        return;
      }
    }
    e.target.value = true;
    props.change_nama(name);
    props.change_jurusan(major);

    for (let i of pilihanProdi) {
      if (i.prodi === major) {
        props.change_matkul(i.matkul);
        break;
      }
    }

    props.onclick(e.target.value);
  }

  const handleInputName = (event) => setName(event.target.value);
  const handleInputMajor = (event) => setMajor(event.target.value);
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div id="login-form">
      <form onSubmit={submitForm}>
        <img className="" src={LogoUMN} alt="ssssss" />
        <input
          className="form-control"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputName}
        />

        <select
          name={major}
          id="pilih-jurusan"
          value={major}
          onChange={handleInputMajor}
        >
          {pilihanProdi.map((j) => (
            <option
              id={j.id}
              key={j.id}
              value={j.prodi}
              onClick={handleInputMajor}
            >
              {j.prodi}
            </option>
          ))}
        </select>
        <button
          className="mt-3 btn btn-primary btnHover"
          type="submit"
          value={props.value}
          onClick={changeState}
        >
          Let's get started!
        </button>
      </form>
    </div>
  );
}
