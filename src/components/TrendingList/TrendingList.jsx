import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, original_title, original_name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <span> {original_title ?? original_name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TrendingList.propTypes = {
  id: PropTypes.string,
  original_title: PropTypes.string,
  original_name: PropTypes.string,
};
