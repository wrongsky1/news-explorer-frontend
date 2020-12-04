import React, { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm'; 
import Preloader from '../Preloader/Preloader'; 
import NotFoud from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessfulPopup from '../SuccessfulPopup/SuccessfulPopup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { searchNews } from '../../utils/NewsApi';
import { register, authorize, getInfo, getSavedNews, saveArticle, deleteArticle } from '../../utils/MainApi';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isEditOpenMobile, setEditOpenMobile] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessfulPopupOpen, setIsSuccessfulPopupOpen] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [articles, setArticles] = useState([]);
  const [myArticles, setMyArticles] = useState([]);
  const [lengthMyArticles, setLengthMyArticles] = useState(0);
  const [searchError, setSearchError] = useState(false);
  const [isEditMarker, setIsEditMarker] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditNotFound, setIsEditNotFound] = useState(false);
  const [isEditPreloader, setIsEditPreloader] = useState(false);
  
  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };
 
  function resetForm() {
    setValues({});  
    setError({});
    setIsValid(false);
  };
  
  function toggleMobileMenu() {
    isEditOpenMobile ? setEditOpenMobile(false) : setEditOpenMobile(true);
  };

  function handleLoginPopupClick() {
    setIsSuccessfulPopupOpen(false)
    setIsLoginPopupOpen(true);
    setEditOpenMobile(false);
  };

  function handleRegisterPopupClick() {
    setIsRegisterPopupOpen(true);
  };

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessfulPopupOpen(false);
    resetForm();
  };

  function popupChange() {
    if (isLoginPopupOpen) {
      closeAllPopups();
      handleRegisterPopupClick();
    } else {
      closeAllPopups();
      handleLoginPopupClick();
    }
  };

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        closeAllPopups();
    }
  };

  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_active')) {
        closeAllPopups();
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', handleOverlayClose);
    window.addEventListener('keydown', handleEscClose);
    return () => {
      window.removeEventListener('mousedown', handleOverlayClose);
      window.removeEventListener('keydown', handleEscClose);
    }
  });

  function checkToken() { 
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoggedIn(true)
      history.push('/')
      getMySaveArticles();
      setCurrentUser(JSON.parse(localStorage.getItem('user')));
      setArticles(JSON.parse(localStorage.getItem('articles')));
    }
  };

  React.useEffect(() => {
    checkToken();
  },[loggedIn]);

  React.useEffect(() => {
    setKeyword(localStorage.getItem('keyword'));
  }, [keyword]);

  
  function searchNewsClick(keyword) {
    setIsEditPreloader(true)
    setArticles([]);
    localStorage.removeItem('articles');
    localStorage.removeItem('keyword');
    setIsEditNotFound(false);
    setSearchError(false);

    searchNews(keyword)
      .then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('keyword', keyword);
        setArticles(data.articles);
        setKeyword(keyword);
        // console.log(data.articles);
        if (data.articles.length === 0) {
          setIsEditNotFound(true)
        }
      })
      .catch((err) => {
        console.log(err.status);
        setSearchError(true);
        setIsEditNotFound(true);
      })
      .finally(() => setIsEditPreloader(false));
  };

  function getMySaveArticles() {
    getSavedNews()
      .then((res) => {
        if (res) {
          setMyArticles(res);
          setLengthMyArticles(res.length);
          setKeyword(res.keyword)
        } else {
          setMyArticles([]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function addToSaveArticles(article, keyword) {
    if (loggedIn) {
      saveArticle(article, keyword)
        .then((data) => {
          if (data) {
            getMySaveArticles();
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  function deleteMyArticle(article) {
    deleteArticle(article)
      .then((data) => {
        const myArticleArray = myArticles.filter((i) => (i._id !== article._id));
        setMyArticles(myArticleArray);
        setLengthMyArticles(myArticleArray.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function checkArticles(article, keyword, myArticle) {
    // console.log(article);
    const taggedArticle = myArticles.find((i) => {
      if (myArticle) {
        return i.title === myArticle.title && i.text === myArticle.text;
      }
      if (article) {
        return i.title === article.title && i.text === article.description;
      }
    });

    if (taggedArticle) {
      deleteMyArticle(taggedArticle);
    } else {
      addToSaveArticles(article, keyword);
    }
  };

  function regUser(email, password, name) {
    setIsLoading(true);
    register(email, password, name)
      .then((res) => {
        if (res) {
          closeAllPopups();
          setIsSuccessfulPopupOpen(true);
          history.push('/');
        }
      })
      .catch((err) => {
        setSubmitError(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function logUser(email, password) {
    setIsLoading(true);
    authorize(email, password)
    .then((res) => {
      localStorage.setItem('jwt', res.token);

      if (res) {
        getInfo(res.token)
          .then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            setCurrentUser(data);
            setLoggedIn(true)
            closeAllPopups();
            history.push('/');
          })
          .catch((err) => {
            console.log(err);
          })
      }
    })
    .catch((err) => {
      setError(false)
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    setArticles([]);
    setLoggedIn(false);
    history.push('/');
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <div className="background">
            <Header
              isEditOpenMobile={isEditOpenMobile}
              toggleMobileMenu={toggleMobileMenu}
              isLoginPopupOpen={isLoginPopupOpen}
              handleLoginPopupClick={handleLoginPopupClick}
              isRegisterPopupOpen={isRegisterPopupOpen}
              handleRegisterPopupClick={handleRegisterPopupClick}
              handleLogout={handleLogout}
              loggedIn={loggedIn}
            />
            <SearchForm
              handleSearchNews={searchNewsClick}
            />
          </div>
          <Preloader
            isOpen={isEditPreloader}
          />
          <NotFoud
            isOpen={isEditNotFound}
            searchError={searchError}
          />
          <Main
            loggedIn={loggedIn}
            handleRegisterPopupClick={handleRegisterPopupClick}
            handleLoginPopupClick={handleLoginPopupClick}
            addToSaveArticles={addToSaveArticles}
            keyword={keyword}
            articles={articles}
            saveArticles={myArticles}
            checkArticles={checkArticles}
            isEditMarker={isEditMarker}
            setIsEditMarker={setIsEditMarker} 
          />
        </Route>
        <Route path="/saved-news">
          <Header
            isEditOpenMobile={isEditOpenMobile}
            toggleMobileMenu={toggleMobileMenu}
            isLoginPopupOpen={isLoginPopupOpen}
            handleLoginPopupClick={handleLoginPopupClick}
            isRegisterPopupOpen={isRegisterPopupOpen}
            handleRegisterPopupClick={handleRegisterPopupClick}
            handleLogout={handleLogout}
            currentUser={currentUser}       
            loggedIn={loggedIn}
          />
          <ProtectedRoute path="/saved-news"
            component={SavedNews}
            handleRegisterPopupClick={handleRegisterPopupClick}
            keyword={keyword}
            myArticles={myArticles}
            lengthMyArticles={lengthMyArticles}
            checkArticles={checkArticles}
            deleteMyArticle={deleteMyArticle}
            loggedIn={loggedIn}
          />
        </Route>
        <Route>
          <Redirect to="/"/>
        </Route>
      </Switch>
      <Footer/>

      <section className="popups">
        <LoginPopup
          onLogin={logUser}
          values={values}
          error={error}
          isValid={isValid}
          handleInputChange={handleInputChange}
          isOpen={isLoginPopupOpen}
          onClickPopup={popupChange}
          onClose={closeAllPopups}
          submitError={submitError}
          isLoading={isLoading}
        />
        
        <RegisterPopup
          onRegister={regUser}
          values={values}
          error={error}
          isValid={isValid}
          handleInputChange={handleInputChange}
          isOpen={isRegisterPopupOpen}
          onClickPopup={popupChange}
          onClose={closeAllPopups}
          submitError={submitError} 
          isLoading={isLoading}
        />
        
        <SuccessfulPopup
          isOpen={isSuccessfulPopupOpen}
          isLoginPopupOpen={isLoginPopupOpen}
          handleLoginPopupClick={handleLoginPopupClick}
          onClose={closeAllPopups}
        />
      </section>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
