import React, { useState } from 'react'

import './SearchForm.css';

function SearchForm(props) {

  const [keyword, setKeyword] = useState('');
  const [inputError, setInputError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    if (keyword === '') {
      setInputError(true);
    }
    else if (keyword !== '') {
      setInputError(false)
      props.handleSearchNews(keyword);
    }
  }

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="search-form__paragraph">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className="search-form__search-bar">
          <input
          className="search-form__input"
          placeholder="Введите тему новости"
          required
          onChange={ e => setKeyword(e.target.value)}
          >
          </input>
          <span className={`search-form__input-error ${inputError ? 'search-form__input-error_active' : ''}`}>Введите ключевое слово</span>
          <button className="search-form__submit-button">Искать</button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
