import React, { useEffect, useState } from 'react';
import { getAllMovies } from './api';
import { Link } from 'react-router-dom';


function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieData = await getAllMovies();
        setMovies(movieData);
      } catch (error) {
      }
    }

    fetchMovies();
  }, []);

    return (
      <div>
        <h2>Movie List</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default MovieList;
