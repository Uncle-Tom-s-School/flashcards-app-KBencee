import { useKartyaContext } from "../context/KartyaContextProvider";

const Kartya = () => {
const {currentCard} = useKartyaContext();

  return (
        <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <p>{currentCard?.question}</p>
        </div>
        <div className="flip-card-back">
        <h4>{currentCard?.points}</h4>
        <p>{currentCard?.answer}</p>
        <button className="eredmenyGomb">
            Eltaláltam <br/>
            <i className="fa-regular fa-circle-check"></i>
        </button>
        <button className="eredmenyGomb">
            Nem sikerült<br/>
            <i className="fa-regular fa-circle-xmark"></i>
        </button>
        </div>
    </div>
    </div>
  )
}

export default Kartya