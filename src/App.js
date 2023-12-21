// En src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Layout/Footer/Footer';
import './styles/App.css';
import Header from './components/Layout/Header/Header';
import AppRoutes from './config/routes';
import { MovieProvider } from './api/useMovieApi';
import { ImagesProvider } from './api/useImagesApi';



function App() {
  return (
    <Router>
      <ImagesProvider>
        <MovieProvider>
          <Header title="Movie House" />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </MovieProvider>
      </ImagesProvider>
    </Router>
  );
}

export default App;
