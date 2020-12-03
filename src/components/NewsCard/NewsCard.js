import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import './NewsCard.css';
import { newDate } from '../../utils/SavedArticlesText';

function NewsCard(props) {
  const { pathname } = useLocation();
  const { saveArticles, loggedIn } = props;
  const [isEditMarker, setIsEditMarker] = useState(false); 
  const keyword = `${ pathname === '/saved-news'
    ? 'news-card__keyword news-card__keyword_active' 
    : 'news-card__keyword'
  }`;

  React.useEffect(() => {
    if (loggedIn === true) {
      if (saveArticles) {
        setIsEditMarker(saveArticles.find((i) => i.title === props.title) !== undefined);
      }
    }
  }, [saveArticles, props.title, isEditMarker, loggedIn])

  function clickDelOrAddButton() {
    props.checkArticles(props.article, props.keyword, props.myArticle);
  }

  const delOrAddButton = `${ 
    pathname === '/saved-news' 
      ? 'news-card__button-delete' 
      : `${
        loggedIn && isEditMarker 
          ? 'news-card__button news-card__button_saved' 
          : 'news-card__button'
        }`
  }`;

  return (
    <article className="news-card">
      <p className={keyword}>{props.keyword}</p>
      { loggedIn 
        ? 
        <button onClick={clickDelOrAddButton} className={delOrAddButton}/>
        :
        <button 
          onClick={props.handleLoginPopupClick} 
          className="news-card__button news-card__button_disabled"
        />  
      }
      <img 
        className="news-card__image" 
        src={props.image 
          ? props.image 
          : "https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png"
        } 
        alt={props.title}
      />
      <a className="news-card__link" href={props.link} target="_blank" rel="noreferrer">
      <p className="news-card__date">{newDate(props.date)}</p>
      <h2 className="news-card__title">{props.title}</h2>
      <p className="news-card__text">{props.text || 'Описание новости отсутствует.'}</p>
      <p className="news-card__source">{props.source || props.source.name}</p>
      </a>
    </article>
  )
}

export default NewsCard;
