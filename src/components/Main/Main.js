import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
// import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main(props) {
    return (
        <>
            <SearchForm />
            {/* <Preloader /> */}
            {/* <NewsCardList /> */}
            <About />
        </>
    )
}

export default Main;
