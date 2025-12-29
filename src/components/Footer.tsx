import { Link, useLocation } from 'react-router-dom';
import { GAME_DOWNLOAD_URL } from '../config/downloads';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-title">Masa Madre</p>
          <p className="footer-text">Fortalecimiento a la panificación artesanal</p>
        </div>

        <nav className="footer-nav">
          <Link
            to="/"
            className={`footer-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/recetas"
            className={`footer-link ${location.pathname === '/recetas' ? 'active' : ''}`}
          >
            Recetas
          </Link>
          <Link
            to="/galeria"
            className={`footer-link ${location.pathname === '/galeria' ? 'active' : ''}`}
          >
            Galería
          </Link>
          <Link
            to="/historias"
            className={`footer-link ${location.pathname === '/historias' ? 'active' : ''}`}
          >
            Historias
          </Link>
          {GAME_DOWNLOAD_URL ? (
            <a
              href={GAME_DOWNLOAD_URL}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Videojuego
            </a>
          ) : null}
        </nav>

        <div className="footer-right">
          <p className="footer-copy">
            © {year} Proyecto formativo SENA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

