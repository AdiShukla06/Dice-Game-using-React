import { useState } from "react"
import StartGame from "./components/startgame"
import GamePlay from "./components/GamePlay";

function App() {

  const [isGameStarted, setisGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !(prev));
  }
  



  return (
    <>
    {
      isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>
    }

    </>
  )
}

export default App

