import Skeleton from 'react-loading-skeleton'

const MoviesSkeleton: React.FC = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="p-4 min-h-60 rounded-2xl bg-gray-50">
        <Skeleton height={150} className="rounded-md mb-2" />
        <Skeleton height={20} width="80%" className="mb-1" />
        <Skeleton height={16} width="60%" />
      </div>
    ))}
  </div>
)

export default MoviesSkeleton
