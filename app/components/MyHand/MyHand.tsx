"use client";

import React from "react";
import Card from "../Card/Card";
import "./MyHand.css";
import { useGlobalContext } from "../../context/GlobalContext";

function Hand() {
  const {
    state: { hand },
  } = useGlobalContext(); // Accede a las cartas en la mano desde el contexto global

  console.log("Cartas en la mano (Hand component):", hand); // Verifica en la consola

  return (
    <div className="allCardsOnHand">
      {hand.map((card) => (
        <Card key={card.id} card={card} /> // Muestra cada carta en la mano
      ))}
    </div>
  );
}

export default Hand;