import Homepage from "./Pages/Homepage"
import { useCountriesData } from "/src/hooks/useCountriesData.js";

function App() {
  console.log(useCountriesData().loading)

  return (
    <main className="bg-light-bg">
      <Homepage />
    </main>
  )
}

export default App
