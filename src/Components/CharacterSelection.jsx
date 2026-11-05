import "./CharacterSelection.css";
import KarakterListesi from "./KarakterListesi";
import { useState } from "react";

function CharacterSelection({ isim }) {
  const [tema, setTema] = useState("light");

  return (
    <div
      className={
        tema === "light"
          ? "character-selection tema-light"
          : "character-selection tema-dark"
      }
    >
      <button
        className="theme-button"
        onClick={() => setTema(tema === "light" ? "dark" : "light")}
      >
        Tema Değiştir
      </button>

      <h1>Hoş geldin, {isim}!</h1>
      <p>Favori Doomsday karakterini seç.</p>

      <KarakterListesi />
    </div>
  );
}

export default CharacterSelection;
