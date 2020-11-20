import React from 'react';

import './LoginPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin(props.values.email, props.values.password);
    }

    return (
        <PopupWithForm
            formName="login"
            title="Вход"
            isOpen={props.isLoginPopupOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            submitButtonText="Войти"
            linkText="Зарегистрироваться"
            onLinkClick={props.onLinkClick}
            isValid={props.isValid}
        >
            <p className="popup__input-name">Email</p>
            <input 
                className="popup__input" 
                id="email-input" 
                type="email" 
                name="email"      
                placeholder="Введите почту"
                value={props.values.email || ''}
                onChange={props.handleChange} 
                required 
                pattern="[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+"
            />
            <span className={props.errors.email ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                {props.errors.email}
            </span>

            <p className="popup__input-name">Пароль</p>
            <input 
                className="popup__input" 
                id="password-input" 
                type="password" 
                name="password"
                placeholder="Введите пароль" 
                required 
                value={props.values.password || ''} 
                onChange={props.handleChange}
            />
            <span className={props.errors.password ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                {props.errors.password}
            </span>

            <span className="popup__submit-error">{props.submitError}</span>
        </PopupWithForm>
    )
}

export default LoginPopup;
