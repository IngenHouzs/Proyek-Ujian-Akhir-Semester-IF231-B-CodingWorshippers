import React, { useState, useEffect } from "react";
import GoTo from "./GoTo";
import Phone from "./Phone";
import Player from "./Player";
import Status from "./Status";
import Tambahan from "./Tambahan";
import Uang from "./Uang";
import Waktu from "./Waktu";
import ProgressMatkul from "./ProgressMatkul";
import Credit from "./Credit";
import Profile from "./Profile";
import Evaluasi from "./Evaluasi";
import Lulus from "./Lulus";
import "../styles.css";
import Supermarket from "./Supermarket";
import Kafe from "./Kafe";
import Inventory from "./Inventory";
import daftarBarang from "../barang.json";
import ResponsivePhone from "./ResponsivePhone";
import Overlay from "./Overlay";

import BackpackIcon from "../assets/assetIcon/backpack.png";

import CafeBG from "../assets/assetBackground/Cafe.jpg";
import CampusBG from "../assets/assetBackground/Campus.jpg";
import HomeBG from "../assets/assetBackground/Homerumah.jpeg";
import SupermarketBG from "../assets/assetBackground/Supermarket.jpg";

import CafeBG_Mobile from "../assets/assetBackground/Cafe Mobile.jpg";
import HomeBG_Mobile from "../assets/assetBackground/Home Mobile.jpg";
import CampusBG_Mobile from "../assets/assetBackground/Campus Mobile.jpg";
import SupermarketBG_Mobile from "../assets/assetBackground/Supermarket Mobile.jpg";

import PagiHujan from "../assets/assetBackground/Hujan Pagi.jpg";
import PagiNormal from "../assets/assetBackground/Normal Pagi.jpg";
import PagiBerawan from "../assets/assetBackground/Berawan Pagi.jpg";

import SiangHujan from "../assets/assetBackground/Hujan Siang.jpg";
import SiangNormal from "../assets/assetBackground/Normal Siang.jpg";
import SiangBerawan from "../assets/assetBackground/Berawan siang.jpg";

import SoreHujan from "../assets/assetBackground/Hujan Sore.jpg";
import SoreNormal from "../assets/assetBackground/Normal Sore.jpg";
import SoreBerawan from "../assets/assetBackground/Berawan sore.jpg";

import MalamHujan from "../assets/assetBackground/Hujan Malam.jpg";
import MalamNormal from "../assets/assetBackground/Normal Malam.jpg";
import MalamBerawan from "../assets/assetBackground/Berawan malam.jpg";

