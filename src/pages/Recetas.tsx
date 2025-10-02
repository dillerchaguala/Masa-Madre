import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Recetas.css';

interface Receta {
  id: number;
  nombre: string;
  tiempo: string;
  dificultad: string;
  imagenPortada: string;
  ingredientes: Array<{cantidad: string; item: string}>;
  pasos: Array<{texto: string | string[]}>;
  imagen?: string;
  imagenAttribution?: string;
}

const recetasData: Receta[] = [
  {
    id: 1,
    nombre: "HOGAZA RUSTICA SEMIINTEGRAL",
    tiempo: "24 horas",
    dificultad: "Intermedio",
    imagenPortada: "/image/hogaza.jpeg",
    ingredientes: [
      {cantidad: "850 gramos", item: "harina"},
      {cantidad: "150 gramos", item: "harina integral de buena calidad"},
      {cantidad: "200 gramos", item: "masa madre"},
      {cantidad: "700 ml", item: "agua"},
      {cantidad: "20 gramos", item: "sal"}
    ],
    pasos: [
      {
        texto: "Unir todos los ingredientes y dejar reposar de 20 a minutos a una hora para realizar la autolisis. (Todos menos la sal)"
      },
      {
        texto: [
          "Llevar a la canasta y de ser necesario relizar la costura de la futura base.",
          "Espolvorear con harina. Tapar con una bolsa y dejar leudar.",
          "Se puede leudar a temperatura ambiente (mas rapido) o en la nevera (3 a 4 veces mas lento).",
          "Se puede tambien leudar casi completamente a temperatura ambiente y luego las ultimas horas en la nevera."
        ]
      }
    ],
    imagen: "/image/hogaza.jpeg",
    imagenAttribution: "https://cookidoo.es/recipes/recipe/es-ES/r430278"
  },
  {
    id: 2,
    nombre: "FOCACCIA TRADICIONAL",
    tiempo: "4-6 horas",
    dificultad: "Fácil",
    imagenPortada: "/image/foccacia.jpeg",
    ingredientes: [
      {cantidad: "500 gramos", item: "harina"},
      {cantidad: "30/50 ml", item: "aceite de oliva"},
      {cantidad: "380 ml", item: "agua"},
      {cantidad: "15 gramos", item: "sal"}
    ],
    pasos: [
      {
        texto: "Unir el agua, la harina y la masa madre. Reposar por 30/40 minutos en verano y 1hs y 15 minutos en invierno."
      },
      {
        texto: "Agregar la sal diluida en un poco del agua que reservamos. Comenzar con los plegados, haremos 5 en total."
      },
      {
        texto: "Plegar la masa cada 20 minutos y en los ultimos dos plegados agregar el aceite en dos partes para que la masa lo tome de a poco."
      },
      {
        texto: [
          "Fermentar en el Bowl hasta que duplique su tamaño.",
          "Pasar a la mesada y dividir las focaccias intentando no desgacificar, sobre la superficie agregar mas aceite y dejar fermentar hasta que vuelvan a duplicar."
        ]
      }
    ],
    imagen: "/image/foccacia.jpeg",
    imagenAttribution: ""
  },
  {
    id: 3,
    nombre: "HOT CAKES",
    tiempo: "30 minutos",
    dificultad: "Fácil",
    imagenPortada: "/image/hotCakes.jpeg",
    ingredientes: [
      {cantidad: "100 gramos", item: "masa madre"},
      {cantidad: "1 pizca", item: "sal"},
      {cantidad: "1 pizca", item: "pimienta"},
      {cantidad: "50 gramos", item: "queso rayado"},
      {cantidad: "1 cucharadita", item: "bicarbonato"}
    ],
    pasos: [
      {
        texto: "En una sarten engrasada con una grasa termoestable de buena calidad como ghee, grasa de cerdo o vaca, aceite de oliva o de coco"
      },
      {
        texto: "En un cuenco unir la masa madre, una pizca de sal y pimienta, nuestro queso de rayar y cuando ya este todo listo para cocinar, nuestro bicarbonato."
      },
      {
        texto: [
          "Revolver e inmediatamente volcar sobre la sarten, cocinar vuelta y vuelta.",
          "Se puede cambiar el queso por variantes dulces como miel y canela, coco y arandanos, frutas frescas y congeladas, cacao amargo, etc."
        ]
      }
    ],
    imagen: "/image/hotCakes.jpeg",
    imagenAttribution: "https://nataliaquintanilla0.wixsite.com/misitio/post/hot-cakes-de-masa-madre"
  },
  {
    id: 4,
    nombre: "MOLDE DE CENTENO, QUESO Y MIEL",
    tiempo: "8-10 horas",
    dificultad: "Intermedio",
    imagenPortada: "/image/centeno.jpeg",
    ingredientes: [
      {cantidad: "500 gramos", item: "harina"},
      {cantidad: "200 gramos", item: "masa madre blanca"},
      {cantidad: "310 ml", item: "agua"},
      {cantidad: "10 gramos", item: "sal"},
      {cantidad: "10 gramos", item: "queso azul"},
      {cantidad: "10 gramos", item: "miel"}
    ],
    pasos: [
      {
        texto: "Unir el agua, la harina y la masa madre, realizar una autolisis como siempre."
      },
      {
        texto: "Agregar la sal diluida en un poco del agua de la receta y lurgo incorporarla con plegados."
      },
      {
        texto: [
          "Hace 4 a 6 plegados separados por un reposo de 30 minutos.",
          "Fermentar la masa en el bowl en bloque por 6 hs en invierno y 4hs en verano o hasta que crezca por lo menos un 30% y se veagasificada."
        ]
      },
      {
        texto: "Llevar a mesada y armar los moles sin desgacificar, enrollando dos veces en sentido de cruz como se explica en el curso para crear una buena tension"
      },
      {
        texto: "Leudar a temperatura ambiente o en frio heladera hasta que crezca y llevar al horno maximo (230 a 250 grados) por 40 minutos."
      }
    ],
    imagen: "/image/centeno.jpeg",
    imagenAttribution: "Fotografía sacada de"
  },
  {
    id: 5,
    nombre: "MASA BRIOCHE DULCE",
    tiempo: "6-8 horas",
    dificultad: "Avanzado",
    imagenPortada: "/image/briocheDulce.jpeg",
    ingredientes: [
      {cantidad: "600 gramos", item: "harina"},
      {cantidad: "40 ml", item: "leche"},
      {cantidad: "1 toque", item: "vainilla"},
      {cantidad: "10 gramos", item: "sal"},
      {cantidad: "100 gramos", item: "masa madre"},
      {cantidad: "50 gramos", item: "miel"},
      {cantidad: "2 yemas", item: "de huevo"},
      {cantidad: "60 gramos", item: "manteca"}
    ],
    pasos: [
      {
        texto: [
          "Unir todos los ingredientes con excepcion a la manteca. Amasar por 2 minutos para que se incorporen completamente.",
          "Reposar la masa 20 minutos."
        ]
      },
      {
        texto: "Amasar vigorosamente con maquina (10 minutos en velocidad media) o a mano por 20 minutos. Incorporar en 3 tandas la manteca y amasar hasta que cada poquito sea incorporado a la masa antes de agregar las tandas de manteca siguientes."
      },
      {
        texto: [
          "En maquina el amasado con manteca sera de 10 minutos mas y a mano 20/30 minutos de amasado vigoroso.",
          "Nos damos cuenta que la masa esta lista cuando logramos generar una malla de gluten con estructura como enseñamos en el curso."
        ]
      }
    ],
    imagen: "/image/briocheDulce.jpeg",
    imagenAttribution: "https://www.bonviveur.es/recetas/brioche-dulce"
  }
];

