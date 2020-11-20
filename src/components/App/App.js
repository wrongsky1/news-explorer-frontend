import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessfulPopup from '../SuccessfulPopup/SuccessfulPopup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { searchExample, newsExample } from '../../utils/SomeArticles';


function App() {
    const history = useHistory();

    const [activePage, setActivePage] = React.useState('main');
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
    
    // стейт переменные для открытия попапов

    const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
    const [isSuccessfulPopupOpen, setIsSuccessfulPopupOpen] = React.useState(false);

    const [searchNews, setSearchNews] = React.useState(searchExample);
    const [savedNews, setSavedNews] = React.useState(newsExample);
    const [currentUser, setCurrentUser] = React.useState({name: 'Грета'});

    // стейт переменные для валидации формы

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [submitError, setSubmitError] = React.useState('');

    // функция отображения ошибок при некорректных данных

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setIsValid(e.target.closest('form').checkValidity());
      };

    // функция сброса ошибок 

    function resetForm() {
        setValues({});
        setErrors({});
        setIsValid(false);
        setSubmitError('');
    }

    // активная страница
    function setMainPageActive() {
        setActivePage('main');
    }

    function setSavedNewsPageActive() {
        setActivePage('saved-news');
    }

    // выход из лк

    function handleLogout() {
        setMainPageActive();
        setLoggedIn(false);
        history.push('/');
    }

    function toggleMobileMenu() {
        setMobileMenuOpened(!mobileMenuOpened);
    }

    // логика работы попапов

    function handleLoginPopupClick() {
        setIsLoginPopupOpen(true);
    }
      
    function handleRegisterPopupClick() {
        setIsRegisterPopupOpen(true);
    }

    function handleSuccessfulPopupClick() {
        setIsSuccessfulPopupOpen(true);
    }

    function closeAllPopups() {
        setIsLoginPopupOpen(false);
        setIsRegisterPopupOpen(false);
        setIsSuccessfulPopupOpen(false);
        resetForm();
    }
    
    function handleEscClose(evt) {
        if (evt.key === 'Escape') {
            closeAllPopups();
        }
    }
      
    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) {
            closeAllPopups();
        }
    }
      
    React.useEffect(() => {
        window.addEventListener('keydown', handleEscClose);
        window.addEventListener('mousedown', handleOverlayClose);
      
        return () => {
            window.removeEventListener('keydown', handleEscClose);
            window.removeEventListener('mousedown', handleOverlayClose);
        };
    })

    function popupChange() {
        if (isLoginPopupOpen) {
            closeAllPopups();
            handleRegisterPopupClick();
        } else {
            closeAllPopups();
            handleLoginPopupClick();
        }
    }

  return (
    <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header
                activePage={activePage}
                setMainPageActive={setMainPageActive}
                setSavedNewsPageActive={setSavedNewsPageActive}
                loggedIn={loggedIn}
                mobileMenuOpened={mobileMenuOpened}
                toggleMobileMenu={toggleMobileMenu}
                handleLogout={handleLogout}
                handleLoginPopupClick={handleLoginPopupClick}
                currentUser={currentUser}
            />
            <Switch>
                <Route path="/" exact>
                    <Main
                        activePage={activePage}
                        loggedIn={loggedIn}
                        searchNews={searchNews}
                    />
                </Route>
                <Route path="/saved-news">
                    <SavedNews 
                        loggedIn={loggedIn}
                        setSavedNewsPageActive={setSavedNewsPageActive} 
                        savedNews={savedNews} 
                    />
                </Route>
            </Switch>
            <Footer setMainPageActive={setMainPageActive} />

            <LoginPopup 
                isLoginPopupOpen={isLoginPopupOpen} 
                onClose={closeAllPopups} 
                onLinkClick={popupChange} 
                submitError={submitError}
                values={values}
                errors={errors}
                isValid={isValid}
                handleChange={handleInputChange}
            />

            <RegisterPopup 
                isRegisterPopupOpen={isRegisterPopupOpen} 
                onClose={closeAllPopups} 
                onLinkClick={popupChange} 
                submitError={submitError}
                values={values}
                errors={errors}
                isValid={isValid}
                handleChange={handleInputChange}
            />

            <SuccessfulPopup
                isOpen={isSuccessfulPopupOpen}
                onClose={closeAllPopups}
                onLinkClick={popupChange}
            />
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
