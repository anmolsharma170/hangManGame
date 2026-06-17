import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Buttons/Button'
import './App.css'

function App() {
  return (
    <div>
      <Button text="Click me" onClickHandler={()=>console.log("Click me")} />
      <Button text="Click me 1" onClickHandler={()=>console.log("Click me 2")} />
      <Button text="Click me 2" onClickHandler={()=>console.log("Click me 3")} />
    </div>
  )
}
export default App
