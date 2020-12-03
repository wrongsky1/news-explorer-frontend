import React, { useState } from 'react';

import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  const [addMoreButton, setAddMoreButton] = useState(true);
  const [newsArticles, setNewsArticles] = useState([]);
  
  React.useEffect(() => {
    props.articles && setNewsArticles(props.articles.slice(0, 3));
  }, [props.articles]);

  function addArticle() {
    setNewsArticles(props.articles.slice(0, newsArticles.length + 3));
    if (newsArticles.length >= props.articles.length - 3) {
      setAddMoreButton(false);
    }
  };

  return (
    newsArticles.length > 0
      ?
      <section className="news-card-list">
        <h2 className="news-card-list__title">Результаты поиска</h2>
        <div className="news-card-list__block">
          {newsArticles.map((article, key) => (
            <NewsCard
              image={article.urlToImage}
              link={article.url}
              date={article.publishedAt}
              title={article.title}
              text={article.description}
              source={article.source.name}
              key={key}

              article={article}
              saveArticles={props.saveArticles}
              articlesNews={props.articles}
              keyword={props.keyword}

              addToSaveArticles={props.addToSaveArticles}
              checkArticles={props.checkArticles}
              setIsEditMarker={props.setIsEditMarker}
              isEditMarker={props.isEditMarker}
              handleLoginPopupClick={props.handleLoginPopupClick}
              loggedIn={props.loggedIn}
            />
          ))}
        </div>
        <button 
          onClick={addArticle} 
          className={`news-card-list__button ${addMoreButton 
          ? '' 
          : 'news-card-list__button_disabled'}`}
        >
          Показать еще
        </button>
      </section>
      : ''
  )
};

export default NewsCardList;
