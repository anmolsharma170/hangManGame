import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
      <Routes>
        <Route path='/start'  element={<StartGame/>} />
        <Route path='/play'  element={<PlayGame/>} />
        <Route path='/'  element={<><div>Home Page</div> <p>Try /start or /play on url</p> </>  } />
      </Routes>
  )
}
export default App
