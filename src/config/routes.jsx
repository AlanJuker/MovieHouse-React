import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import MoviesPage from '../containers/MoviesPage';
import DetailsPage from '../containers/DetailsPage/DetailsPage';
import TransactionPage from '../containers/TransactionPage/TransactionPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Movies" element={<MoviesPage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Details/:id" element={<DetailsPage />} />
      <Route path="/Transaction" element={<TransactionPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
