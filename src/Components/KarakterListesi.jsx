import Karakterler from "./Karakterler";
import { useState } from "react";
import "./KarakterListesi.css";
import thor from "../assets/thor.jpg";
import doom from "../assets/doom.jpg";
import loki from "../assets/loki.jpg";
import steveRogers from "../assets/steveRogers.jpg";
import professorX from "../assets/professorX.jpg";
import gambit from "../assets/gambit.jpeg";

function KarakterListesi() {
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
  const [karakterler, setKarakterler] = useState([
    { id: 1, name: "Thor", image: thor, likeCount: 0 },
    { id: 2, name: "Victor von Doom", image: doom, likeCount: 0 },
    { id: 3, name: "Loki", image: loki, likeCount: 0 },
    { id: 4, name: "Steve Rogers", image: steveRogers, likeCount: 0 },
    { id: 5, name: "Professor X", image: professorX, likeCount: 0 },
    { id: 6, name: "Gambit", image: gambit, likeCount: 0 },
  ]);

  return (
    <div className="karakter-listesi">
      {karakterler.map((karakter) => (
        <Karakterler key={karakter.id} karakterim={karakter} begen={begen} />
      ))}
    </div>
  );
}

export default KarakterListesi;
