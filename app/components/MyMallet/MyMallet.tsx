"use client";

import React, { useEffect, useState } from "react";
import "./MyMallet.css";
import dragons from "../../class/dragon.json";
import { useGlobalContext } from "../../context/GlobalContext";

// Definición de una carta
interface Card {
  id: number;
  name: string;
  attack: number;
  mana: number;
  image: string;
  life: number;
  effect: string | null;
}

export default function Mallet() {
  const [deck, setDeck] = useState<Card[]>(dragons);
  const {
    state: { hand, setHand },
  } = useGlobalContext();

  const drawCard = () => {
    console.log("hola");
    if (deck.length > 0) {
      const newCard = deck[0];
      setDeck(deck.slice(1));
      setHand((prevHand) => [...prevHand, newCard]);
    }
  };

  return (
    <div>
      <div className="mallet" onClick={drawCard}>
        <div className="cardsmallet">{hand.length}/10</div>
      </div>
    </div>
  );
}
