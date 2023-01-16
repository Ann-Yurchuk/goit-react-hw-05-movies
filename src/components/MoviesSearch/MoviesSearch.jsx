import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Form, Button, ButtonLabel } from './MoviesSearch.styled';
import PropTypes from 'prop-types';
import { useDebounce } from 'hooks/useDebounce';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DEBOUNCE_TIME = 250;

export const MoviesSearch = ({ query, onSearch }) => {
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
  }, [debounceSearchQuery, setSearchParams, searchParams, query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error(
        'Sorry, there are no movies matching your search query. Please try again.',
        { theme: 'colored' }
      );
    }
    onSearch(query);
    setSearchQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
      <ToastContainer />
    </>
  );
};

MoviesSearch.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
