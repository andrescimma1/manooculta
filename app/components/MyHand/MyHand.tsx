"use client";

import React from "react";
import Card from "../Card/Card";
import "./MyHand.css";
import { useGlobalContext } from "../../context/GlobalContext";

interface HandProps {
  onDragStart: (e: React.DragEvent, card: any) => void;
}

function Hand({ onDragStart }: HandProps) {
  const { state: { hand } } = useGlobalContext();

  return (
    <div className="allCardsOnHand">
      {hand.map((card) => (
        <div
          key={card.id}
          draggable
          onDragStart={(e) => onDragStart(e, card)}
          className="draggable-card"
        >
          <Card card={card} />
        </div>
      ))}
    </div>
  );
}

export default Hand;