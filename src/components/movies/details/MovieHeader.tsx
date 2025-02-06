import Skeleton from 'react-loading-skeleton'

type MovieHeaderProps = {
    isLoading: boolean;
    title: string | undefined;
    imageUrl: string;
};

const MovieHeader: React.FC<MovieHeaderProps> = ({ isLoading, title, imageUrl }) => (
    <>
        {isLoading ? (
            <Skeleton height={384} className="w-full mb-12" />
        ) : (
            <picture>
                <source srcSet={`${imageUrl}.webp`} type="image/webp" />
                <source srcSet={`${imageUrl}.jpg`} type="image/jpeg" />
                <img
                    src={`${imageUrl}.jpg`}
                    alt={title}
                    className="w-full max-h-96 object-cover mb-12 rounded-2xl"
                />
            </picture>
        )}
        <h1 className="mb-10 text-4xl font-bold leading-none md:text-5xl">
            {isLoading ? <Skeleton width="60%" /> : title}
        </h1>
    </>
);

export default MovieHeader