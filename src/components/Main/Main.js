import React from 'react'

import NewsCardList from '../NewsCardList/NewsCardList.js';
import About from '../About/About.js';


function Main(props) {
  return (
    <main className="content">
      <NewsCardList
        loggedIn={props.loggedIn}
        handleLoginPopupClick={props.handleLoginPopupClick}
        addToSaveArticles={props.addToSaveArticles}
        updateMyArticles={props.updateMyArticles}
        setActiveFlag={props.setActiveFlag}
        activeFlag={props.activeFlag}
        articles={props.articles}
        keyword={props.keyword}
      >
      </NewsCardList>
      <About/>
    </main>
  )
}

export default Main;
