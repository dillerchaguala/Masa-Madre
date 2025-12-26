import React, { useState } from 'react';
import './Historias.css';

interface Story {
  id: number;
  title: string;
  author: string;
  location: string;
  phoneDisplay: string;
  phoneHref: string;
  videoSrc: string;
}

const stories: Story[] = [
  {
    id: 0,
    title: 'Masa Madre',
    author: 'Masa Madre',
    location: 'CIDE, Soacha',
    phoneDisplay: ' ',
    phoneHref: '#',
    videoSrc: 'videos/presentacionmadre.mp4',
  },
  {
    id: 1,
    title: 'Delicias Veganas',
    author: 'Martín Muñoz',
    location: 'Tena, Cundinamarca',
    phoneDisplay: '310 264 1048',
    phoneHref: 'tel:3102641048',
    videoSrc: 'videos/delicias-veganas.mp4',
  },
  {
    id: 2,
    title: 'Alfredinos Pizza',
    author: 'Rubén Darío Pinto Vera',
    location: 'KR 6D # 17 25 SUR, COMPARTIR',
    phoneDisplay: '314 436 5291',
    phoneHref: 'tel:3144365291',
    videoSrc: 'videos/Alfredinos.mp4',
  },
  {
    id: 3,
    title: 'Panadería Milton',
    author: 'Milton Trujillo',
    location: 'Tena, Cundinamarca',
    phoneDisplay: '320 470 4575',
    phoneHref: 'tel:3204704575',
    videoSrc: 'videos/pan-cafe.mp4',
  },
  {
    id: 4,
    title: 'Nelson Barrios',
    author: 'Nelson Barrios',
    location: ' ',
    phoneDisplay: ' ',
    phoneHref: '#',
    videoSrc: 'videos/Nelson-Barrios.mp4',
  },
  {
    id: 5,
    title: 'Pizza Nonis',
    author: 'Pizza Nonis',
    location: ' ',
    phoneDisplay: ' ',
    phoneHref: '#',
    videoSrc: 'videos/Pizza-nonis.mp4',
  },
];

const Historias: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Error loading video:', e);
  };

  const handlePreviewLoaded = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    video.muted = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          const stopTime = video.duration > 1 ? 1 : video.duration;
          if (!Number.isNaN(stopTime) && stopTime > 0) {
            video.currentTime = stopTime;
          }
          video.pause();
        })
        .catch(() => {
          if (video.duration > 1) {
            video.currentTime = 1;
          }
        });
    }
  };

  const openModal = (story: Story) => {
    const videos = document.querySelectorAll<HTMLVideoElement>('.historia-video');
    videos.forEach(video => {
      if (!video.paused) {
        video.pause();
      }
    });
    setActiveStory(story);
  };

  const closeModal = () => {
    const modalVideo = document.querySelector<HTMLVideoElement>('.modal-video');
    if (modalVideo && !modalVideo.paused) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
    setActiveStory(null);
  };

  return (
    <div className="historias-container">
      <h1 className="historias-title">Historias de Masa Madre</h1>
      {activeStory ? (
        <div className="video-expanded">
          <div className="modal-content">
            <button type="button" className="close-modal" onClick={closeModal}>×</button>
            <video 
              src={activeStory.videoSrc}
              controls 
              className="modal-video"
              autoPlay
            >
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      ) : (
        <div className="historias-grid">
          {stories.map((story) => (
            <div key={story.id} className="historia-card">
              <div className="video-container" onClick={() => openModal(story)}>
                <video 
                  className="historia-video"
                  onError={handleVideoError}
                  preload="metadata"
                  muted
                  playsInline
                  onLoadedMetadata={handlePreviewLoaded}
                >
                  <source src={story.videoSrc} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              <div className="historia-content">
                <h2 className="historia-title">{story.title}</h2>
                <div className="historia-details">
                  <p className="historia-author">{story.author}</p>
                  <p className="historia-location">{story.location}</p>
                  <a href={story.phoneHref} className="historia-contact">
                    <i className="phone-icon">📞</i>
                    {story.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Historias;