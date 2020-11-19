import React from 'react';

import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <section className="saved-news-header">
            <p className="saved-news-header__title">Сохранённые статьи</p>
            <p className="saved-news-header__list">{currentUser.name}, у вас {props.savedNews.length} сохранённых статей</p>
            <p className="saved-news-header__keywords-list">По ключевым словам:&nbsp;
                <span className="saved-news-header__keyword">Природа</span>,&nbsp;
                <span className="saved-news-header__keyword">Тайга</span> и&nbsp;
                <span className="saved-news-header__keyword">2-м другим</span>
            </p>
        </section>
    )
}

export default SavedNewsHeader;
