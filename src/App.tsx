import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recetas from './pages/Recetas';
import Galeria from './pages/Galeria';
import Historias from './pages/Historias';
import Creditos from './pages/Creditos';
import Referencias from './pages/Referencias';
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
            <Route path="/creditos" element={<Creditos />} />
            <Route path="/referencias" element={<Referencias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
