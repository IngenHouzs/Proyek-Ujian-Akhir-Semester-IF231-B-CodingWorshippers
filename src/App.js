import Frame from "./loginComponent/Frame";
import GameFrame from "./inGameComponent/GameFrame";
import React, { useState } from "react";
import DeathGameOver from "./loginComponent/DeathGameOver";
import FailedGameOver from "./loginComponent/FailedGameOver";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(props) {
  const [gameMenu, setGameMenu] = useState(false);
  const [gameNama, setGameNama] = useState("");
  const [gameJurusan, setGameJurusan] = useState("");
  const [matkul, setMatkul] = useState([]);
  const [gender, setGender] = useState(true);

  const [isDead, setIsDead] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isLulus, setIsLulus] = useState(false);

  const updateSetIsDead = () => {
    setIsDead(true);
  };
  const updateSetIsFailed = () => {
    setIsFailed(true);
  };

  const restartGame = () => {
    setIsDead(false);
    setIsFailed(false);
    setIsLulus(false);
  };

  function backToMainMenu() {
    setIsDead(false);
    setIsFailed(false);
    setIsLulus(false);
    setGameMenu(false);
  }

  function changeGameMenu(e) {
    setGameMenu(e); // *
  }

  function changeNama(e) {
    setGameNama(e);
  }

  function changeJurusan(e) {
    setGameJurusan(e);
  }

  function changeMatkul(e) {
    setMatkul(e);
  }

  function changeGender(e) {
    setGender(e);
  }

  const updateSetIsLulus = () => {
    setIsLulus(true);
  };

  return (
    <div className="App">
      {isDead ? (
        <DeathGameOver restartGame={restartGame} />
      ) : isFailed ? (
        <FailedGameOver restartGame={restartGame} />
      ) : gameMenu ? (
        <GameFrame
          name={gameNama}
          major={gameJurusan}
          mata_kuliah={matkul}
          gender={gender}
          updateSetIsDead={updateSetIsDead}
          updateSetIsFailed={updateSetIsFailed}
          updateSetIsLulus={updateSetIsLulus}
          isLulus={isLulus}
          backToMainMenu={backToMainMenu}
        />
      ) : (
        <Frame
          value={gameMenu}
          onclick={changeGameMenu}
          name={gameNama}
          nama_jurusan={gameJurusan}
          mata_kuliah={matkul}
          change_nama={changeNama}
          change_jurusan={changeJurusan}
          change_matkul={changeMatkul}
          gender={gender}
          gantiGender={changeGender}
        />
      )}
    </div>
  );
}
