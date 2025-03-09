API_KEY = process.env.REACT.APP.API.KEY;

const request = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScientificFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchTVShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
