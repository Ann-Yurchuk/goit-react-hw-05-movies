import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetchMovieCredits } from 'api/api';
import {
  CastList,
  CastItem,
  CastImg,
  CastInfo,
  Title,
  Info,
} from './Cast.styled';
import { Button } from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import actor from 'img/actor.jpg';

const ERROR_MESSAGE = 'Щось пішло не так, перезавантажте сторінку...';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFetchCast = async () => {
      try {
        setLoading(true);
        const result = await getFetchMovieCredits(movieId);
        setCredits(result);
      } catch (error) {
        setError(ERROR_MESSAGE);
      } finally {
        setLoading(false);
      }
    };
    getFetchCast();
  }, [movieId]);

  if (!credits) {
    return null;
  }

  if (credits.length === 0 || credits.length === '') {
    return `We don't have any cast for this movie.`;
  }

  return (
    <>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <Button />
      <CastList>
        {credits.map(({ id, profile_path, name, character }) => {
          return (
            <CastItem key={id}>
              <CastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : actor
                }
                alt={`${name} portrait`}
              />
              <CastInfo>
                <Title>{name}</Title>
                <Info>Character: {character}</Info>
              </CastInfo>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

Cast.propTypes = {
  id: PropTypes.string,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
