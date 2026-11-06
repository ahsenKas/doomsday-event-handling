import "./Welcome.css";

function Welcome({ isim, isimAl, isimKontrol }) {
  return (
    <div className="welcome-container">
      <header>
        <h1 className="title">DOOMSDAY</h1>
        <h2 className="subtitle">The Choice Is Yours</h2>
      </header>

      <main>
        <p className="greeting">
          <span>Hoş Geldiniz, isminizi alabilir miyim?</span>
        </p>

        <input
          className="input"
          type="text"
          placeholder="İsminizi girin..."
          value={isim}
          onChange={isimAl}
        />

        {/* Kullanıcı yazdıkça karşılama mesajını günceller. */}
        {isim.trim() !== "" && (
          <p className="live-greeting">Merhaba, {isim}!</p>
        )}

        <button className="button" onClick={isimKontrol}>
          Devam Et
        </button>
      </main>

      <footer>
        <p>LATVERIA DOOMSDAY PROJECT</p>
      </footer>
    </div>
  );
}

export default Welcome;
