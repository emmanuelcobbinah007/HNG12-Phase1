import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import GameArea from './Components/GameArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <GameArea />
    </>
  )
}

export default App
