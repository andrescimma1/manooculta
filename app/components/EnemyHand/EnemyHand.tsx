// Hand.js
"use client"; // Agrega esta línea al inicio del archivo

import React from 'react';
import Card from '../Card/Card';
import "./EnemyHand.css";
import { useDeck } from '../DeckManager';

function Hand() {
    const { hand } = useDeck(40);

    return (
        <div className="allCardsOnHand">
            {hand.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </div>
    );
}

export default Hand;