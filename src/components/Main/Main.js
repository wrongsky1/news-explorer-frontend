import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main(props) {
    return (
        <>
            <SearchForm />
            <Preloader />
            <NewsCardList
                activePage={props.activePage}
                searchNews={props.searchNews}
                loggedIn={props.loggedIn}
            />
            <About />
        </>
    )
}

export default Main;
