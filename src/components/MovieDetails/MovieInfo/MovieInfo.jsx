import React from 'react';
import { Typography } from '@mui/material';

const MovieInfo = ({ movie }) => {
  return (
    <div className="movie-details-box">
      <Typography variant="h4" gutterBottom className="title">
        {movie.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {movie.description}
      </Typography>
      <Typography variant="body2">
        <strong>Year:</strong> {movie.year}
      </Typography>
      <Typography variant="body2">
        <strong>Genre:</strong> {movie.genres.join(', ')}
      </Typography>
      <Typography variant="body2">
        <strong>Director:</strong> {movie.director}
      </Typography>
      <Typography variant="body2">
        <strong>Cast:</strong> {movie.cast.join(', ')}
      </Typography>
    </div>
  );
};

export default MovieInfo;
