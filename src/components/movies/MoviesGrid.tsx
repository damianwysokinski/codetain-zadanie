import { Movie } from '../../types/movie.types';
import MovieCard from './MovieCard'

type MovieGridProps = {
    movies: Movie[];
};

const MoviesGrid: React.FC<MovieGridProps> = ({ movies }) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {movies.map((movie, index) => (
            <MovieCard
                key={`${movie.title}-${index}`}
                id={index + 1}
                title={movie.title}
                releaseDate={movie.release_date}
                backgroundImage="/star-wars-thumb"
            />
        ))}
    </div>
);

export default MoviesGrid