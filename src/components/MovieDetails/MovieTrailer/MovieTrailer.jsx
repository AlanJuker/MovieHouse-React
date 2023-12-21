import React from 'react';
import YouTube from 'react-youtube';
import './MovieTrailer.css'; 

const MovieTrailer = ({ trailer }) => {
  return (
    <div className="movie-trailer-container">
      <div className="movie-trailer-wrapper">
        <YouTube
          videoId={getVideoIdFromUrl(trailer)}
          opts={{ width: '100%', height: '300px' }}
        />
      </div>
    </div>
  );
};

export default MovieTrailer;

function getVideoIdFromUrl(url) {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}
