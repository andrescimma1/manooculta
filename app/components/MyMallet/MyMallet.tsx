// Mallet.js
"use client"; // Agrega esta línea al inicio del archivo

import React from 'react';
import "./MyMallet.css";
import { useDeck } from '../DeckManager';

export default function Mallet() {
    const { deckCount, drawCard } = useDeck(40);

    return (
        <div className="mallet" onClick={drawCard}>
            <div className="cardsmallet">{deckCount}/10</div>
        </div>
    );
}