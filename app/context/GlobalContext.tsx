"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface Card {
  id: number;
  name: string;
  attack: number;
  mana: number;
  image: string;
  life: number;
  effect: string | null;
}

interface GlobalState {
  hand: Card[];
  life: number;
  mana: number;
}

interface GlobalContextType {
  state: GlobalState;
  setHand: (cards: Card[]) => void;
  setLife: (life: number) => void;
  setMana: (mana: number) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({
    hand: [],
    life: 100, // Valor inicial
    mana: 10, // Valor inicial
  });

  const setHand = (hand: Card[]) => setState(prev => ({ ...prev, hand }));
  const setLife = (life: number) => setState(prev => ({ ...prev, life }));
  const setMana = (mana: number) => setState(prev => ({ ...prev, mana }));

  return (
    <GlobalContext.Provider value={{ state, setHand, setLife, setMana }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};