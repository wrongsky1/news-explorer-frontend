import React from 'react';

import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(props.values.email, props.values.password, props.values.name);
    }

    return (
        <PopupWithForm
            formName="register"
            title="Регистрация"
            isOpen={props.isRegisterPopupOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            submitButtonText="Зарегистрироваться"
            linkText="Войти"
            onLinkClick={props.onLinkClick}
            isValid={props.isValid}
        >
            <p className="popup__input-name">Email</p>
            <input 
                className="popup__input" 
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
                type="password" 
                name="password"
                placeholder="Введите пароль"  
                value={props.values.password || ''} 
                onChange={props.handleChange} 
                required
            />
            <span className={props.errors.password ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                {props.errors.password}
            </span>
            
            <p className="popup__input-name">Имя</p>
            <input 
                className="popup__input" 
                type="text" 
                name="name"
                placeholder="Введите своё имя"  
                value={props.values.name || ''} 
                onChange={props.handleChange} 
                required
            />
            <span className={props.errors.name ? "popup__input-error popup__input-error_visible" : "popup__input-error"}>
                {props.errors.name}
            </span>

            <span className="popup__submit-error">{props.submitError}</span>
        </PopupWithForm>
    )
}

export default RegisterPopup;
