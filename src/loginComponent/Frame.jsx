import React, { useState } from "react";
import Character from "./Character";
import Form from "./Form";

export default function Frame(props) {
  return (
    <div id="login-frame">
      <Character gender={props.gender} gantiGender={props.gantiGender} />
      <Form
        value={props.value}
        onclick={props.onclick}
        name={props.name}
        jurusan={props.nama_jurusan}
        mata_kuliah={props.mata_kuliah}
        change_nama={props.change_nama}
        change_jurusan={props.change_jurusan}
        change_matkul={props.change_matkul}
        changeApprove={props.changeApprove}
      />
    </div>
  );
}
