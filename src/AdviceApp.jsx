import { useEffect, useState } from 'react'
import './App.css'
import Dice from './componentes/imagens/icon-dice.svg'
import DividerDesktop from './componentes/imagens/pattern-divider-desktop.svg'
import DividerMobile from './componentes/imagens/pattern-divider-mobile.svg'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState("")

  const getAdvice = async() => {
    const res = await axios.get("https://api.adviceslip.com/advice")
    const advice = await res.data.slip
    setAdvice(advice)
  }

 useEffect(() => {
  getAdvice()
 }, [])


  return (
    
    <div className='advice-box'>
    <p>ADVICE #{advice.id}</p>
    <h2>"{advice.advice}"</h2>
    <img src={DividerDesktop} className="divider-desk"></img>
    <img src={DividerMobile} className="divider-mobile"></img>
    <button className='dice-circle' onClick={getAdvice}>
      <img src={Dice}></img>
      </button>
    </div>
  )
}

export default App
