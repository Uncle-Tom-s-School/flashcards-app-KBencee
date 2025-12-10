import { useKartyaContext } from "../context/KartyaContextProvider";

const UjGyakorlasGomb = () => {
  const { restartPractice } = useKartyaContext();

  return (
    <button type="button" className="gomb" onClick={restartPractice}>
      Új gyakorlás indítása
    </button>
  );
};

export default UjGyakorlasGomb