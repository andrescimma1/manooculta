"use client";
import { useState } from "react";
import "./Board.css";
import bgforest from "../../../public/jpg/bgforest.jpg";
import Card from "../Card/Card";
import Mallet from "../MyMallet/MyMallet";
import Hand from "../MyHand/MyHand";
import { useGlobalContext } from "../../context/GlobalContext";

export default function Board() {
  const { state: { hand }, setHand } = useGlobalContext();
  const [playerField, setPlayerField] = useState<any[]>([]);
  const [enemyField, setEnemyField] = useState<any[]>([
    { id: 999, name: "Slime", attack: 2, mana: 1, image: "", life: 5, effect: null }
  ]);
  const [draggedCard, setDraggedCard] = useState<any>(null);

  // Mover carta al campo de batalla
  const handleDropOnField = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedCard) return;
    
    if (!playerField.some(card => card.id === draggedCard.id)) {
      setPlayerField([...playerField, draggedCard]);
      setHand(hand.filter(card => card.id !== draggedCard.id));
    }
    setDraggedCard(null);
  };

  // Atacar carta enemiga
  const handleAttack = (enemyCard: any) => {
    if (!draggedCard) return;

    const updatedEnemyField = enemyField.map(card => {
      if (card.id === enemyCard.id) {
        const newLife = card.life - draggedCard.attack;
        return { ...card, life: newLife > 0 ? newLife : 0 };
      }
      return card;
    });

    setEnemyField(updatedEnemyField.filter(card => card.life > 0));
    setDraggedCard(null);
  };

  // Función para pasar turno
  const handleEndTurn = () => {
    console.log("Turno pasado");
    // Aquí iría la lógica para cambiar de turno
  };

  return (
    <div className="game-container" style={{ backgroundImage: `url(${bgforest.src})` }}>
      {/* BOTÓN PASAR TURNO (AGREGADO) */}
      <button className="end-turn-btn" onClick={handleEndTurn}>
        Pasar Turno
      </button>

      {/* CAMPO ENEMIGO */}
      <div className="enemy-field">
        {enemyField.map(card => (
          <div 
            key={card.id}
            className="enemy-card"
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleAttack(card)}
          >
            <Card card={card} />
            <div className="card-health">{card.life} ❤️</div>
          </div>
        ))}
      </div>

      {/* CAMPO DE BATALLA */}
      <div 
        className="battlefield"
        onDragOver={e => e.preventDefault()}
        onDrop={handleDropOnField}
      >
        {playerField.map(card => (
          <div 
            key={card.id}
            draggable
            onDragStart={() => setDraggedCard(card)}
            className="player-card"
          >
            <Card card={card} />
          </div>
        ))}
      </div>

      {/* MANO DEL JUGADOR */}
      <div className="player-zone">
        <Mallet />
        <Hand onDragStart={(e, card) => {
          e.dataTransfer.setData("card", JSON.stringify(card));
          setDraggedCard(card);
        }} />
      </div>
    </div>
  );
}