import "./Karakterler.css";
function Karakterler({ karakterim }) {
  return (
    <div className="karakter-kart">
      <h2>{karakterim.name}</h2>
      <img src={karakterim.image} alt={karakterim.name} />
      <p>{karakterim.likeCount} like</p>
    </div>
  );
}
export default Karakterler;
