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
  // Tema bilgisi
  const [tema, setTema] = useState("light");

  // Karakterlerin bilgilerini ve kayıtlı beğenilerini yükler.
  const [karakterler, setKarakterler] = useState(() => {
    const ilkKarakterler = [
      { id: 1, name: "Thor", image: thor },
      { id: 2, name: "Victor von Doom", image: doom },
      { id: 3, name: "Loki", image: loki },
      { id: 4, name: "Steve Rogers", image: steveRogers },
      { id: 5, name: "Professor X", image: professorX },
      { id: 6, name: "Gambit", image: gambit },
    ];

    try {
      const kayitliBegeniler = JSON.parse(
        localStorage.getItem("doomsdayBegenileri") || "[]",
      );

      return ilkKarakterler.map((karakter) => ({
        ...karakter,
        likeCount:
          Array.isArray(kayitliBegeniler) &&
          kayitliBegeniler.includes(karakter.id)
            ? 1
            : 0,
      }));
    } catch {
      return ilkKarakterler.map((karakter) => ({
        ...karakter,
        likeCount: 0,
      }));
    }
  });

  // Beğeniyi açar veya geri alır.
  function begen(karakterId) {
    const yeniKarakterler = karakterler.map((karakter) => {
      if (karakter.id === karakterId) {
        return {
          ...karakter,
          likeCount: karakter.likeCount === 0 ? 1 : 0,
        };
      } else {
        return karakter;
      }
    });

    setKarakterler(yeniKarakterler);

    // Beğenilen karakterlerin ID değerlerini bulur.
    const begenilenler = yeniKarakterler
      .filter((karakter) => karakter.likeCount === 1)
      .map((karakter) => karakter.id);

    // Beğenileri tarayıcıya kaydeder.
    localStorage.setItem("doomsdayBegenileri", JSON.stringify(begenilenler));
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
