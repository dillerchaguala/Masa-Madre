import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recetas from './pages/Recetas';
import Galeria from './pages/Galeria';
import Historias from './pages/Historias';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/historias" element={<Historias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
