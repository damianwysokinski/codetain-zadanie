import { Link } from 'react-router'

type MovieCardProps = {
  id: number
  title: string
  releaseDate: string
  backgroundImage: string
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  releaseDate,
  backgroundImage,
}) => {
  return (
    <Link
      to={`/movies/${id}`}
      className="relative rounded-2xl flex items-end min-h-64 overflow-hidden"
    >
      <picture>
        <source srcSet={`${backgroundImage}.webp`} type="image/webp" />
        <source srcSet={`${backgroundImage}.jpg`} type="image/jpeg" />
        <img
          src={`${backgroundImage}.jpg`}
          alt={title}
          className="w-full h-full object-cover absolute top-0"
        />
      </picture>
      <div className="p-4 backdrop-blur-xl bg-white/20 w-full rounded-2xl">
        <h2 className="font-bold text-white text-lg">{title}</h2>
        <p className="text-white">{new Date(releaseDate).getFullYear()}</p>
      </div>
    </Link>
  )
}

export default MovieCard
