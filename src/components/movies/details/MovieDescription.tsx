import Skeleton from 'react-loading-skeleton'

type MovieDescriptionProps = {
    isLoading: boolean;
    description: string | undefined;
};

const MovieDescription: React.FC<MovieDescriptionProps> = ({ isLoading, description }) => (
    <p className="py-8 text-base border-y border-gray-200 text-gray-900">
        {isLoading ? <Skeleton count={5} /> : description}
    </p>
);

export default MovieDescription