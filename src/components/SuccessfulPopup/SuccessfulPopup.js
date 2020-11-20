import React from 'react';

import './SuccessfulPopup.css';

function SuccessfulPopup(props) {
    return (
      <div className={props.isOpen ? `popup popup_type_success popup_opened` : `popup popup_type_success`}>
        <div className="popup__container">
          <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
          <span className="popup__link" onClick={props.onLinkClick}>Войти</span>
          <button className="popup__close-button" type="button" onClick={props.onClose} aria-label="Закрыть окно"></button>
        </div>
      </div>
    )
  }
  
  export default SuccessfulPopup;