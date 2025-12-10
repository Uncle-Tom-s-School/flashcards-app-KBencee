import { useState } from "react";
import { useKartyaContext } from "../context/KartyaContextProvider";

const Kartya = () => {
  const { cards, currentIndex, nextCard } = useKartyaContext();
  const [isFlipped, setIsFlipped] = useState(false);
  const card = cards[currentIndex];

  const handleCardClick = () => {
    setIsFlipped((flipped) => !flipped);
  };

  const handleResultClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    nextCard();
  };

  if (!card) {
      return (
        <div className="no-card">
          töltődik...
        </div>
      );
    }

  return (
    <>
      <div className="flip-card" onClick={handleCardClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <p>{card.question}</p>
        </div>
        <div className="flip-card-back">
          <h4>{card.points}</h4>
          <p>{card.answer}</p>
          <button type="button" className="eredmenyGomb" onClick={handleResultClick}>
            Eltaláltam <br />
            <i className="fa-regular fa-circle-check"></i>
          </button>
          <button type="button" className="eredmenyGomb" onClick={handleResultClick}>
            Nem sikerült<br />
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Kartya