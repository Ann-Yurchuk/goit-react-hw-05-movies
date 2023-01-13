import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Form, Button, ButtonLabel } from './MoviesSearch.styled';
import PropTypes from 'prop-types';

export const MoviesSearch = ({ onChange, onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.error(
        'Sorry, there are no movies matching your search. Please try again.',
        { theme: 'colored' }
      );
    }
    onSubmit(value);
    setValue('');
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
          value={value}
          name="search"
          onChange={e => onChange(e.target.value)}
        />
      </Form>
      <ToastContainer autoClose={3000} />
    </>
  );
};

MoviesSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
