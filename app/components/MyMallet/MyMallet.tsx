"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./MyMallet.css";
import dragons from "../../class/dragon.json";
import { useGlobalContext } from "../../context/GlobalContext";
import Hand from "../MyHand/MyHand";

interface Card {
  id: number;
  name: string;
  attack: number;
  mana: number;
  image: string;
  life: number;
  effect: string | null;
}

const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
};

export default function Mallet() {
  const [deck, setDeck] = useState<Card[]>(shuffleDeck(dragons));
  const {
    state: { hand, life, mana },
    setHand,
    setLife,
    setMana
  } = useGlobalContext();

  const drawCard = useCallback(() => {
    if (deck.length > 0) {
      const newCard = deck[0];
      setDeck((prevDeck) => prevDeck.slice(1));
      setHand([...hand, newCard]);
    }
  }, [deck, hand, setHand]);

  useEffect(() => {
    console.log("Mazo actual:", deck);
    console.log("Mano actual:", hand);
  }, [deck, hand]);

  return (
    <div>
      <div className="mallet-container">
        <div className="indicators">
          <div className="life-indicator">
            <span role="img" aria-label="heart">❤️</span> {life}
          </div>
          <div className="mana-indicator">
            <span role="img" aria-label="mana">🔮</span> {mana}
          </div>
        </div>

        <div className="mallet" onClick={drawCard}>
          <div className="cardsmallet">{deck.length}/10</div>
        </div>
      </div>

      <Hand onDragStart={function (e: React.DragEvent, card: any): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
}