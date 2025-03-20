import "./Board.css";
import bgforest from "../../../public/jpg/bgforest.jpg";
import Card from "../Card/Card";

export default function Board() {
  return (
    <div className="board" style={{ backgroundImage: `url(${bgforest.src})` }}>
      <Card />
      <Card />
    </div>
  );
}
