export type Movie = {
    title: string;
    release_date: string;
    director: string;
    producer: string;
    opening_crawl: string;
};

export type MovieDetailsState = {
    details: Record<string, Movie>;
    isLoading: boolean;
    error: string | null;
};

export type MoviesState = {
    movies: Movie[];
    isLoading: boolean;
    error: string | null;
};