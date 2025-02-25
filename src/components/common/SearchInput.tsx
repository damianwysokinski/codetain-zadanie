type SearchInputProps = {
  searchQuery: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = '',
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder={placeholder}
        className="ps-10 border border-gray-200 py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default SearchInput
