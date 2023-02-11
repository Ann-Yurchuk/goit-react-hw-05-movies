import { useEffect, useState } from 'react';
import { getFetchTrendingMovie } from '../api/api';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Container } from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import NotFountView from 'components/NotFoundView/NotFoundView';

const ERROR_MESSAGE = 'Щось пішло не так, перезавантажте сторінку...';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getFetchTrendingMovie()
      .then(setMovies)
      .catch(error => {
        setError(ERROR_MESSAGE);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!movies) {
    return null;
  }

  const isNotFound = !isLoading && !movies.length;

  return (
    <>
      <Container>
        <h1>Trending today</h1>
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {isNotFound && <NotFountView />}
        {movies && <TrendingList movies={movies} />}
      </Container>
    </>
  );
};

export default Home;
