import React from 'react';
import galleryData from '../gallery-data';

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="text-5xl font-bold flex items-center flex-wrap">
              <span>Elijah Feldman's Gallery </span><span className="text-5xl" style={{ color: '#1a85ff' }}>.</span>
            </h1>
      <div className="gallery-grid">
        {galleryData.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img 
              src={image.src} 
              alt={`Elijah Feldman photo at ${image.caption}`} 
              title={`Elijah Feldman - Full photo from ${image.caption}`} 
            />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;