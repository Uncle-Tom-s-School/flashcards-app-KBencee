import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { KartyaType } from "../types/Kartya";
import { getCards } from "../services/KartyaAPI";

type KartyaContextType = {
  cards: KartyaType[];
  currentCard: KartyaType | undefined;
  changeCard: (nextCard: KartyaType) => void;
  currentIndex: number;
  totalCards: number;
  nextCard: () => void;
  restartPractice: () => void;
};

const KartyaContext = createContext<KartyaContextType | undefined>(undefined);

const KartyaContextProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<KartyaType[]>([]);
  const [currentCard, setCurrentCard] = useState<KartyaType | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res);
      if (res.length > 0) {
        setCurrentIndex(0);
        setCurrentCard(res[0]);
      }
    });
  }, []);

  const changeCard = (nextCard: KartyaType) => {
    const nextIndex = cards.findIndex((card) => card === nextCard);
    setCurrentIndex(nextIndex);
    setCurrentCard(nextCard);
  };

  const nextCard = () => {
    setCurrentIndex((i) => {
      const nextIdx = i + 1;
      if (nextIdx >= cards.length) {
        setCurrentCard(undefined);
        return i;
      }
      setCurrentCard(cards[nextIdx]);
      return nextIdx;
    });
  };

  const restartPractice = () => {
    if (cards.length === 0) return;
    setCurrentIndex(0);
    setCurrentCard(cards[0]);
  };

  return (
    <KartyaContext.Provider value={{ changeCard, currentCard, cards, currentIndex, totalCards: cards.length, nextCard, restartPractice }}>
      {children}
    </KartyaContext.Provider>
  );
};

export const useKartyaContext = () => {
  const context = useContext(KartyaContext);
  if (!context) {
    throw new Error("No KartyaContext found");
  }
  return context;
};

export default KartyaContextProvider