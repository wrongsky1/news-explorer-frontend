import React from 'react';

import './NewsCard.css';

function NewsCard(props) {
    function handleSaveButtonClick() {
        props.onSaveButtonClick(props.card);
    }

    function handleDeleteButtonClick() {
        props.onDeleteButtonClick(props.card);
    }

    function newDate(date) {

        const dateFormat = new Date(date);
    
        const monthList = [
          'января',
          'февраля',
          'марта',
          'апреля',
          'мая',
          'июня',
          'июля',
          'августа',
          'сентября',
          'октября',
          'ноября',
          'декабря'
        ];
    
        const year = dateFormat.getFullYear();
        const month = dateFormat.getMonth();
        const months = monthList[month];
        const days = dateFormat.getDate();
        const newDate = `${days} ${months}, ${year}`;
        return newDate;
    }

    return (
        <div className="news-card">
            <a className="news-card__link" href={props.activePage === 'main' ? props.card.url : props.card.link} target="_blank" rel="noopener noreferrer">
                <img className="news-card__image" src={props.activePage === 'main' ? props.card.urlToImage : props.card.image} alt={props.card.title} />
                <div className="news-card__container">
                    <p className="news-card__date">{props.activePage === 'main' ? newDate(props.card.publishedAt) : newDate(props.card.date)}</p>
                    <div className="news-card__text-wrapper">
                        <p className="news-card__title">{props.card.title}</p>
                        <p className="news-card__description">{props.activePage === 'main' ? props.card.description : props.card.text}</p>
                    </div>
                    <p className="news-card__source">{props.activePage === 'main' ? props.card.source.name : props.card.source}</p>
                </div>
            </a>
            {props.activePage === "main"
                ?
                <button className={props.loggedIn
                    ? props.card.isSaved ? "news-card__save-button news-card__save-button_saved" : "news-card__save-button news-card__save-button_saved"
                    : "news-card__save-button news-card__save-button_not-logged"}
                        type="button"
                        onClick={handleSaveButtonClick}
                        aria-label="Сохранить карточку"
                />
                :
                <>
                    <button className="news-card__delete-button" 
                            type="button" 
                            onClick={handleDeleteButtonClick} 
                            aria-label="Удалить из сохранённых" />
                    <p className="news-card__keyword">{props.card.keyword}</p>
                </>
            }
        </div>
    )
}

export default NewsCard;
