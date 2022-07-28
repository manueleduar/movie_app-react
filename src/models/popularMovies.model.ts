import { Movie } from './movie.model';

export interface PopularMovies {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}