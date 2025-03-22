// DeckManager.ts
"use client";

import { useState } from 'react';
import dragons from '../class/dragon.json'; // Importa el JSON de dragones

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

export function useDeck() {
    const [deck, setDeck] = useState<Card[]>(dragons); // Inicializa el mazo con los dragones
    const [hand, setHand] = useState<Card[]>([]); // Mano vacía al inicio

    const drawCard = () => {
        if (deck.length > 0) {
            const newCard = deck[0]; // Toma la primera carta del mazo
            setDeck(deck.slice(1)); // Elimina la carta del mazo
            setHand([...hand, newCard]); // Agrega la carta a la mano
        }
    };

    return { deck, hand, drawCard };
}