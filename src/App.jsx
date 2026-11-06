import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Welcome from "./Components/Welcome";
import KarakterListesi from "./Components/KarakterListesi";

function App() {
  const [isim, setIsim] = useState("");
  const [giris, setGiris] = useState(false);

  // Input içerisindeki ismi alır.
  function isimAl(e) {
    setIsim(e.target.value);
  }

  // İsim boş değilse karakter sayfasına geçer.
  function isimKontrol() {
    if (isim.trim() !== "") {
      setGiris(true);
    } else {
      toast.error("Lütfen geçerli bir isim girin.");
    }
  }

  return (
    <>
      <ToastContainer />

      {giris === false ? (
        <div className="app-container">
          <Welcome isim={isim} isimAl={isimAl} isimKontrol={isimKontrol} />
        </div>
      ) : (
        <KarakterListesi isim={isim} />
      )}
    </>
  );
}

export default App;
