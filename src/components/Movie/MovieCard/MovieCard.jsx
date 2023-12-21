import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import './MovieCard.css';

const MovieCard = ({ pelicula }) => {
  const navigate = useNavigate();

  const redirectToDetailsPage = () => {
    navigate(`/Details/${pelicula.id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} onClick={redirectToDetailsPage}>
      <Link to={`/details/${pelicula.id}`}>
        <Card className="movie-card" >
          <div className="movie-image">
            <CardMedia
              component="img"
              src={process.env.PUBLIC_URL + pelicula.poster_path}
              alt={pelicula.title}
            />
          </div>
        </Card>
      </Link>
      <Typography variant="h6" component="div" className="movie-title">
        {pelicula.title}
      </Typography>
    </Grid>
  );
};

export default MovieCard;
