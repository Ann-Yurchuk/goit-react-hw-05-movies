import { useEffect, useState } from 'react';
import { fetchMovies } from '../../api/api';
import { MoviesSearch } from 'components/MoviesSearch/MoviesSearch';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { List, Item, LinkNav, ItemImg } from './Movies.styled';
import loding from 'img/loading.jpg';

const ERROR_MESSAGE = 'Щось пішло не так, перезавантажте сторінку...';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        setIsLoading(true);
        const movies = await fetchMovies(query);
        setMovies(movies.results);
      } catch {
        setError(ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [query]);

  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }
  return (
    <Container>
      <MoviesSearch query={query} isLoading={isLoading} onSearch={onSubmit} />
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <List>
          {movies.map(movie => (
            <Item key={movie.id}>
              <ItemImg
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                    : loding
                }
                alt={movie.original_title ?? movie.original_name}
              />
              <LinkNav to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </LinkNav>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Movies;
