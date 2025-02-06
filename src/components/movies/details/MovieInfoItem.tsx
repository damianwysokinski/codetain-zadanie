import Skeleton from 'react-loading-skeleton'

type MovieInfoItemProps = {
    isLoading: boolean;
    label: string;
    value: string | undefined;
};

const MovieInfoItem: React.FC<MovieInfoItemProps> = ({ isLoading, label, value }) => (
    <ul>
        {isLoading ? (
            <Skeleton count={2} width="60%" />
        ) : (
            <>
                <li className="font-semibold">{label}</li>
                <li>{value}</li>
            </>
        )}
    </ul>
);

export default MovieInfoItem