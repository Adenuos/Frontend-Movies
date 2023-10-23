import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { getMovieById, deleteMovie } from './api';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate ();


  useEffect(() => {
    getMovieById(id)
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  const handleDelete = () => {
    deleteMovie(id)
      .then(() => {
        navigate('/');
        console.log('Movie deleted successfully.');
      })
      .catch((error) => console.error('Error deleting movie:', error));
  };



  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration} minutes</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={handleDelete}>Delete Movie</button>

    </div>
  );
}

export default MovieDetails;
