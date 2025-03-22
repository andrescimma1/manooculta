"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Definir el tipo de una carta (Card)
interface Card {
  id: number;
  name: string;
  attack: number;
  mana: number;
  image: string;
  life: number;
  effect: string | null;
}

// Definir el tipo del estado global
interface GlobalState {
  hand: Card[];
  setHand: React.Dispatch<React.SetStateAction<Card[]>>; // ✅ Asegurar que setHand esté definido
}

interface GlobalContextType {
  state: GlobalState;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [hand, setHand] = useState<Card[]>([]); // ✅ Estado de la mano en el contexto global

  return (
    <GlobalContext.Provider value={{ state: { hand, setHand } }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para acceder al contexto global
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
