import React from 'react';
import { ImagesProvider, useImagesApi } from '../api/useImagesApi';
import Carousel from '../components/Home/Carousel/Carousel';
import { Typography } from '@mui/material';

const HomePage = () => {

  const { carouselImages } = useImagesApi();

  return (
    <div className="home-page">
      <Typography variant="h3">Experience the magic, reel life moments unfold</Typography>
      <br />


      <Carousel carouselImages={carouselImages} />
    </div>
  );
};

export default HomePage;