export default function GameFrame(props) {
  const [lokasi, setLokasi] = useState("Home");
  const [notif, setNotif] = useState("");
  const [blockNotif, setBlockNotif] = useState(false);
  const [openProgressMatkul, setOpenProgressMatkul] = useState(false);
  const [credit, setCredit] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [uang, setUang] = useState(2000000);
  const [inSupermarket, setInSupermarket] = useState(false);
  const [isOpenSupermarket, setIsOpenSupermarket] = useState(false);
  const [isOpenInventory, setIsOpenInventory] = useState(false);
  const [isOpenEvaluasi, setIsOpenEvaluasi] = useState(false);
  const [tingkatBelajar, setTingkatBelajar] = useState(0);
  const [tingkatBelajarKampus, setTingkatBelajarKampus] = useState(0);
  const [mingguKe, setMingguKe] = useState(0); // nilai awal hrs 0
  const [lulus, setLulus] = useState(false);

  const [isOnMobile, setIsOnMobile] = useState(false);
  const [isOpenPhoneMobile, setIsOpenPhoneMobile] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [timeStatus, setTimeStatus] = useState("");
  const [statusPlayer, setStatusPlayer] = useState("normal");

  const [inKafe, setInKafe] = useState(false);
  const [indexItemCafe, setIndexItemCafe] = useState(0);

  const [jam, setJam] = useState(0);

  const [currentDay, setCurrentDay] = useState("");
  const [infoMatkul, setInfoMatkul] = useState(
    props.mata_kuliah.map((matkul) => [matkul, 0])
  );
  const [daftarAbsenMatkul, setDaftarAbsenMatkul] = useState(
    infoMatkul.map((matkul) => [matkul[0], false])
  );

  const [selesaiBelajarKelas, setSelesaiBelajarKelas] = useState(false);

  const [pelajaranEffectFlag, setPelajaranEffectFlag] = useState(false);
  const [inventory, setInventory] = useState([]);

  const [progress, setProgress] = useState([
    ["Makan", 50, "Supermarket", false], // ->disabled -> false
    ["Main", 50, "Campus", "Supermarket", false],
    ["Tidur", 50, "Campus", "Cafe", "Supermarket", false],
    ["Belajar", 0, "Supermarket", false] // not
  ]);

  const [daftarBarangSupermarket, setDaftarBarangSupermarket] = useState([]);
  const [daftarBarangKafe, setDaftarBarangKafe] = useState([]);

  const [progressBelajar, setProgressBelajar] = useState(progress[3][1]);
  const [badPhysicIndicator, setBadPhysicIndicator] = useState(0);
  const [startTimerKegagalanFisik, setStartTimerKegagalanFisik] = useState(
    false
  );
  const [startTimerDeteksiKemalasan, setStartTimerDeteksiKemalasan] = useState(
    false
  );
  const [indikatorKemalasan, setIndikatorKemalasan] = useState(0);
  const [sedangKelas, setSedangKelas] = useState(false);

  const [sedangTidur, setSedangTidur] = useState(false);

  ////////////////////////////////////////////////////////////
  const [day, setDay] = useState("");
  //const [totalminute, setTotalminue] = useState();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [currentHari, setCurrentHari] = useState(6);

  const [backgroundLokasi, setBackgroundLokasi] = useState(HomeBG);
  const [jendela, setJendela] = useState(null);
  const [cuaca, setCuaca] = useState("Clear");

  const listHari = [
    "SENIN",
    "SELASA",
    "RABU",
    "KAMIS",
    "JUMAT",
    "SABTU",
    "MINGGU"
  ];

  // const [listJSON, setListJSON] = useState({});

  const [weatherList, setWeatherList] = useState([]);

  const [counterWeather, setCounterWeather] = useState(0);

  // const url =
  //   "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=9b27095958c5a31afafa7a380e94a242";
  // API atas udah ready kalau bawah mati
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=5a93cf4eed90323635a9209df23f4054";

  // GK USH DIMATIIN LG GPP UDH GK NGSPAM

  useEffect(() => {
    if (isOpenEvaluasi) setOverlay(true);
    else setOverlay(false);
  }, [isOpenEvaluasi]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var tempWeatherList = weatherList;
        // tempWeatherList = [];
        for (let element in data.list) {
          tempWeatherList.push(data.list[element].weather[0].main);
        }
        setWeatherList(tempWeatherList);
      });

    const interval = setInterval(function () {
      setCuaca(weatherList[Math.floor(Math.random() * weatherList.length)]);
    }, 10000);
  }, []);

  useEffect(() => {
    if (lulus) setOverlay(true);
    else setOverlay(false);
  }, [lulus]);

  useEffect(() => {
    console.log(cuaca, "CUACA SKRG");
  }, [cuaca]);

  useEffect(() => {
    if (jam >= 0 && jam <= 10) {
      setTimeStatus("pagi");
      if (cuaca === "Clear" && lokasi === "Home") {
        if (jam >= 5 && jam <= 10) setJendela(PagiNormal);
        else setJendela(MalamNormal);
      } else if (cuaca === "Clouds" && lokasi === "Home") {
        if (jam >= 5 && jam <= 10) setJendela(PagiBerawan);
        else setJendela(MalamBerawan);
      } else if (cuaca === "Rain" && lokasi === "Home") {
        if (jam >= 5 && jam <= 10) setJendela(PagiHujan);
        else setJendela(MalamHujan);
      }
      // } else setJendela("");
    } else if (jam >= 11 && jam <= 15) {
      setTimeStatus("siang");
      if (cuaca === "Clear" && lokasi === "Home") setJendela(SiangNormal);
      else if (cuaca === "Clouds" && lokasi === "Home")
        setJendela(SiangBerawan);
      else if (cuaca === "Rain" && lokasi === "Home") setJendela(SiangHujan);
      // Clear hrny
      // else setJendela("");
    } else if (jam >= 16 && jam <= 18) {
      setTimeStatus("sore");
      if (cuaca === "Clear" && lokasi === "Home") setJendela(SoreNormal);
      else if (cuaca === "Clouds" && lokasi === "Home") setJendela(SoreBerawan);
      else if (cuaca === "Rain" && lokasi === "Home") setJendela(SoreHujan);
      // Clear hrsn
      // else setJendela("");
    } else if (jam >= 19 && jam <= 24) {
      setTimeStatus("malam");
      if (cuaca === "Clear" && lokasi === "Home") setJendela(MalamNormal);
      else if (cuaca === "Clouds" && lokasi === "Home")
        setJendela(MalamBerawan);
      else if (cuaca === "Rain" && lokasi === "Home") setJendela(MalamHujan);
      // normal hrsny
      // else setJendela("");
    }
  }, [jam, cuaca]);

  const addMoney = (value) => {
    return uang + value;
  };

  function updateUang(val) {
    setUang((uang) => uang + val);
  }

  const resetProgressMingguan = () => {
    setIsOpenEvaluasi(false);
    setTingkatBelajar(0);
    setTingkatBelajarKampus(0);
    for (let absensi of daftarAbsenMatkul) {
      absensi[1] = false;
    }
  };

  useEffect(() => {
    if (lokasi === "Home") {
      setBackgroundLokasi(HomeBG);
      if (jam >= 0 && jam <= 10) {
        setTimeStatus("pagi");
        if (cuaca === "Clear" && lokasi === "Home") {
          if (jam >= 5 && jam <= 10) setJendela(PagiNormal);
          else setJendela(MalamNormal);
        } else if (cuaca === "Clouds" && lokasi === "Home") {
          if (jam >= 5 && jam <= 10) setJendela(PagiBerawan);
          else setJendela(MalamBerawan);
        } else if (cuaca === "Rain" && lokasi === "Home") {
          if (jam >= 5 && jam <= 10) setJendela(PagiHujan);
          else setJendela(MalamHujan);
        }
        // } else setJendela("");
      } else if (jam >= 11 && jam <= 15) {
        setTimeStatus("siang");
        if (cuaca === "Clear" && lokasi === "Home") setJendela(SiangNormal);
        else if (cuaca === "Clouds" && lokasi === "Home")
          setJendela(SiangBerawan);
        else if (cuaca === "Rain" && lokasi === "Home") setJendela(SiangHujan);
        // Clear hrny
        // else setJendela("");
      } else if (jam >= 16 && jam <= 18) {
        setTimeStatus("sore");
        if (cuaca === "Clear" && lokasi === "Home") setJendela(SoreNormal);
        else if (cuaca === "Clouds" && lokasi === "Home")
          setJendela(SoreBerawan);
        else if (cuaca === "Rain" && lokasi === "Home") setJendela(SoreHujan);
        // Clear hrsn
        // else setJendela("");
      } else if (jam >= 19 && jam <= 24) {
        setTimeStatus("malam");
        if (cuaca === "Clear" && lokasi === "Home") setJendela(MalamNormal);
        else if (cuaca === "Clouds" && lokasi === "Home")
          setJendela(MalamBerawan);
        else if (cuaca === "Rain" && lokasi === "Home") setJendela(MalamHujan);
        // normal hrsny
        // else setJendela("");
      }
    } else if (lokasi === "Campus") {
      setBackgroundLokasi(CampusBG);
      // setJendela("");
    } else if (lokasi === "Supermarket") {
      setBackgroundLokasi(SupermarketBG);
      // setJendela("");
    } else if (lokasi === "Cafe") {
      setBackgroundLokasi(CafeBG);
      // setJendela("");
    }
  }, [lokasi]);

  useEffect(() => {
    if (lokasi === "Cafe") {
      document.getElementById("center-gambar-pemain").style.height = "300px";
    } else
      document.getElementById("center-gambar-pemain").style.height = "420px";
  }, [lokasi]);

  useEffect(() => {
    if (day === "SABTU") {
      setMingguKe((mingguKe) => mingguKe + 1);
      setIsOpenEvaluasi(true);
      if (mingguKe === 14) {
        // kelulusan brdsrkan absensi
        if (tingkatBelajarKampus / (infoMatkul.length * 14) >= 0.85) {
          setOverlay(true);
          setLulus(true);
        } else {
          props.updateSetIsFailed();
        }
      }
    }
  }, [day]);

  useEffect(() => {
    getCurrentDay(listHari[currentHari]);
  }, [currentHari]);

  useEffect(() => {
    getTime_hour(hour);
  }, [hour]);

  function changeMinute() {
    setDay((day) => {
      const newDay = listHari[currentHari];
      return newDay;
    });
    setMinute((minute) => {
      const newMinute = minute + 5;
      const checkHour = hour;

      if (checkHour === 8 && day !== "MINGGU")
        updateNotifikasi("Waktunya kuliah!");
      if (checkHour === 17 && day !== "MINGGU")
        updateNotifikasi("Waktu kuliah Anda telah selesai!");
      if (listHari[currentHari] === "MINGGU")
        updateNotifikasi("Hari ini libur! Lakukan apapun sesuka Anda...");

      if (newMinute >= 60) {
        setHour((hour) => {
          var intervalInt = 1;
          const newHour = hour + intervalInt;
          if (newHour >= 24) {
            setCurrentHari((currentHari) => {
              const newHari = currentHari + 1;
              if (newHari >= 7) {
                setDay((day) => {
                  const newDay = listHari[0];
                  return newDay;
                });
                return 0;
              }
              setDay((day) => {
                const newDay = listHari[newHari];
                return newDay;
              });
              return newHari;
            });
            return 0;
          }
          return newHour;
        });
        return 0;
      }
      return newMinute;
    });
  }

  useEffect(() => {
    const interval = setInterval(changeMinute, 1000);
    return () => clearInterval(interval);
  }, []);

  ///////////////////////////////////////////////

  function beliBarang(namaItem) {
    // setIsOpenSupermarket(true);
    var tempDaftarBarang = daftarBarangSupermarket;
    var deteksiBarang = "";
    var kodeGambar;
    for (let barang of tempDaftarBarang) {
      if (barang[0] === namaItem && uang >= barang[1]) {
        deteksiBarang = barang[0];
        barang[2]--;
        kodeGambar = barang[3];
        setUang((uang) => uang - barang[1]);
        break;
      }
    }
    const tempInventory = inventory;

    var itemExist = false;

    for (let items of inventory) {
      if (items[0] === deteksiBarang) {
        items[1]++;
        itemExist = true;
      }
    }
    if (!itemExist) tempInventory.push([deteksiBarang, 1, kodeGambar]);

    setInventory(inventory);
    setDaftarBarangSupermarket(tempDaftarBarang);
  }

  function geserKiri_Kafe(val) {
    if (indexItemCafe <= 0) setIndexItemCafe(daftarBarangKafe.length - 1);
    else setIndexItemCafe((indexItemCafe - 1) % daftarBarangKafe.length);
  }

  function geserKanan_Kafe() {
    setIndexItemCafe((indexItemCafe + 1) % daftarBarangKafe.length);
  }

  function ToNotSedangTidur() {
    setSedangTidur(false);
  }

  const beliKopi = () => {
    if (uang > daftarBarangKafe[indexItemCafe][1]) {
      setUang((uang) => uang - daftarBarangKafe[indexItemCafe][1]);
      const tempActions = [...progress];
      tempActions[1][1] += 15;
      tempActions[2][1] += 30;
      setProgress(tempActions);
    }
  };

  useEffect(() => {
    // isi inventory
    const tempInventory = inventory;
    tempInventory.push(["Ketoprak", 2, 5]);
    tempInventory.push(["Nasi Hainan", 2, 1]);
    tempInventory.push(["Nasi Uduk", 2, 10]);
    setInventory(tempInventory);
  }, []);

  useEffect(() => {
    let JSONBarang = JSON.stringify(daftarBarang);
    var arrayBarang = JSON.parse(JSONBarang);

    var counter = 0;
    var newArray = [];
    for (let element of arrayBarang.supermarket) {
      var wadah = [];
      wadah[0] = element.nama;
      wadah[1] = element.harga;
      wadah[2] = element.stok;
      wadah[3] = element.id;
      newArray.push(wadah);
    }

    var KafeArray = [];
    for (let element of arrayBarang.kafe) {
      var wadah = [];
      wadah[0] = element.nama;
      wadah[1] = element.harga;
      wadah[2] = element.id;
      KafeArray.push(wadah);
    }

    setDaftarBarangSupermarket(newArray);
    setDaftarBarangKafe(KafeArray);
  }, []);
  // line 83 an yg useEffect runapptimer

  useEffect(() => {
    setIsOpenSupermarket(false);
    if (!inSupermarket) {
      for (let buttons of document.getElementsByClassName(
        "tombol-supermarket"
      )) {
        buttons.style.display = "none";
      }
    } else {
      for (let buttons of document.getElementsByClassName(
        "tombol-supermarket"
      )) {
        buttons.style.display = "";
      }
    }
  }, [inSupermarket]);

  useEffect(function appRunTimer() {
    const interval = setInterval(() => {
      var tempActions = [...progress];

      if (tempActions[0][1] <= 0 || tempActions[2][1] <= 0)
        setStartTimerKegagalanFisik(true);

      if (tempActions[0][1] >= 100) {
        tempActions[0][1] = 100;
      }
      if (tempActions[1][1] >= 100) {
        tempActions[1][1] = 100;
      }
      if (tempActions[2][1] >= 100) {
        tempActions[2][1] = 100;
      }

      if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
      if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
      if (tempActions[2][1] >= 2) tempActions[2][1] -= 1;

      if (tempActions[0][1] <= 15) {
        updateNotifikasi("Makan dulu, yuk!");
      }
      if (tempActions[1][1] <= 15) {
        updateNotifikasi("Kamu kurang hiburan sepertinya...");
      }
      if (tempActions[2][1] <= 15) {
        updateNotifikasi("Kamu kurang tidur...");
      }

      if (tempActions[3][1] <= 15) {
        updateNotifikasi("Jangan malas, yuk belajar!");
      }

      if (tempActions[3][1] >= 100) {
        setProgressBelajar(tempActions[3][1]);
        setTingkatBelajar((tingkatBelajar) => tingkatBelajar + 30);
        tempActions[3][1] = 0;
      }

      if (tempActions[0][1] < 0) tempActions[0][1] = 0;
      if (tempActions[1][1] < 0) tempActions[1][1] = 0;
      if (tempActions[2][1] < 0) tempActions[2][1] = 0;
      if (tempActions[3][1] < 0) tempActions[3][1] = 0;

      setProgressBelajar(tempActions[3][1]);

      setProgress(tempActions);
    }, 1000);

    return function stopTimer() {
      clearInterval(interval);
    };
  }, []);

  // kl bljr 0 || makan 0 ->

  useEffect(() => {
    if (
      (progress[0][1] <= 1 || progress[2][1] <= 1) &&
      !startTimerKegagalanFisik
    ) {
      setStartTimerKegagalanFisik(true);
      const interval = setInterval(() => {
        setBadPhysicIndicator((badPhysicIndicator) => {
          if (badPhysicIndicator === 30) {
            setBadPhysicIndicator(0);

            props.updateSetIsDead();
            return clearInterval(interval);
          }
          if (progress[0][1] > 3 && progress[2][1] > 3) {
            setBadPhysicIndicator(0);
            setStartTimerKegagalanFisik(false);
            clearInterval(interval);
          }
          return (badPhysicIndicator += 1);
        });
      }, 1000);
    }
  }, [progress[0][1], progress[2][1]]);

  useEffect(() => {
    if (progress[3][1] <= 1 && !startTimerDeteksiKemalasan) {
      setStartTimerDeteksiKemalasan(true);
      const interval = setInterval(() => {
        setIndikatorKemalasan((indikatorKemalasan) => {
          if (indikatorKemalasan === 70) {
            setIndikatorKemalasan(0);

            props.updateSetIsFailed();
            return clearInterval(interval);
          }
          if (progress[3][1] > 3) {
            setIndikatorKemalasan(0);
            setStartTimerDeteksiKemalasan(false);
            clearInterval(interval);
          }
          return (indikatorKemalasan += 1);
        });
      }, 1000);
    }
  }, [progress[3][1]]);

  function skipTime_Sleep(h) {
    setSedangTidur(true);
  }

  function doAction(action) {
    // incrementBadPhysicIndicator();
    var incrementVal = 10;
    if (action === "Belajar") {
      // 0 1 value makan
      // 1 1 value main
      // 2 1 value tidur
      // 3 1 value blljr
      setStatusPlayer("belajar");
      setTimeout(() => setStatusPlayer("normal"), 2000);

      if (lokasi !== "Campus")
        setTingkatBelajar((tingkatBelajar) => tingkatBelajar + 1);

      if (progress[0][1] < 30 || progress[2][1] < 30) incrementVal = 8;
      if (progress[1][1] <= 35) incrementVal = 4;
      if (progress[0][1] < 15 || progress[2][1] < 15) incrementVal = 1;
      if (progress[2][1] <= 1) incrementVal = 0;
      progress[0][1] -= 1;
      progress[1][1] -= 1;
      progress[2][1] -= 1;
    }

    if (action === "Main") {
      setStatusPlayer("main");
      setTimeout(() => setStatusPlayer("normal"), 2000);
      incrementVal = 70;
      if (progress[0][1] < 30) incrementVal = 6;
      if (progress[2][1] < 30) incrementVal = 3;
      if (progress[2][1] <= 1) incrementVal = 0;
      progress[0][1] -= 10;
      progress[2][1] -= 10;
    }

    if (action === "Tidur") {
      setStatusPlayer("tidur");
      setTimeout(() => setStatusPlayer("normal"), 2000);
      setCuaca(weatherList[Math.floor(Math.random() * weatherList.length)]);
      const tempHour = hour + 4;
      setHour((hour) => (hour + 4) % 24);
      if (tempHour >= 24) {
        const modulo = tempHour % 24;
        setCurrentHari((currentHari) => (currentHari + 1) % 7);
        setDay(listHari[currentHari]);
      }
      incrementVal = 90;
      if (progress[0][1] < 25) incrementVal = 30;
      progress[0][1] -= 50;
      progress[1][1] -= 20;
    }

    if (action === "Makan") {
      incrementVal = 80;
      // if (progress[2][1] <= 20) incrementVal = 7;
      if (inventory.length === 0) {
        // kalo bs ini ntr bikin notif bar sendiri aja biar bisa
        updateNotifikasi("Makananmu habis :) silahkan beli pake gems");
        return;
      } else {
        setStatusPlayer("makan");
        setTimeout(() => setStatusPlayer("normal"), 2000);
        const fetchMakanan = Math.floor(Math.random() * inventory.length);
        const tempInventory = inventory;
        for (let items in tempInventory) {
          const convertToInt = parseInt(items, 10);
          if (convertToInt === fetchMakanan) {
            if (tempInventory[convertToInt][1] === 1) {
              tempInventory.splice(convertToInt, 1);
            } else {
              tempInventory[convertToInt][1]--;
            }
          }
        }
        setInventory(tempInventory);
        progress[1][1] -= 10;
        progress[2][1] -= 10;
      }
    }

    var tempActions = [...progress];
    for (let i of tempActions) {
      if (i[0] === action) i[1] += incrementVal;
    }
    setProgress(tempActions);
    // clearInterval(interval);
  }

  useEffect(() => {
    const tempProgress_refresh = progress;
    for (let element of tempProgress_refresh) {
      element[element.length - 1] = false;
    }
    setProgress(tempProgress_refresh);
    const tempProgress = progress;
    for (let element of tempProgress) {
      for (let details in element) {
        if (details <= 1) continue;
        if (element[details] === lokasi) {
          element[element.length - 1] = true;
        } // lom bs ganti
      }
    }
    setProgress(tempProgress);
  }, [lokasi, jam]);

  function cekKelulusan() {
    for (let matkul of props.mata_kuliah) {
      if (matkul[1] < 14) return false;
    }
    return true;
  }
  cekKelulusan();

  useEffect(() => {
    const tempMatkul = infoMatkul;
    var tempJam = jam;

    if (!pelajaranEffectFlag && !selesaiBelajarKelas) {
      for (let mk of tempMatkul) {
        if (
          jam >= mk[0][2] &&
          jam <= mk[0][3] - 1 &&
          currentDay === mk[0][1] &&
          sedangKelas
        ) {
          if (progress[3][1] >= 100) {
            mk[1] += 1;
            const tempDaftarAbsen = daftarAbsenMatkul;
            let counter = 0;
            for (let namaMk of tempDaftarAbsen) {
              if (namaMk[0][0] === mk[0][0]) {
                namaMk[1] = true;
                break;
              }
              counter++;
            }
            setDaftarAbsenMatkul(tempDaftarAbsen);
            setTingkatBelajarKampus(
              (tingkatBelajarKampus) => tingkatBelajarKampus + 1
            );
            setPelajaranEffectFlag(true);
            setSelesaiBelajarKelas(true);
            setSedangKelas(false);
            setInfoMatkul(tempMatkul);
          }
        }
      }
    }
  }, [progress]);

  useEffect(() => {
    for (let mk of infoMatkul) {
      if (jam === mk[0][2] - 1 && currentDay === mk[0][1]) {
        const tempActions = [...progress];
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
      }
      if (jam === mk[0][2] && currentDay === mk[0][1] && lokasi === "Campus") {
        const tempActions = [...progress];
        tempActions[3][1] = 0;
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
        setSedangKelas(true);
        setNotif("Kelas " + mk[0][0] + " sudah dimulai.");
      }

      if (
        jam < mk[0][3] &&
        jam > mk[0][2] &&
        currentDay === mk[0][1] &&
        lokasi === "Campus"
      ) {
        const tempActions = [...progress];
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
      }

      if (jam === mk[0][3] && currentDay === mk[0][1]) {
        setPelajaranEffectFlag(false);
        setSelesaiBelajarKelas(false);
        const tempActions = [...progress];
        if (tempActions[0][3] === "Campus") tempActions[0].splice(3, 1); //
        setProgress(tempActions);
        setSedangKelas(false);

        setNotif("Kelas " + mk[0][0] + " sudah selesai.");
      }

      if (jam === mk[0][3] - 1 && currentDay === mk[0][1]) {
        const tempActions = [...progress];
        if (tempActions[0][3] === "Campus") tempActions[0].splice(3, 1); //
        setProgress(tempActions);
      }
    }
  }, [jam]);

  // isi matkul array state = [ [nama, hari , jamstart, jamfinish] , progress ]

  function updateStartTimerKegagalanFisik_start() {
    setStartTimerKegagalanFisik(true);
  }
  function updateStartTimerKegagalanFisik_stop() {
    setStartTimerKegagalanFisik(false);
  }

  const updateCloseMobile = () => {
    setIsOpenPhoneMobile(false);
    setOverlay(false);
  };
  const updateOpenMobile = () => {
    setIsOpenPhoneMobile(true);
    setOverlay(true);
  };

  function getValueBelajar(val) {
    setProgressBelajar(val);
  }

  function getCurrentDay(d) {
    setCurrentDay(d);
  }

  function getInfoMatkul(arr) {
    setInfoMatkul(arr);
  }

  // function getInfoMatkul(arr) {
  //   setInfoMatkul(arr);
  //   // jam start finish
  //   if (
  //     jam >= arr[0][2] &&
  //     jam <= arr[0][3] &&
  //     currentDay === arr[0][1] &&
  //     progressBelajar >= 100
  //   ) {
  //     arr[1]++;
  //   }
  //   return arr[1];
  // }

  function updateOnMobile_IN() {
    setIsOnMobile(true);
  }

  function updateOnMobile_OUT() {
    setIsOnMobile(false);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  function openOverlay() {
    setOverlay(true);
  }

  useEffect(() => {
    if (window.innerWidth <= 780) setIsOnMobile(false);
    else setIsOnMobile(true);

    if (lokasi === "Supermarket") {
      if (window.innerWidth <= 650) setBackgroundLokasi(SupermarketBG_Mobile);
      else setBackgroundLokasi(SupermarketBG);
    } else if (lokasi === "Home") {
      if (window.innerWidth <= 650) setBackgroundLokasi(HomeBG_Mobile);
      else setBackgroundLokasi(HomeBG);
    } else if (lokasi === "Cafe") {
      if (window.innerWidth <= 650) setBackgroundLokasi(CafeBG_Mobile);
      else setBackgroundLokasi(CafeBG);
    } else if (lokasi === "Campus") {
      if (window.innerWidth <= 650) setBackgroundLokasi(CampusBG_Mobile);
      // mobile
      else setBackgroundLokasi(CampusBG);
    }
  }, [window.innerWidth]);

  function getTime_hour(h) {
    setJam(h);
  }

  useEffect(() => {
    setNotif("Hello!");
  }, []);

  function updateNotifikasi(pesan) {
    if (!blockNotif) {
      setBlockNotif(true);
      setTimeout(() => {
        setNotif(pesan);
        setBlockNotif(false);
      }, 4000); // queueing
    }
  }

  function updateOpenMatkulAccess() {
    if (!openProgressMatkul) setOverlay(true);
    else setOverlay(false);
    setOpenProgressMatkul(!openProgressMatkul);
  }

  function updateCreditAccess() {
    if (!credit) setOverlay(true);
    else setOverlay(false);
    setCredit(!credit);
  }

  function updateProfileAccess() {
    if (!openProfile) setOverlay(true);
    else setOverlay(false);
    setOpenProfile(!openProfile);
  }

  function updateOpenKafe() {
    setInKafe(!inKafe);
  }

  function updateOpenInventory_IN() {
    setOverlay(true);
    setIsOpenInventory(true);
  }

  function updateOpenInventory_OUT() {
    setOverlay(false);
    setIsOpenInventory(false);
  }

  function updateOpenKafe_IN() {
    setInKafe(true);
  }

  function updateOpenKafe_OUT() {
    setInKafe(false);
  }

  function updateOpenSupermarketMenu() {
    if (inSupermarket) {
      if (!isOpenSupermarket) setOverlay(true);
      else setOverlay(false);
      setIsOpenSupermarket(!isOpenSupermarket);
    }
  }

  function updateGoToSupermarket_OUT() {
    setInSupermarket(false);
    // setOverlay(false);
  }

  function updateGoToSupermarket_IN() {
    setInSupermarket(true);
    // setOverlay(true);
  }

  function changeLokasi(e) {
    setLokasi(e);
  }

  function updateUang(value) {
    setUang(value);
  }

  // async function checkAbsensiMatkul(namaMatkul, progressBelajar, arr){
  //     await (typeof progressBelajar !== "undefined");
  //     if (progressBelajar >= 100){
  //         for (let i of infoMatkul){
  //           if (namaMatkul === infoMatkul[0][0]) infoMatkul[1]++;
  //         }
  //     }
  // }

  return (
    <div id="game-frame">
      <img src={backgroundLokasi} id="background-latar" alt="" />
      {overlay ? <Overlay /> : null}
      {isOpenPhoneMobile ? (
        <ResponsivePhone jam={jam} minute={minute} close={updateCloseMobile} />
      ) : null}
      {lulus ? (
        <Lulus
          nama={props.name}
          jurusan={props.major}
          gender={props.gender}
          backToMainMenu={props.backToMainMenu}
        />
      ) : null}
      {isOpenEvaluasi ? (
        <Evaluasi
          daftarAbsenMatkul={daftarAbsenMatkul}
          infoMatkul={infoMatkul}
          tingkatBelajar={tingkatBelajar}
          tingkatBelajarKampus={tingkatBelajarKampus}
          mingguKe={mingguKe}
          nama={props.name}
          jurusan={props.major}
          resetProgressMingguan={resetProgressMingguan}
          addMoney={addMoney}
          updateUang={updateUang}
          uang={uang}
        />
      ) : null}
      {isOpenInventory ? (
        <Inventory
          updateOpenInventory_OUT={updateOpenInventory_OUT}
          userInventory={inventory}
        />
      ) : null}
      {openProgressMatkul ? (
        <ProgressMatkul
          jurusan={props.major}
          mata_kuliah={infoMatkul}
          name={props.name}
          getInfo_matkul={getInfoMatkul}
          updatePM={updateOpenMatkulAccess}
        />
      ) : null}
      {credit ? <Credit updateCredit={updateCreditAccess} /> : null}
      {openProfile ? (
        <Profile
          updateProfile={updateProfileAccess}
          nama={props.name}
          jurusan={props.major}
          gender={props.gender}
        />
      ) : null}
      {isOpenSupermarket ? (
        <Supermarket
          updateOpenSupermarketMenu={updateOpenSupermarketMenu}
          daftarBarangSupermarket={daftarBarangSupermarket}
          beliBarang={beliBarang}
        />
      ) : null}
      <div id="left-column">
        <GoTo
          lokasiPemain={lokasi}
          onclick={changeLokasi}
          inSupermarket={inSupermarket}
          updateGoToSupermarket_OUT={updateGoToSupermarket_OUT}
          updateGoToSupermarket_IN={updateGoToSupermarket_IN}
          updateOpenKafe_IN={updateOpenKafe_IN}
          updateOpenKafe_OUT={updateOpenKafe_OUT}
          isOnMobile={isOnMobile}
        />
        {isOnMobile ? <Phone jam={jam} minute={minute} /> : null}
        {!isOnMobile ? (
          <button
            onClick={updateOpenMobile}
            style={{
              width: "40%",
              backgroundColor: "#32568f",
              color: "white",
              borderRadius: "10px"
            }}
          >
            Buka Ponsel
          </button>
        ) : null}
        <div
          onClick={updateOpenInventory_IN}
          id="open-inventory-button"
          className="btn-primary left-btnzoom"
        >
          <img src={BackpackIcon} alt="" />
        </div>
      </div>
      <div id="center-column">
        <Player
          nama={props.name}
          status={notif}
          inKafe={inKafe}
          updateOpenKafe={updateOpenKafe}
          updateOpenKafe_IN={updateOpenKafe_IN}
          updateOpenKafe_OUT={updateOpenKafe_OUT}
          geserKiri_Kafe={geserKiri_Kafe}
          geserKanan_Kafe={geserKanan_Kafe}
          daftarBarangKafe={daftarBarangKafe}
          indexItemCafe={indexItemCafe}
          beliKopi={beliKopi}
          hour={hour}
          statusPlayer={statusPlayer}
          gender={props.gender}
          jendela={jendela}
          cuaca={cuaca}
        />
      </div>
      <div id="right-column">
        <Waktu
          listHari={listHari}
          currentHari={currentHari}
          hour={hour}
          minute={minute}
        />
        <Uang uang={uang} />
        <Status
          updateNotif={updateNotifikasi}
          getBelajarValue={getValueBelajar}
          progress={progress}
          doAction={doAction}
        />
        <Tambahan
          updatePM={updateOpenMatkulAccess}
          updateCredit={updateCreditAccess}
          updateProfile={updateProfileAccess}
          updateOpenSupermarketMenu={updateOpenSupermarketMenu}
        />
      </div>
    </div>
  );
}
