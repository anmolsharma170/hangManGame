import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
      <Routes>
        <Route path='/start'  element={<StartGame/>} />
        <Route path='/play'  element={<PlayGame/>} />
        <Route path='/'  element={<Home/>} />
      </Routes>
  )
}
export default App
