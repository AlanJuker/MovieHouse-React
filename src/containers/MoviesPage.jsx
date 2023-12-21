import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import SearchBar from '../components/Movie/SearchBar/SearchBar';
import { useMovieApi } from '../api/useMovieApi';

const MoviesPage = () => {
  const { movies } = useMovieApi();
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (searchText) => {
    const filtered = movies.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <Typography variant="h3">Movies selection</Typography>
      <br/>

      <SearchBar onSearch={handleSearch} />
      <br></br>
      <Grid container spacing={3}>
        {filteredMovies.map((pelicula) => (
          <MovieCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </Grid>
    </div>

  );
};

export default MoviesPage;
