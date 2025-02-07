import { useState, useEffect } from 'react'
import { Movie } from '../types/movie.types'

export const useMovieSearch = (movies: Movie[]) => {
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery(query)

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredMovies(filtered)
  }

  return { filteredMovies, searchQuery, handleSearchChange }
}
