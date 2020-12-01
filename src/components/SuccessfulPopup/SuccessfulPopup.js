import React from 'react';

import './SuccessfulPopup.css';

function SuccessfulPopup(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_active' : ''}`}>
      <div className="popup__container">
        <button onClick={props.onClose} type="button" className="popup__close-button"></button>
        <h2 className="popup__title-info">Пользователь успешно зарегистрирован!</h2>
        <button onClick={props.onLinkClick} type="button" className="popup__button-link">Войти</button>
      </div>
    </div>
  )
}

export default SuccessfulPopup;
