import React from 'react';

import './PopupWithForm.css';

function PopupWithForm(props) {

  const submitPopupButton = `${props.isValid 
    ? 'popup__button' 
    : 'popup__button popup__button_disabled'
  }`;

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_active'}`}>
      <form onSubmit={props.onSubmit} className={`popup__form popup__form_type_${props.name}`}>
        <button 
          onClick={props.onClose} 
          type="button" 
          className="popup__close-button" 
          aria-label="Закрыть окно">
        </button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <span className="popup__error-submit">{props.textErrorForm}</span>
        <button 
          type="submit" 
          className={submitPopupButton} 
          aria-label="Подтвердить">
          {props.submitButtonText}
        </button>
        <p className="popup__link-text">или <span className="popup__link" onClick={props.onLinkClick}>{props.linkText}</span></p>
      </form>
    </div>
  )
}

export default PopupWithForm;
