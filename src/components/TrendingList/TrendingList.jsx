import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import loding from 'img/loading.jpg';
import { List, Item, ItemImg, Title, LinkNav } from './TrendingList.styled';
import { Container } from 'components/Container/Container';

export const TrendingList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      <List>
        {movies.map(({ id, original_title, original_name, poster_path }) => (
          <Item key={id}>
            <ItemImg
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                  : loding
              }
              alt={original_title ?? original_name}
            />
            <LinkNav to={`/movies/${id}`} state={{ from: location }}>
              <Title> {original_title ?? original_name}</Title>
            </LinkNav>
          </Item>
        ))}
      </List>
    </Container>
  );
};

TrendingList.propTypes = {
  id: PropTypes.string,
  original_title: PropTypes.string,
  original_name: PropTypes.string,
};
