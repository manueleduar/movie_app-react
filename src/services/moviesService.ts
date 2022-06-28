import axios from 'axios';
import { useEffect, useState } from 'react';

import { Movie } from '../models/movie.model'

require('dotenv').config();


const discoverMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`);
  return data.results;
}


const getMovie = async (id: string): Promise<Movie> => {
  const data = await axios.get(`${process.env.REACT_APP_API_URL}/movies/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
  return data.data;
}

export default {
  discoverMovies,
  getMovie
}