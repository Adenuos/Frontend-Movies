import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import MovieForm from './MovieForm';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/add" element={<MovieForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
