import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, name, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <span>{name}</span>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TrendingList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
