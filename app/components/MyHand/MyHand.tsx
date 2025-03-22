// MyHand.tsx
"use client";

import React from "react";
import Card from "../Card/Card";
import "./MyHand.css";
import { useGlobalContext } from "@/app/context/GlobalContext";

function Hand() {
  const {
    state: { hand },
  } = useGlobalContext();

  return (
    <div className="allCardsOnHand">
      {hand.map((card) => (
        <Card key={card.id} card={card} /> // Pasa cada carta al componente Card
      ))}
    </div>
  );
}

export default Hand;
