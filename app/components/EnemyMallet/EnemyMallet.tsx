// Mallet.js
"use client"; // Agrega esta línea al inicio del archivo

import React from 'react';
import "./EnemyMallet.css";
import { useDeck } from '../DeckManager';

export default function Mallet() {
    const { deckCount, drawCard } = useDeck(40);

    return (
        <div className="mallet" onClick={drawCard}>
            <div className="cardsmallet">{deckCount}/40</div>
        </div>
    );
}