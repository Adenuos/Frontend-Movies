// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5274/api/movies';

export const getAllMovies = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    console.warn(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
    throw error;
  }
};

export const addMovie = async (newMovie) => {
  try {
    const response = await axios.post(API_BASE_URL, newMovie);
    return response.data;
  } catch (error) {
    console.error('Error adding a new movie:', error);
    throw error;
  }
};

export const updateMovie = async (id, updatedMovie) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedMovie);
    return response.data;
  } catch (error) {
    console.error('Error updating movie by ID:', error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting movie by ID:', error);
    throw error;
  }
};
