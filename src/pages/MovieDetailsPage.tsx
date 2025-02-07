import { useEffect } from 'react'
import { NavLink, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import SectionWrapper from '../components/common/SectionWrapper'
import {
  clearError,
  fetchMovieDetails,
} from '../store/slices/movieDetailsSlice'
import { AppDispatch, RootState } from '../store'
import MovieHeader from '../components/movies/details/MovieHeader'
import MovieDescription from '../components/movies/details/MovieDescription'
import MovieInfoItem from '../components/movies/details/MovieInfoItem'
import NotFound from './NotFoundPage'

const MovieDetails: React.FC = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const movies = useSelector((state: RootState) => state.movies.movies)
  const { details, isLoading, error } = useSelector(
    (state: RootState) => state.movieDetails
  )

  const movieFromList = movies.find((_, index) => (index + 1).toString() === id)
  const movieDetails = id ? details[id] : undefined

  useEffect(() => {
    dispatch(clearError())

    if (id && !movieDetails && !movieFromList) {
      dispatch(fetchMovieDetails(id))
    }
  }, [id, dispatch, movieDetails, movieFromList])

  const displayData = movieDetails || movieFromList

  if (error) {
    return <NotFound />
  }

  return (
    <SectionWrapper>
      <NavLink to="/movies" className="mb-8 text-blue-600 block">
        &lt; Back to Movies
      </NavLink>

      <MovieHeader
        isLoading={isLoading}
        title={displayData?.title}
        imageUrl="/star-wars"
      />

      <MovieDescription
        isLoading={isLoading}
        description={displayData?.opening_crawl}
      />

      <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-900">
        <MovieInfoItem
          isLoading={isLoading}
          label="Director"
          value={displayData?.director}
        />
        <MovieInfoItem
          isLoading={isLoading}
          label="Producer"
          value={displayData?.producer}
        />
        <MovieInfoItem
          isLoading={isLoading}
          label="Release Date"
          value={displayData?.release_date}
        />
      </div>
    </SectionWrapper>
  )
}

export default MovieDetails
