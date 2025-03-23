"use client"; // Agrega esta línea al inicio del archivo

import React, { useState, useEffect, useCallback } from "react";
import "./MyMallet.css";
import dragons from "../../class/dragon.json";
import { useGlobalContext } from "../../context/GlobalContext";
import Hand from "../MyHand/MyHand"; // Importa el componente Hand

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

// Función para barajar el mazo usando el algoritmo Fisher-Yates
const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffledDeck = [...deck]; // Copia el mazo original
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Elige un índice aleatorio
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]]; // Intercambia las cartas
  }
  return shuffledDeck;
};

export default function Mallet() {
  const [deck, setDeck] = useState<Card[]>(shuffleDeck(dragons)); // Baraja el mazo al inicio
  const {
    state: { hand, setHand, life, setLife, mana, setMana },
  } = useGlobalContext(); // Accede a los estados globales

  // Función drawCard optimizada con useCallback
  const drawCard = useCallback(() => {
    console.log("Clic en el mazo detectado"); // Depuración
    console.log("Mazo actual (antes de sacar):", deck); // Verifica el mazo antes de sacar una carta
    console.log("Mano actual (antes de sacar):", hand); // Verifica la mano antes de sacar una carta

    if (deck.length > 0) {
      const newCard = deck[0]; // Toma la primera carta del mazo (ya barajado)
      setDeck((prevDeck) => {
        const updatedDeck = prevDeck.slice(1); // Elimina la carta del mazo
        console.log("Mazo actualizado:", updatedDeck); // Verifica el mazo actualizado
        return updatedDeck;
      });
      setHand((prevHand) => {
        const updatedHand = [...prevHand, newCard]; // Agrega la carta a la mano
        console.log("Mano actualizada:", updatedHand); // Verifica la mano actualizada
        return updatedHand;
      });
    } else {
      console.log("No quedan cartas en el mazo.");
    }
  }, [deck, setHand]); // Dependencias: deck y setHand

  // Verifica si el estado se está actualizando correctamente
  useEffect(() => {
    console.log("Mazo actual (después de actualizar):", deck);
    console.log("Mano actual (después de actualizar):", hand);
  }, [deck, hand]);

  return (
    <div>
      {/* Contenedor del mazo */}
      <div className="mallet-container">
        {/* Indicadores de vida y maná */}
        <div className="indicators">
          <div className="life-indicator">
            <span role="img" aria-label="heart">❤️</span> {life}
          </div>
          <div className="mana-indicator">
            <span role="img" aria-label="mana">🔮</span> {mana}
          </div>
        </div>
  
        {/* Mazo de cartas */}
        <div className="mallet" onClick={drawCard}>
          <div className="cardsmallet">{deck.length}/10</div>
        </div>
      </div>
  
      {/* Cartas en la mano (usando el componente Hand) */}
      <Hand />
    </div>
  );
}