// MyHand.tsx
"use client";

import React from 'react';
import Card from '../Card/Card';
import "./MyHand.css";
import { useDeck } from '../DeckManager';

function Hand() {
    const { hand, drawCard } = useDeck(); // Obtén la mano y la función para sacar una carta
    console.log(hand); // Verifica las cartas en la consola

    return (
        <div>
            <button onClick={drawCard}>Tomar carta</button> {/* Botón para sacar una carta */}
            <div className="allCardsOnHand">
                {hand.map((card) => (
                    <Card key={card.id} card={card} /> // Pasa cada carta al componente Card
                ))}
            </div>
        </div>
    );
}

export default Hand;