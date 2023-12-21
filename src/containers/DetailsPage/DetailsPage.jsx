import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import { useMovieApi } from '../../api/useMovieApi';
import MoviePoster from '../../components/MovieDetails/MoviePoster/MoviePoster';
import MovieInfo from '../../components/MovieDetails/MovieInfo/MovieInfo';
import MovieTrailer from '../../components/MovieDetails/MovieTrailer/MovieTrailer';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './DetailsPage.css';
import useCartItems from '../../hooks/useCartItems';
import useRentalItems from '../../hooks/useRentalItems';

const DetailsPage = () => {
  const { id } = useParams();
  const { movies } = useMovieApi();
  const { addToCart } = useCartItems();
  const { addToRental } = useRentalItems();
  const selectedMovie = movies.find((movie) => movie.id === parseInt(id, 10));
  const [rentalDays, setRentalDays] = useState(1); 

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...selectedMovie,
      quantity: 1,
    });

    Swal.fire({
      icon: 'success',
      title: 'Added to cart',
      text: `${selectedMovie.title} added to cart successfully.`,
    });
  };

  const handleRentMovie = async () => {
    const { value: days } = await Swal.fire({
      title: 'How many days do you want to rent?',
      input: 'number',
      inputAttributes: {
        step: 1,
        min: 1,
      },
      inputValue: rentalDays,
      showCancelButton: true,
      confirmButtonText: 'Rent',
      cancelButtonText: 'Cancel',
    });

    if (days) {
      addToRental({
        ...selectedMovie,
        days: parseInt(days, 10),
        price: selectedMovie.rentPrice, 
      });

      Swal.fire({
        icon: 'success',
        title: 'Added to rental',
        text: `${selectedMovie.title} added for rent for ${days} day(s).`,
      });
    }
  };

  return (
    <div className="details-page">
      <div className="movie-details-container">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <MoviePoster imageUrl={selectedMovie.poster_path} alt={selectedMovie.title} />
          </Grid>
          <Grid item xs={12} md={8}>
            <MovieInfo movie={selectedMovie} />
            {selectedMovie.trailer && <MovieTrailer trailer={selectedMovie.trailer} />}
            <div className="button-container">
              <Button variant="contained" color="primary" onClick={handleAddToCart}>
                Add to cart - ${selectedMovie.price.toFixed(2)}
              </Button>
              <Button variant="contained" color="primary"  onClick={handleRentMovie}>
                Rent - ${selectedMovie.rentPrice.toFixed(2)}/day
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DetailsPage;
