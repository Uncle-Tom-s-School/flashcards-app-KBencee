import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { KartyaType } from "../types/Kartya";
import { getCards } from "../services/KartyaAPI";

type KartyaContextType = {
    cards: KartyaType[],
    currentCard: KartyaType | undefined,
    changeCard: (nextCard: KartyaType) => void
}

const KartyaContext = createContext<KartyaContextType | undefined>(undefined);

const KartyaContextProvider = ({children}:{children: ReactNode}) => {
const [cards, setCards] = useState<KartyaType[]>([]);
const [currentCard, setCurrentCard] = useState<KartyaType | undefined>(undefined);

useEffect(() => {
    getCards().then(res => {
        setCards(res)
        if (res.length > 0) {
            setCurrentCard(res[0]);
        }
    })
}, []);

const changeCard = (nextCard: KartyaType) => {
    setCurrentCard(nextCard);
}

  return (
    <KartyaContext.Provider value={{changeCard,currentCard,cards}}>
        {children}
    </KartyaContext.Provider>
  )
}

export const useKartyaContext = () => {
    const context =  useContext(KartyaContext);
    if (!context) {
        throw new Error("No KartyaContext found");
    }
    return context;
}

export default KartyaContextProvider