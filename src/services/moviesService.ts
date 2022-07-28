import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from '../models/movie.model'
import { PopularMovies } from '../models/popularMovies.model'

// const [movies, setMovies] = useState<Movie[]>([]);

const discoverMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`);
  return data.results;
}

const getMovie = async (id: number): Promise<Movie> => {
  const data = await axios.get(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
  return data.data;
}

const getPopularMovies = async (): Promise<PopularMovies[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
  return data.results;
}

export default {
  discoverMovies,
  getMovie,
  getPopularMovies
}