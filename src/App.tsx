import { useState } from "react"
import Hero from "./components/Hero"
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <StartGame /> : <Hero toggle={toggleGamePlay} />}
    </>
  )
}

export default App
