
const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://www.omdbapi.com/';

export async function searchMovies(query) {
  if (!query) return [];
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.Search || [];
}

export async function getMovieDetails(imdbID) {
  if (!imdbID) return null;
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  const data = await res.json();
  return data && data.Response !== 'False' ? data : null;
}
