import React, { useCallback, useRef } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
// import Header from '../Header/Header';
// import Main from '../Main/Main';
// import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
// import LoginPopup from '../LoginPopup/LoginPopup';
// import RegisterPopup from '../RegisterPopup/RegisterPopup';


function App() {
  return (
    <div className="page">
        {/* <Header
        />
        <Switch>
            <Route path="/" exact>
                <Main
                />
            </Route>
            <Route path="/saved-news">
                <SavedNews />
            </Route>
        </Switch> */}
        <Footer />

        {/* <LoginPopup />
        <RegisterPopup /> */}
    </div>
)
}

export default App;
