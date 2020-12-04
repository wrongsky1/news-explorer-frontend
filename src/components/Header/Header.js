import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { pathname } = useLocation();

  const mobileMenuActive = `${
    props.isEditOpenMobile
      ? 'header_mobile'
      : ''
  }`;

  const buttonMobileMenu = `${
    props.isEditOpenMobile
      ? 'header__button-mobile_close_white'
      : pathname === '/saved-news'
        ? 'header__button-mobile_black'
        : 'header__button-mobile'
  }`;

  const buttonMobileMenuHidden = `${
    props.isLoginPopupOpen || props.isRegisterPopupOpen
      ? 'header__button-mobile_hidden'
      : ''
  }`;

  const headerLogoColor = `${
    props.isEditOpenMobile
      ? pathname === '/saved-news' 
        ? 'header__logo_white' 
        : 'header__logo_white'
      : pathname === '/saved-news'
        ? 'header__logo_dark'
        : 'header__logo_white'
  }`;

  const boxShadow = `${
    pathname === '/saved-news'
      ? 'header_saved'
      : ''
  }`;

  const stickyHeader = `${
    pathname === '/saved-news'
      ? 'header_mobile_sticking'
      : ''
  }`;

  return (
    <header className={`header ${mobileMenuActive} ${boxShadow} ${stickyHeader}`}>
      <Link
        to="/"
        className={`header__logo ${headerLogoColor}`}
      >
        NewsExplorer
      </Link>
      <button
        type="button"
        onClick={props.toggleMobileMenu}
        className={`header__button-mobile ${buttonMobileMenu} ${buttonMobileMenuHidden}`}
      />
      <Navigation
        handleLoginPopupClick={props.handleLoginPopupClick}
        isEditOpenMobile={props.isEditOpenMobile}
        loggedIn={props.loggedIn}
        handleLogout={props.handleLogout}
      />
    </header>
  )
}

export default Header;
