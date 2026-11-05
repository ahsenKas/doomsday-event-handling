import "./Karakterler.css";
function Karakterler({ karakterim, begen }) {
  return (
    <div className="karakter-kart">
      <h2>{karakterim.name}</h2>
      <img src={karakterim.image} alt={karakterim.name} />
      <button
        className={
          karakterim.likeCount === 0 ? "like-button" : "like-button liked"
        }
        onClick={() => begen(karakterim.id)}
      >
        ♥
      </button>
      <p>{karakterim.likeCount} like</p>
    </div>
  );
}
export default Karakterler;
