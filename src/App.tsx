import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recetas from './pages/Recetas'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recetas" element={<Recetas />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
