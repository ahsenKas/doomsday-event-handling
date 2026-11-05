import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./Components/Welcome";
import CharacterSelection from "./Components/CharacterSelection";

function App() {
  const [isim, setIsim] = useState("");
  const [giris, setGiris] = useState(false);

  function isimAl(e) {
    setIsim(e.target.value);
    console.log(isim);
  }

  function isimKontrol() {
    if (isim.trim() !== "") {
      setGiris(true);
    } else {
      toast.error("Lütfen geçerli bir isim girin.");
    }
  }
  return (
    <div className="app-container">
      <ToastContainer />
      {giris === false ? (
        <Welcome isim={isim} isimAl={isimAl} isimKontrol={isimKontrol} />
      ) : (
        <div className="character-container">
          <CharacterSelection isim={isim} />
        </div>
      )}
    </div>
  );
}

export default App;
