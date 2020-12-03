import React from 'react';

import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
  const savedNewsBlock = `${
    props.lengthMyArticles > 0
    ? 'saved-news__list'
    : ''
  }`;

  return (
    <section className="saved-news">
      <SavedNewsHeader
        lengthMyArticles={props.lengthMyArticles}
        myArticles={props.myArticles}
      />
      <div className={savedNewsBlock}>
        <article className="news-card-list__block">
        {
          props.myArticles.map((article, key) => (
            <NewsCard
              myArticle={article}
              image={article.image}
              link={article.link}
              date={article.date}
              title={article.title}
              text={article.text}
              source={article.source.name || article.source}
              keyword={article.keyword || props.keyword}
              key={key}
              checkArticles={props.checkArticles}
              loggedIn={props.loggedIn}
            />
          ))
        }
        </article>
      </div>
    </section>
  )
};

export default SavedNews;
