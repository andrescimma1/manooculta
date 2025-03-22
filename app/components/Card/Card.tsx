import "./Card.css";

interface CardProps {
  card: {
    life: number;
    attack: number;
    mana: number;
    image: string;
  };
}

export default function Card({ card }: CardProps) {
  console.log(card);
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${card?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="cardLife">{card?.life}</div>
      <div className="cardAttack">{card?.attack}</div>
      <div className="cardMana">{card?.mana}</div>
    </div>
  );
}
