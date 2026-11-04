import "./App.css";
import backgroundImage from "./assets/doomsday-background.png";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="title">DOOMSDAY </h1>
        <h3 className="subtitle">The Choice Is Yours</h3>
      </header>

      <main>
        <p className="greeting">
          Welcome!
          <span> Hoş Geldiniz, isminizi alabilir miyim?</span>
        </p>
        <input className="input" type="text" placeholder="İsminizi girin..." />
        <button className="button">Devam Et</button>
      </main>

      <footer>
        <p>LATVERIA DOOMSDAY PROJECT</p>
      </footer>
    </div>
  );
}

export default App;
