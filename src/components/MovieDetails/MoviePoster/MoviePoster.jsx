// MoviePoster.jsx
import React from 'react';

const MoviePoster = ({ imageUrl, alt }) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className="poster-image"
    />
  );
};

export default MoviePoster;
