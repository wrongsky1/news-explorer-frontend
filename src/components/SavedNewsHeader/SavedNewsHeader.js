import React, { useState } from 'react';

import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getSavedArticlesText, getKeywordsText } from '../../utils/SavedArticlesText';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [keywords, setKeywords] = useState([]);

  React.useEffect(() => {
    const keywordMap = props.myArticles.map(i => i = i.keyword)
      .reduce((first, present) => {
        first[present] = (first[present] || 0) + 1;
        return first;
      }, {});
      const sortedKeywords = Object.keys(keywordMap).sort((a, b) => keywordMap[b] - keywordMap[a]);
      setKeywords(sortedKeywords);
  }, [props.myArticles]);

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__block">
        <p className="saved-news-header__subtitle">Сохраненные статьи</p>
        <h3 className="saved-news-header__title">{currentUser.name}, у вас {props.lengthMyArticles} {getSavedArticlesText(props.lengthMyArticles)}</h3>
        {
          keywords.length <= 3
          ?
          <p className="saved-news-header__keyword-list">По ключевым словам:&nbsp;
          {
            keywords.map((keyword, i) => {
              return i < keywords.length - 1
                ? <span className="saved-news-header__keyword" key={i}>{keyword},&nbsp;</span>
                : <span className="saved-news-header__keyword" key={i}>{keyword}</span>
            })
          }
          </p>
          :
          <p className="saved-news-header__keyword-list">По ключевым словам:&nbsp;
          {
            keywords.map((keyword, i) => {
              if (i === 0) {
                return <span className="saved-news-header__keyword" key={i}>{keyword},&nbsp;</span>
              } else if (i === 1) {
                return <span className="saved-news-header__keyword" key={i}>{keyword}</span>
              }
            })
          } и <span className="saved-news-header__keyword">{keywords.length - 2}{getKeywordsText(keywords.length - 2)}</span>
          </p>
        }
      </div>
    </section>
  )
}

export default SavedNewsHeader;
