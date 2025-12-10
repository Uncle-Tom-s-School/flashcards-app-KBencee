import Kartya from "./components/Kartya"
import UjGyakorlasGomb from "./components/UjGyakorlasGomb"
import UjKartyaGomb from "./components/UjKartyaGomb"

const App = () => {
  return (
    <div>
      <Kartya/>
      <div className="gombok">
        <UjGyakorlasGomb/>
        <UjKartyaGomb/>
      </div>
    </div>
  )
}

export default App
