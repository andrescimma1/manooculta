import React, { memo } from "react"; // Importa memo
import "./Card.css";

interface CardProps {
  card: {
    id: number;
    name: string;
    attack: number;
    mana: number;
    image: string;
    life: number;
    effect: string | null;
  };
}

const Card = memo(({ card }: CardProps) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Vida (arriba a la izquierda) */}
      <div className="life-circle">
        <span>{card.life}</span>
      </div>

      {/* Maná (arriba a la derecha) */}
      <div className="mana-circle">
        <span>{card.mana}</span>
      </div>

      {/* Ataque (abajo a la izquierda) */}
      <div className="attack-circle">
        <span>{card.attack}</span>
      </div>
    </div>
  );
});

export default Card; // Exporta el componente memoizado