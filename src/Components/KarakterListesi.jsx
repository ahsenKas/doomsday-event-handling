import Karakterler from "./Karakterler";
import { useState } from "react";
import "./KarakterListesi.css";
import thor from "../assets/thor.jpg";
import doom from "../assets/doom.jpg";
import loki from "../assets/loki.jpg";
import steveRogers from "../assets/steveRogers.jpg";
import professorX from "../assets/professorX.jpg";
import gambit from "../assets/gambit.jpeg";

function KarakterListesi({ isim }) {
  // Her kullanıcının kendisine ait kayıt anahtarı
  const kullaniciAnahtari = `doomsdayBegenileri_${isim.trim().toLocaleLowerCase("tr-TR")}`;

  // Daha önce kaydedilmiş beğenileri al
  const kayitliBegeniler =
    JSON.parse(sessionStorage.getItem(kullaniciAnahtari)) || [];

  const [tema, setTema] = useState("light");

  const [karakterler, setKarakterler] = useState([
    {
      id: 1,
      name: "Thor",
      image: thor,
      likeCount: kayitliBegeniler.includes(1) ? 1 : 0,
    },
    {
      id: 2,
      name: "Victor von Doom",
      image: doom,
      likeCount: kayitliBegeniler.includes(2) ? 1 : 0,
    },
    {
      id: 3,
      name: "Loki",
      image: loki,
      likeCount: kayitliBegeniler.includes(3) ? 1 : 0,
    },
    {
      id: 4,
      name: "Steve Rogers",
      image: steveRogers,
      likeCount: kayitliBegeniler.includes(4) ? 1 : 0,
    },
    {
      id: 5,
      name: "Professor X",
      image: professorX,
      likeCount: kayitliBegeniler.includes(5) ? 1 : 0,
    },
    {
      id: 6,
      name: "Gambit",
      image: gambit,
      likeCount: kayitliBegeniler.includes(6) ? 1 : 0,
    },
  ]);

  function begen(karakterId) {
    const yeniKarakterler = karakterler.map((karakter) => {
      if (karakter.id === karakterId) {
        return {
          ...karakter,
          likeCount: karakter.likeCount === 0 ? 1 : 0,
        };
      }

      return karakter;
    });

    setKarakterler(yeniKarakterler);

    // Beğenilmiş karakterleri bul
    const begenilenler = yeniKarakterler
      .filter((karakter) => karakter.likeCount === 1)
      .map((karakter) => karakter.id);

    // Beğenileri kullanıcının adına göre kaydet
    sessionStorage.setItem(kullaniciAnahtari, JSON.stringify(begenilenler));
  }

  return (
    <div
      className={
        tema === "light"
          ? "karakter-sayfasi tema-light"
          : "karakter-sayfasi tema-dark"
      }
    >
      <div className="baslik-alani">
        <div className="baslik-metni">
          <h1>Hoş geldin, {isim}!</h1>
          <h2>Favori Doomsday karakterini seç.</h2>
        </div>

        <button
          className="theme-button"
          onClick={() => setTema(tema === "light" ? "dark" : "light")}
        >
          Tema Değiştir
        </button>
      </div>

      <div className="karakter-listesi">
        {karakterler.map((karakter) => (
          <Karakterler key={karakter.id} karakterim={karakter} begen={begen} />
        ))}
      </div>
    </div>
  );
}

export default KarakterListesi;
