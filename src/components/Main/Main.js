import React from 'react'

import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main(props) {
  return (
    <main className="content">
      <NewsCardList
        loggedIn={props.loggedIn}
        handleLoginPopupClick={props.handleLoginPopupClick}
        addToSaveArticles={props.addToSaveArticles}
        checkArticles={props.checkArticles}
        setIsEditMarker={props.setIsEditMarker}
        isEditMarker={props.isEditMarker}
        articles={props.articles}
        saveArticles={props.saveArticles}
        keyword={props.keyword}
      />
      <About/>
    </main>
  )
};

export default Main;
