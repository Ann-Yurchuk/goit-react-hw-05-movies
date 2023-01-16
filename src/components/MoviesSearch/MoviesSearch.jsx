import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Form, Button, ButtonLabel } from './MoviesSearch.styled';
import PropTypes from 'prop-types';
import { useDebounce } from 'hooks/useDebounce';

const DEBOUNCE_TIME = 250;

export const MoviesSearch = ({ query }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const debounceSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  useEffect(() => {
    if (!debounceSearchQuery) {
      searchParams.delete('query');
      setSearchParams(searchParams);
      return;
    }
    setSearchParams({ query: debounceSearchQuery });
  }, [debounceSearchQuery, setSearchParams, searchParams]);

  return (
    <>
      <Form>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          // autocomplete="off"
          // autoFocus
          placeholder="Search movies"
          name="search"
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
      </Form>
    </>
  );
};

MoviesSearch.propTypes = {
  query: PropTypes.string.isRequired,
};
