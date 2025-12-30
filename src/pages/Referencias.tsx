import React from 'react';
import './Referencias.css';

const Referencias: React.FC = () => {
  return (
    <div className="referencias-page">
      <div className="referencias-container">
        <h1 className="referencias-title">Referencias</h1>

        {/* Referencias definitivas de imágenes y recetas */}
        <section className="referencias-section">
          <ul className="referencias-list">
            <li>
              Hot cakes de masa madre. (s.f.). <em>Natalia Quintanilla.</em>
              <br />
              Recuperado de{' '}
              <a
                href="https://nataliaquintanilla0.wixsite.com/misitio/post/hot-cakes-de-masa-madre"
                target="_blank"
                rel="noreferrer"
              >
                https://nataliaquintanilla0.wixsite.com/misitio/post/hot-cakes-de-masa-madre
              </a>
            </li>
            <li>
              Focaccia tradicional. (s.f.). <em>Pequerecetas.</em>
              <br />
              Recuperado de{' '}
              <a
                href="https://www.pequerecetas.com/receta/como-hacer-focaccia-receta-facil-de-focaccia-italiana/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.pequerecetas.com/receta/como-hacer-focaccia-receta-facil-de-focaccia-italiana/
              </a>
            </li>
            <li>
              Hogaza rústica. (s.f.). <em>Cookidoo España.</em>
              <br />
              Recuperado de{' '}
              <a
                href="https://cookidoo.es/recipes/recipe/es-ES/r430278"
                target="_blank"
                rel="noreferrer"
              >
                https://cookidoo.es/recipes/recipe/es-ES/r430278
              </a>
            </li>
            <li>
              Masa brioche dulce. (s.f.). <em>Bon Viveur.</em>
              <br />
              Recuperado de{' '}
              <a
                href="https://bonviveur.com/es/recetas/brioche-dulce"
                target="_blank"
                rel="noreferrer"
              >
                https://bonviveur.com/es/recetas/brioche-dulce
              </a>
            </li>
            <li>
              Molde de centeno, queso y miel. (s.f.). <em>Forn Fortino.</em>
              <br />
              Recuperado de{' '}
              <a
                href="https://fornfortino.com/producte/pan-de-centeno-integral/?lang=es"
                target="_blank"
                rel="noreferrer"
              >
                https://fornfortino.com/producte/pan-de-centeno-integral/?lang=es
              </a>
            </li>
            <li>
              Masa madre. (s.f.). <em>Papurrak.</em> Recuperado de{' '}
              <a
                href="https://papurrak.eus/por-que-masa-madre/"
                target="_blank"
                rel="noreferrer"
              >
                https://papurrak.eus/por-que-masa-madre/
              </a>
            </li>
          </ul>
        </section>

        {/* Referencia al informe técnico del proyecto */}
        <section className="referencias-section">
          <h2 className="referencias-section-title">Referencia del proyecto</h2>
          <p className="referencias-text">
            Cárdenas, C., &amp; Arias, J. (2025).{' '}
            <em>
              Informe Técnico del Proyecto "Transferencia tecnológica para fortalecer la panificación
              artesanal con masa madre en panaderías populares y rurales de Colombia"
            </em>
            , desarrollado en el municipio de Soacha Cundinamarca (p. 28). Servicio Nacional de
            Aprendizaje SENA.
          </p>
        </section>

        {/* Producción audiovisual propia */}
        <section className="referencias-section">
          <h2 className="referencias-section-title">Producción audiovisual propia</h2>
          <p className="referencias-text">
            Las fotografías usadas en la galería de panes y los videos de la sección Historias
            corresponden al material original elaborado por el equipo de extensionistas del proyecto
            "Transferencia tecnológica para fortalecer la panificación artesanal con masa madre en
            panaderías populares y rurales de Colombia", desarrollado en el municipio de Soacha, del
            Servicio Nacional de Aprendizaje (SENA), cuyo lugar de ejecución fue Soacha Cundinamarca en
            el segundo semestre de 2025.
          </p>
        </section>

        
      </div>
    </div>
  );
};

export default Referencias;
