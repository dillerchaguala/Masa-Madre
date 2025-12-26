import React from 'react';
import './Galeria.css';

// Definición del tipo para los elementos de la galería
interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  category: string;
}

const Galeria: React.FC = () => {
  // Datos de la galería con las imágenes reales y descripciones detalladas
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: 'galeria/ANTOJO 1.jpg',
      title: 'Antojo de la Casa',
      description: 'Delicioso pan relleno con queso derretido y jamón, espolvoreado con ajonjolí tostado. Perfecto para un desayuno sustancioso o una merienda reconfortante.',
      category: 'especialidades'
    },
    {
      id: 2,
      imageUrl: 'galeria/ESMERALDA 3.jpg',
      title: 'Esmeralda Clásica',
      description: 'Exquisito pan dulce con un toque de vainilla, decorado con azúcar glas. Su textura esponjosa y su sabor delicado lo convierten en el favorito de la casa.',
      category: 'dulces'
    },
    {
      id: 3,
      imageUrl: 'galeria/FOTO FINAL LA AMAPOLITA 10-10.jpeg',
      title: 'La Amapolita',
      description: 'Pan artesanal con forma de amapola, horneado al punto justo para lograr una corteza dorada y un interior esponjoso. Decorado con semillas de amapola para un toque crujiente.',
      category: 'panes_artesanales'
    },
    {
      id: 4,
      imageUrl: 'galeria/FOTO INICIO VILLA CANTABRIA 7-10.jpeg',
      title: 'Villa Cantabria',
      description: 'Pan rústico de campo con masa madre, cocido a la leña para un sabor auténtico. Ideal para acompañar con aceite de oliva virgen extra y especias.',
      category: 'masa_madre'
    },
    {
      id: 5,
      imageUrl: 'galeria/PAN EZEQUIEL 3-10.jpeg',
      title: 'Pan Ezequiel',
      description: 'Pan integral multicereales con semillas de girasol, lino, sésamo y chía. Rico en fibra y proteínas, perfecto para una alimentación saludable.',
      category: 'integrales'
    },
    {
      id: 6,
      imageUrl: 'galeria/PANADERIA Y PASTELERIA SOFI 1.jpeg',
      title: 'Selección Sofía',
      description: 'Variedad de panes y pasteles recién horneados, incluyendo bollos de leche, cuernitos y panes de molde. La combinación perfecta para una mesa de desayuno completa.',
      category: 'variados'
    },
    {
      id: 7,
      imageUrl: 'galeria/PANADERIA Y PASTELERIA SOFI 3 (1).jpeg',
      title: 'Rincón de la Panadería',
      description: 'Acogedor rincón de nuestra panadería donde se exhiben las especialidades del día, incluyendo panes rústicos, bollería fina y productos de repostería casera.',
      category: 'local'
    }
  ];

  // Mostrar todos los elementos sin filtros
  const filteredItems = galleryItems;

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Nuestra Galería de Panes</h1>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-image-container">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="gallery-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
                  target.alt = 'Imagen no disponible';
                }}
              />
              <div className="image-overlay">
                <span className="category-badge">{item.category}</span>
              </div>
            </div>
            <div className="gallery-description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
