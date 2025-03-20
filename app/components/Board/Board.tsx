import "./Board.css";
import bgforest from "../../../public/jpg/bgforest.jpg";
import Card from "../Card/Card";
import Mallet from "../MyMallet/MyMallet";
import Hand from "../MyHand/MyHand";
import EnemyHand from "../EnemyHand/EnemyHand";
import EnemyMallet from "../EnemyMallet/EnemyMallet";
//alt + z para ajustar el texto

export default function Board() {
  return (
    <div className="board" style={{ backgroundImage: `url(${bgforest.src})` }}>
      <Card />
      <Card />
      <Mallet/>
      <Hand/>
      <EnemyHand/>
      <EnemyMallet/>
    </div>
  );
}
