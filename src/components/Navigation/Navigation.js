import React from 'react'
import { useLocation, NavLink } from 'react-router-dom';

import './Navigation.css'
import logoutIcon from '../../images/buttons/logout.svg';
import logoutIconDark from '../../images/buttons/logout-dark.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation(props) {
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const loginText = `${
    props.loggedIn
    ? `${currentUser.name}`
    : `Авторизоваться`
  }`;

  const openMobileMenu = `${
    props.isEditOpenMobile
      ? 'navigation_mobile'
      : ''
  }`;

  const colorLinkOpenMobile = `${
    props.isEditOpenMobile
      ? 'navigation__link_white'
      : ''
  }`;

  const buttonWhite = `${
    pathname === '/'
      ? 'navigation__button'
      : 'navigation__button_hidden'
  }`;

  const buttonDark = `${
    pathname === '/saved-news'
      ? 'navigation__button-dark'
      : 'navigation__button_hidden'
  }`;

  const colorLinkNavigation = `${
    pathname === '/saved-news'
      ? 'navigation__link_dark'
      : 'navigation__link_white'
  }`;

  const navigationLinkActive = `${
    (props.isEditOpenMobile === false)
    ?
      pathname === '/saved-news'
        ? 'navigation__link_active_dark'
        : 'navigation__link_active'
    : ''
  }`;

  return (
    <nav className={`navigation ${openMobileMenu}`}>
      <ul className="navigation__links">

        <li className="navigation__links-list">
          <NavLink
            activeClassName={navigationLinkActive}
            className={`navigation__link ${colorLinkNavigation} ${colorLinkOpenMobile}`}
            exact to="/"
          >
            Главная
          </NavLink>
        </li>

        <li className="navigation__links-list">
          <NavLink
            activeClassName={navigationLinkActive}
            className={`${props.loggedIn
              ? `navigation__link ${colorLinkNavigation} ${colorLinkOpenMobile}`
              : 'navigation__link_disable'}`}
            to="/saved-news"
          >
            Сохраненные статьи
          </NavLink>
        </li>

      </ul>

      <button
        onClick={props.loggedIn
          ? props.handleLogout
          : props.handleLoginPopupClick}
        className={buttonWhite}
      >
        {loginText}
        {props.loggedIn && <img className="navigation__image-exit" src={logoutIcon} alt="Выход из личного кабинета"/>}
      </button>

      <button
        onClick={props.handleLogout}
        className={buttonDark}
      >
        {loginText}
        <img className="navigation__image-exit" 
          src={props.isEditOpenMobile 
            ? logoutIcon 
            : logoutIconDark} 
          alt="Выход из личного кабинета"
        />
      </button>

    </nav>
  )
}

export default Navigation;
