import React, { useCallback, useRef } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
// import LoginPopup from '../LoginPopup/LoginPopup';
// import RegisterPopup from '../RegisterPopup/RegisterPopup';


function App() {
    const history = useHistory();

    const [activePage, setActivePage] = React.useState('main');
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);

    function setMainPageActive() {
        setActivePage('main');
    }

    function setSavedNewsPageActive() {
        setActivePage('saved-news');
    }

    function toggleMobileMenu() {
        setMobileMenuOpened(!mobileMenuOpened);
    }

    function handleLogout() {
        setMainPageActive();
        setLoggedIn(false);
        history.push('/');
    }
  return (
    <div className="page">
        <Header
            activePage={activePage}
            setMainPageActive={setMainPageActive}
            setSavedNewsPageActive={setSavedNewsPageActive}
            loggedIn={loggedIn}
            mobileMenuOpened={mobileMenuOpened}
            toggleMobileMenu={toggleMobileMenu}
            handleLogout={handleLogout}
        />
        <Switch>
            <Route path="/" exact>
                <Main
                />
            </Route>
            {/* <Route path="/saved-news">
                <SavedNews />
            </Route> */}
        </Switch>
        <Footer />

        {/* <LoginPopup />
        <RegisterPopup /> */}
    </div>
)
}

export default App;
