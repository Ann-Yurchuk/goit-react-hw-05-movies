import { useEffect, useState } from 'react';
import { fetchMovies } from '../api/api';
import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { Container } from 'components/Container/Container';

const ERROR_MESSAGE = 'Щось пішло не так, перезавантажте сторінку...';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!filterParam) {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchMovies(filterParam);
        setMovies(movies.results);
      } catch {
        setError(ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [filterParam]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const formSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <MoviesSearch
        onSubmit={formSubmit}
        value={filterParam}
        onChange={changeFilter}
        isLoading={isLoading}
      />
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Movies;
