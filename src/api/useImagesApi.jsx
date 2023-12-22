import React, { createContext, useContext, useState, useEffect } from 'react';

const CarouselImagesApi = createContext();

export const ImagesProvider = ({ children }) => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const mockedImages = [
      'https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=1536/production/241/85fe351691563add19379b6824f17ff1.jpg',
      'https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=1536/production/241/60f6937a4a351321f67577a458842c2c.jpg',
      'https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=1536/production/241/be3d0d2547956e0b23e3a41c6fe5a989.jpg',
      'https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=1536/production/241/baac1e043c105b86532651da5ad50a49.jpg',
    ];

    const delay = setTimeout(() => {
      setCarouselImages(mockedImages);
    }, 400);

    return () => clearTimeout(delay);
  }, []); 

  return (
    <CarouselImagesApi.Provider value={{ carouselImages }}>
      {children}
    </CarouselImagesApi.Provider>
  );
};

export const useImagesApi = () => {
  const context = useContext(CarouselImagesApi);
  
  return context;
};
