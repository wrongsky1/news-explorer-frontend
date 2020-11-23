import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main(props) {
    return (
        <>
            <SearchForm 
                searchQuery={props.searchQuery}
                searchQueryError={props.searchError}
                onChange={props.handleSearchQueryChange}
                onSearch={props.onSearch}
            />
            {props.loading && <Preloader />}
            <NewsCardList
                activePage={props.activePage}
                loggedIn={props.loggedIn}
                onSaveButtonClick={props.onSaveButtonClick}
                handleShowMoreClick={props.handleShowMoreClick}
                searchResultsShown={props.searchResultsShown}
                searchResultsHidden={props.searchResultsHidden}
                searchFailed={props.searchFailed}
            />
            <About />
        </>
    )
}

export default Main;
