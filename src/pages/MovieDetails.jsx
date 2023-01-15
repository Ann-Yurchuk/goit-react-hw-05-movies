import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getFetchMovieById } from '../api/api';
import { Suspense } from 'react';
import  Loader  from 'components/Loader/Loader';
import { Container } from 'components/Container/Container';
import loding from 'img/loding.jpg';

const ERROR_MESSAGE = 'Щось пішло не так, перезавантажте сторінку...';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getFetchMovieById(Number(movieId))
      .then(setMovie)
      .catch(error => {
        setError(ERROR_MESSAGE);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const backLinkHref = location.state?.from ?? '/movies';
  const getYearDate = () => new Date(movie.release_date).getFullYear();

  return (
    <>
      <Container>
        <Link to={backLinkHref}>Back to movies</Link>
        {loading && <Loader/>}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : loding}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>
              <span>({getYearDate()})</span>
            </p>
            <p>User Score: {movie.popularity}</p>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Gernes</h3>
              <p>{movie.genres.map(genre => `${genre.name} `)}</p>
            </div>
          </div>
        )}
        <hr />
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{from: location.state?.from ?? "/"}}>Get to know the cast</Link>
            </li>
            <li>
              <Link to="reviews" state={{from: location.state?.from ?? "/"}}>Go through the reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </Container>
    </>
  );
};

export default MovieDetails;