const Recetas: React.FC = () => {
  const [selectedReceta, setSelectedReceta] = useState<Receta | null>(null);

  return (
    <div className="recetas">
      <Navbar />
      <div className="recetas-content">
        {!selectedReceta ? (
          <div className="container">
            <div className="recetas-tradicionales">
              <h1 className="recetas-main-title">RECETAS</h1>
              <h2 className="recetas-subtitle">TRADICIONALES</h2>
              
              <div className="recetas-grid">
                {recetasData.map((receta) => (
                  <div key={receta.id} className="receta-card" onClick={() => setSelectedReceta(receta)}>
                    <div className="card-image-container">
                      <img src={receta.imagenPortada} alt={receta.nombre} className="card-image" />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{receta.nombre}</h3>
                      <div className="card-meta">
                        <span className="card-tiempo">⏱️ {receta.tiempo}</span>
                        <span className="card-dificultad">👨‍🍳 {receta.dificultad}</span>
                      </div>
                      <button className="card-button">Ver Receta</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="receta-detalle-container">
            <div className="container">
              <button className="back-button" onClick={() => setSelectedReceta(null)}>
                ← Volver a las recetas
              </button>
              
              <div className="receta-detalle">
                <div className="receta-header">
                  <h1>{selectedReceta.nombre}</h1>
                  <div className="receta-meta">
                    <span>⏱️ {selectedReceta.tiempo}</span>
                    <span>👨‍🍳 {selectedReceta.dificultad}</span>
                  </div>
                </div>

                <div className="receta-imagen-principal">
                  <img 
                    src={selectedReceta.imagen || selectedReceta.imagenPortada} 
                    alt={selectedReceta.nombre}
                  />
                  {selectedReceta.imagenAttribution && (
                    <div className="imagen-attribution">
                      <a href={selectedReceta.imagenAttribution} target="_blank" rel="noopener noreferrer">
                        Ver receta original
                      </a>
                    </div>
                  )}
                </div>

                <div className="receta-contenido">
                  <div className="ingredientes-section">
                    <h2>Ingredientes</h2>
                    <ul className="ingredientes-lista">
                      {selectedReceta.ingredientes.map((ingrediente, index) => (
                        <li key={index}>
                          <span className="cantidad">{ingrediente.cantidad}</span>
                          <span className="item">{ingrediente.item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="preparacion-section">
                    <h2>Preparación</h2>
                    <div className="pasos-lista">
                      {selectedReceta.pasos.map((paso, index) => (
                        <div key={index} className="paso">
                          <div className="paso-contenido">
                            {Array.isArray(paso.texto) ? (
                              <div className="paso-text-multiple">
                                {paso.texto.map((texto, textIndex) => (
                                  <p key={textIndex} className="paso-text">{texto}</p>
                                ))}
                              </div>
                            ) : (
                              <p className="paso-text">{paso.texto}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recetas;
