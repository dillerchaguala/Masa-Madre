import React from 'react';
import './Referencias.css';

const Referencias: React.FC = () => {
  return (
    <div className="referencias-page">
      <div className="referencias-container">
        <h1 className="referencias-title">Referencias</h1>

        <section className="referencias-section">
          <h2 className="referencias-section-title">Referencias de recetas e imágenes</h2>
          <ul className="referencias-list">
            <li>
              Hot cakes de masa madre. (s.f.). Recuperado de
              <br />
              <a href="https://nataliaquintanilla0.wixsite.com/misitio/post/hot-cakes-de-masa-madre" target="_blank" rel="noreferrer">
                https://nataliaquintanilla0.wixsite.com/misitio/post/hot-cakes-de-masa-madre
              </a>
            </li>
            <li>
              Focaccia tradicional. (s.f.). Recuperado de
              <br />
              <a href="https://www.pequerecetas.com/receta/como-hacer-focaccia-receta-facil-de-focaccia-italiana/" target="_blank" rel="noreferrer">
                https://www.pequerecetas.com/receta/como-hacer-focaccia-receta-facil-de-focaccia-italiana/
              </a>
            </li>
            <li>
              Hogaza rústica. (s.f.). Recuperado de
              <br />
              <a href="https://cookidoo.es/recipes/recipe/es-ES/r430278" target="_blank" rel="noreferrer">
                https://cookidoo.es/recipes/recipe/es-ES/r430278
              </a>
            </li>
            <li>
              Masa brioche dulce. (s.f.). Recuperado de
              <br />
              <a href="https://bonviveur.com/es/recetas/brioche-dulce" target="_blank" rel="noreferrer">
                https://bonviveur.com/es/recetas/brioche-dulce
              </a>
            </li>
            <li>
              Molde de centeno, queso y miel. (s.f.). Recuperado de
              <br />
              <a href="https://fornfortino.com/producte/pan-de-centeno-integral/?lang=es" target="_blank" rel="noreferrer">
                https://fornfortino.com/producte/pan-de-centeno-integral/?lang=es
              </a>
            </li>
            <li>
              Masa madre. (s.f.). Recuperado de
              <br />
              <a href="https://papurrak.eus/por-que-masa-madre/" target="_blank" rel="noreferrer">
                https://papurrak.eus/por-que-masa-madre/
              </a>
            </li>
          </ul>
        </section>

        <section className="referencias-section">
          <h2 className="referencias-section-title">Producción audiovisual propia</h2>
          <p className="referencias-text">
            Las fotografías usadas en la galería de panes y los videos de la sección Historias
            corresponden a material original elaborado por el equipo de extensionistas del proyecto
            Masa Madre, en el marco del Servicio Nacional de Aprendizaje (SENA).
          </p>
        </section>
      </div>
    </div>
  );
};

export default Referencias;
