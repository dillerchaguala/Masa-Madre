import React from 'react';
import './Creditos.css';

const Creditos: React.FC = () => {
  return (
    <div className="creditos-page">
      <div className="creditos-container">
        <h1 className="creditos-title">Créditos</h1>

        <section className="creditos-section">
          <h2 className="creditos-section-title">Autores</h2>
          <div className="creditos-group">
            <div className="creditos-item">
              <p className="creditos-name">Carolina Cárdenas Herrera</p>
              <p className="creditos-role">
                Dinamizadora de innovación y competitividad<br />
                SENA – Centro Industrial y de Desarrollo Empresarial de Soacha
              </p>
            </div>
            <div className="creditos-item">
              <p className="creditos-name">Juan Carlos Arias Chavarro</p>
              <p className="creditos-role">
                Dinamizador de TecnoAcademia<br />
                SENA – TecnoAcademia Cazucá
              </p>
            </div>
            <div className="creditos-item">
              <p className="creditos-name">Wilson Quintero Cordoba</p>
              <p className="creditos-role">
                Experto TecnoParque<br />
                Área de trabajo: TICS y IA<br />
                SENA – TecnoParque Cazucá
              </p>
            </div>
          </div>
        </section>

        <section className="creditos-section">
          <h2 className="creditos-section-title">Equipo de diseño</h2>
          <div className="creditos-group">
            <div className="creditos-item">
              <p className="creditos-name">José Santiago Vergara Tinjaca</p>
              <p className="creditos-role">Diseñador</p>
            </div>
          </div>
        </section>

        <section className="creditos-section">
          <h2 className="creditos-section-title">Equipo desarrollador</h2>
          <div className="creditos-group">
            <div className="creditos-item">
              <p className="creditos-name">Jhon Jairo Cortes Sarmiento</p>
              <p className="creditos-role">Desarrollador</p>
            </div>
            <div className="creditos-item">
              <p className="creditos-name">Diller Adrian Chaguala Marin</p>
              <p className="creditos-role">Desarrollador</p>
            </div>
          </div>
        </section>

        <section className="creditos-section">
          <h2 className="creditos-section-title">Equipo directivo</h2>
          <div className="creditos-group">
            <div className="creditos-item">
              <p className="creditos-name">Argemiro Celis Castro</p>
              <p className="creditos-role">Subdirector (E)</p>
            </div>
            <div className="creditos-item">
              <p className="creditos-name">Edward Fabián Medina Barajas</p>
              <p className="creditos-role">
                Coordinador de formación integral, gestión educativa,
                promoción y relaciones corporativas
              </p>
            </div>
          </div>
        </section>

        <section className="creditos-section">
          <h2 className="creditos-section-title">Créditos del video</h2>
          <div className="creditos-group">
            <div className="creditos-item">
              <p className="creditos-role">
                Video realizado por: Lina Jesbleidy Barreto Portela y Julián
                Ricardo Segura Beltrán<br />
                Extensionistas del proyecto Masa Madre
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Creditos;
