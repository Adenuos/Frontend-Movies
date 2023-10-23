import React, { useState } from 'react';
import { addMovie } from './api';
import { useNavigate  } from 'react-router-dom';


function MovieForm() {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    year: '',
    genre: '',
    duration: '',
    rating: ''
  });
  const navigate = useNavigate ();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMovie(formData);

      setFormData({
        title: '',
        director: '',
        year: '',
        genre: '',
        duration: '',
        rating: ''
      });

      navigate('/')
    } catch (error) {
    }
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
