import Karakterler from "./Karakterlerim";
import { useState } from "react";
import "./KarakterListesi.css";
import thor from "../assets/thor.jpg";
import doom from "../assets/doom.jpg";
import loki from "../assets/loki.jpg";
import steveRogers from "../assets/steveRogers.jpg";
import professorX from "../assets/professorX.jpg";
import gambit from "../assets/gambit.jpeg";

function KarakterListesi({ isim }) {
  // Tema bilgisi
  const [tema, setTema] = useState("light");

  // Karakterlerin bilgileri ve beğeni sayıları
  const [karakterler, setKarakterler] = useState([
    { id: 1, name: "Thor", image: thor, likeCount: 0 },
    { id: 2, name: "Victor von Doom", image: doom, likeCount: 0 },
    { id: 3, name: "Loki", image: loki, likeCount: 0 },
    { id: 4, name: "Steve Rogers", image: steveRogers, likeCount: 0 },
    { id: 5, name: "Professor X", image: professorX, likeCount: 0 },
    { id: 6, name: "Gambit", image: gambit, likeCount: 0 },
  ]);

  // Seçilen karakterin beğeni sayısını artırır.
  function begen(karakterId) {
    const yeniKarakterler = karakterler.map((karakter) => {
      if (karakter.id === karakterId) {
        return {
          ...karakter,
          likeCount: karakter.likeCount + 1,
        };
      } else {
        return karakter;
      }
    });

    setKarakterler(yeniKarakterler);
  }

  return (
    <div
      className={
        tema === "light"
          ? "karakter-sayfasi tema-light"
          : "karakter-sayfasi tema-dark"
      }
    >
      {/* Başlıklar ve tema butonu */}
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

      {/* Karakter kartları */}
      <div className="karakter-listesi">
        {karakterler.map((karakter) => (
          <Karakterler key={karakter.id} karakterim={karakter} begen={begen} />
        ))}
      </div>
    </div>
  );
}

export default KarakterListesi;
