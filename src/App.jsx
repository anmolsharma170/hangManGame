import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { WordContext } from './context/WordContext.js'
import { useState } from 'react'

function App() {
  const [wordList,setWordList]=useState([]);
  const [word,setWord] = useState('');

  return (
    <WordContext.Provider value={{wordList,setWordList,word,setWord}}>  
    {/* this wraps our glabal context api */}
      <Routes>
        <Route path='/start'  element={<StartGame/>} />
        <Route path='/play'  element={<PlayGame/>} />
        <Route path='/'  element={<Home/>} />
      </Routes>
      </WordContext.Provider>
  )
}
export default App;
