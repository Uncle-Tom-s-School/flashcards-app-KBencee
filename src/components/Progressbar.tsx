import { useKartyaContext } from "../context/KartyaContextProvider";

const Progressbar = () => {
  const { currentIndex, totalCards } = useKartyaContext();

  return (
    <div className="PBar">
      {currentIndex + 1} / {totalCards} <br />
      <progress value={currentIndex + 1} max={totalCards}></progress>
    </div>
  );
};

export default Progressbar