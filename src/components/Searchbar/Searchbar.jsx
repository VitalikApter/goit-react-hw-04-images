import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.scss';


 const Searchbar = ({ onSubmit }) => {
 
  const [query, setQuery] = useState('');

    const onSearchInput = evt => {
      setQuery(evt.currentTarget.value);
    };
  
    const handleSubmit = evt => {
      evt.preventDefault();
  
      if (query.trim() === '') {
        return alert('Empty query. Please input something for search');
      }
  
      onSubmit(query);
    };

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}></span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={onSearchInput}
          />
        </form>
      </header>
    );
  };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;