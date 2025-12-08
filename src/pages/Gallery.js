import React from 'react';
import galleryData from '../gallery-data';

function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="text-5xl font-bold flex items-center flex-wrap">
              <span>Gallery </span><span className="text-5xl" style={{ color: '#1a85ff' }}>.</span>
            </h1>
        <br></br>
        <h2>Photography with my phone</h2>
        <br></br>

      <div className="gallery-grid">
        {galleryData.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.caption} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;