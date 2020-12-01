import React from 'react';

import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function LoginPopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(props.values.email, props.values.password);
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      submitButtonText={props.isLoading ? 'Загрузка' : 'Войти'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      linkText="Зарегистрироваться"
      onLinkClick={props.onLinkClick}
      isValid={props.isValid}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__inputs">
        <span className="popup__input-name">Email</span>
        <input
        className="popup__input"
        required
        placeholder="Введите почту"
        type="email"
        name="email"
        minLength="2"
        maxLength="30"
        value={props.values.email || ''}
        onChange={props.handleChange}
        pattern="[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+"
        >
        </input>
        <span className="popup__input-error">{props.error.email || ''}</span>

        <span className="popup__input-name popup__input-name_margin">Пароль</span>
        <input
        className="popup__input"
        required
        placeholder="Введите пароль"
        type="password"
        name="password"
        minLength="10"
        maxLength="30"
        value={props.values.password || ''}
        onChange={props.handleChange}
        >
        </input>
        <span className="popup__input-error">{props.error.password || ''}</span>
      </fieldset>
    </PopupWithForm>
  )
}

export default LoginPopup;
