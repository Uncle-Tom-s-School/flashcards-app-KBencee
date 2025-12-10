import Kartya from "./components/Kartya"
import Progressbar from "./components/Progressbar"
import UjGyakorlasGomb from "./components/UjGyakorlasGomb"
import UjKartyaGomb from "./components/UjKartyaGomb"

const App = () => {
  return (
    <div>
      <Kartya/>
      <Progressbar/>
      <div className="gombok">
        <UjGyakorlasGomb/>
        <UjKartyaGomb/>
      </div>
    </div>
  )
}

export default App
