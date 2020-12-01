import React from 'react';

import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function RegisterPopup(props) {

function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(props.values.email, props.values.password, props.values.name)
}


  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      submitButtonText={props.isLoading ? "Загрузка" : "Зарегистрироваться"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      linkText="Войти"
      onLinkClick={props.onLinkClick}
      isValid={props.isValid}
      onSubmit={handleSubmit}
      textErrorForm={props.textErrorForm}
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

        <span className="popup__input-name">Пароль</span>
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

        <span className="popup__input-name">Имя</span>
        <input className="popup__input"
        required
        placeholder="Введите своё имя"
        type="text"
        name="name"
        minLength="2"
        maxLength="30"
        value={props.values.name || ''}
        onChange={props.handleChange}
        >
        </input>
        <span className="popup__input-error">{props.error.name || ''}</span>
      </fieldset>
    </PopupWithForm>
  )
}

export default RegisterPopup;
