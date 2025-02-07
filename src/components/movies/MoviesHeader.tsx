import SearchInput from '../common/SearchInput'

type MoviesHeaderProps = {
  searchQuery: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MoviesHeader: React.FC<MoviesHeaderProps> = ({
  searchQuery,
  onSearchChange,
}) => (
  <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-8">
    <h1 className="text-4xl font-bold leading-none md:text-5xl">Movies</h1>
    <SearchInput
      searchQuery={searchQuery}
      onSearchChange={onSearchChange}
      placeholder="Search by title..."
    />
  </div>
)

export default MoviesHeader
