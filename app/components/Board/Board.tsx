import "./Board.css";
import bgforest from "../../../public/jpg/bgforest.jpg";
import Card from "../Card/Card";
import Mallet from "../MyMallet/MyMallet";
import Hand from "../MyHand/MyHand";
import EnemyHand from "../EnemyHand/EnemyHand";
import EnemyMallet from "../EnemyMallet/EnemyMallet";
import dragon from "../../class/dragon.json";
//alt + z para ajustar el texto

export default function Board() {
  return (
    <div className="board" style={{ backgroundImage: `url(${bgforest.src})` }}>
      <Card card={dragon[0]} />
      <Card card={dragon[0]} />
      <Mallet />
      <Hand />
      {/* <EnemyHand /> */}
      {/* <EnemyMallet /> */}
    </div>
  );
}
