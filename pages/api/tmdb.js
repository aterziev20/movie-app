export async function getServerSideProps() {
  // Fetch popular movies
  const popularMoviesResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const popularMoviesData = await popularMoviesResponse.json();
  const popularMovies = popularMoviesData.results;

  // Fetch top rated movies
  const topRatedMoviesResponse = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const topRatedMoviesData = await topRatedMoviesResponse.json();
  const topRatedMovies = topRatedMoviesData.results;

  // Fetch trending movies
  const trendingMoviesResponse = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const trendingMoviesData = await trendingMoviesResponse.json();
  const trendingMovies = trendingMoviesData.results;

  // Fetch popular TV shows
  const popularTvResponse = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const popularTvData = await popularTvResponse.json();
  const popularTvShows = popularTvData.results;

  // Fetch top rated TV shows
  const topRatedTvResponse = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const topRatedTvData = await topRatedTvResponse.json();
  const topRatedTvShows = topRatedTvData.results;

  // Fetch trending TV shows
  const trendingTvResponse = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const trendingTvData = await trendingTvResponse.json();
  const trendingTvShows = trendingTvData.results;

  // Return data as props to Header component
  return {
    props: {
      popularMovies,
      topRatedMovies,
      trendingMovies,
      popularTvShows,
      topRatedTvShows,
      trendingTvShows,
    },
  };
}
