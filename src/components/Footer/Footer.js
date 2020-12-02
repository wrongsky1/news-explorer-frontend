import React from 'react'
import { Link } from 'react-router-dom';

import './Footer.css';
import github from '../../images/icons/github.svg';
import facebook from '../../images/icons/fb.svg';

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__links">
            <Link
              // onClick={props.}
              className="footer__link"
              to="/"
            >
              Главная
            </Link>
          </li>
          <li className="footer__links">
            <a
              className="footer__link footer__link_width"
              href="https://praktikum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className="footer__icons">
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__image-icon" src={github} alt="логотип GitHub"/>
            </a>
          </li>
          <li>
            <a
              href="https://ru-ru.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__image-icon" src={facebook} alt="логотип Facebook"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;