import "./CharacterSelection.css";
function CharacterSelection({ isim }) {
  return (
    <div className="character-selection">
      <h1>Hoş geldin, {isim}!</h1>
      <p>Favori Doomsday karakterini seç.</p>
    </div>
  );
}
export default CharacterSelection;
