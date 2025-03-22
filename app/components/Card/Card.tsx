// Card.tsx
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

export default function Card({ card }: CardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cardLife">{card.life}</div>
      <div className="cardAttack">{card.attack}</div>
      <div className="cardMana">{card.mana}</div>
      <div className="cardName">{card.name}</div>
      {card.effect && <div className="cardEffect">{card.effect}</div>}
    </div>
  );
}