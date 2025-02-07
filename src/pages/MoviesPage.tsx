import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { fetchMovies } from '../store/slices/moviesSlice'
import SectionWrapper from '../components/common/SectionWrapper'
import { useMovieSearch } from '../hooks/useMovieSearch'
import MoviesHeader from '../components/movies/MoviesHeader'
import MoviesSkeleton from '../components/movies/MoviesSkeleton'
import MoviesGrid from '../components/movies/MoviesGrid'

const Movies: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { movies, isLoading } = useSelector((state: RootState) => state.movies)
  const { filteredMovies, searchQuery, handleSearchChange } =
    useMovieSearch(movies)

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMovies())
    }
  }, [dispatch, movies.length])

  return (
    <SectionWrapper>
      <MoviesHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {isLoading ? <MoviesSkeleton /> : <MoviesGrid movies={filteredMovies} />}
    </SectionWrapper>
  )
}

export default Movies
