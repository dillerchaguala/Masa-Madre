import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './Home.css';

// Importar videos: usar Google Drive
const driveVideoEmbedUrl =
  'https://drive.google.com/file/d/1rifryUaiSxRlM5UdI5IAeLdyu5DV5AjA/preview';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      {/* Aquí se pueden agregar más secciones de la página home */}
      <section className="intro-section">
          <p className="intro-text">
            Esta cartilla digital hace parte del proyecto “Transferencia tecnológica para fortalecer la panificación artesanal con masa madre en panaderías populares y rurales de Colombia”, desarrollado en el municipio de Soacha y sus zonas de influencia. Su propósito es compartir con la comunidad en general los principales resultados, aprendizajes y experiencias que surgieron durante la ejecución de esta iniciativa, en la que participaron 615 panaderías de economía popular.
            <br />
            <br />
            El proyecto fue liderado por Innovación y Competitividad del Centro Industrial y de Desarrollo Empresarial (CIDE) de la Regional Cundinamarca, en articulación con el Centro Nacional de Hotelería, Turismo y Alimentos (CNHTyA) de la Regional Distrito Capital. Durante su desarrollo, se promovió el uso de la masa madre como fermento natural, una técnica ancestral que no solo mejora el sabor y la textura del pan, sino que también aporta beneficios nutricionales y favorece prácticas más sostenibles en la panificación artesanal.
            <br />
            <br />
            A través de esta cartilla, le invitamos a aprender de manera práctica y divertida sobre los procesos de fermentación natural, el cuidado de la masa madre y las buenas prácticas en la producción del pan artesanal. Además, encontrarán como extensión de esta, un juego interactivo diseñado para reforzar tus conocimientos y poner a prueba lo aprendido, combinando la tradición artesanal con la innovación tecnológica.
            <br />
            <br />
            Los animamos a explorar cada sección con curiosidad y entusiasmo, para seguir fortaleciendo el arte de la panificación artesanal colombiana desde una mirada sostenible, creativa y comunitaria.
            <br />
            <br />
            Carolina Cárdenas Herrera
            <br />
            Dinamizadora de Innovación y Competitividad
            <br />
            Centro Industrial y de Desarrollo Empresarial de Soacha
          </p>
      </section>
      <section className="home-content">
        <div className="container">
          <div className="masa-madre-section">
            <div className="masa-madre-content">
              <div className="title-with-icon">
                <div className="section-title-container">
                  <h2 className="section-title-line1">¿QUÉ ES LA</h2>
                  <h2 className="section-title-line2">MASA MADRE?</h2>
                </div>
              </div>
              <p className="masa-madre-description">
                La masa madre es un fermento compuesto por harina y agua que no contiene ningún tipo de 
                levadura añadida sino que es la propia harina, en la que hay contenidas un sinfín de levaduras 
                y bacterias, la que provoca la fermentación de la masa de manera espontánea.
              </p>
            </div>
            <div className="masa-madre-image-container">
              <img src="image/masaMadre.jpg" alt="Masa Madre" className="masa-madre-main-img" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Cómo hacer masa madre */}
      <section className="como-hacer-section">
        <div className="como-hacer-content">
          {/* Video a la izquierda */}
          <div className="video-container">
            <div className="video-wrapper">
              <img
                src="image/masa.jpg"
                alt="Cómo hacer masa madre"
                className="video-player"
              />
            </div>
          </div>
          
          {/* Título y descripción a la derecha */}
          <div className="description-wrapper">
            <div className="title-container">
              <h2 className="como-hacer-title-line1">¿CÓMO HACER</h2>
              <h2 className="como-hacer-title-line2">MASA MADRE?</h2>
            </div>
            
            <div className="description-container">
              <p className="como-hacer-description">
                Hacer una masa madre en casa es muy sencillo
              </p>
              <p className="como-hacer-detalle">
                La masa madre es un fermento natural compuesto por harina y agua que no contiene ningún tipo de levadura añadida. 
                Es un ser vivo que necesita cuidados y atención, pero que te recompensará con un pan con un sabor y textura inigualables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Pan con masa madre */}
      <section className="pan-masa-madre-section">
        <div className="container">
          <div className="pan-masa-madre-content">
            <div className="pan-masa-madre-title-container">
              <h2 className="pan-masa-madre-title-line1">PAN CON</h2>
              <h2 className="pan-masa-madre-title-line2">MASA MADRE</h2>
            </div>
            <p className="pan-masa-madre-description">
              Así se puede hacer un pan con masa madre
            </p>
            <div className="video-container">
              <div className="video-wrapper">
                <iframe
                  src={driveVideoEmbedUrl}
                  className="video-player"
                  title="Pan con masa madre"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
