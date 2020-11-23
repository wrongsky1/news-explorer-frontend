import React from 'react';

import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <section className="saved-news-header">
            <p className="saved-news-header__title">Сохранённые статьи</p>
            <p className="saved-news-header__list">{currentUser.name}, у вас {props.savedNews.length} сохранённых статей</p>
            {props.sortedKeywords.length <= 3
                ?
                <p className="saved-news-header__keywords-list">По ключевым словам:&nbsp;{
                    props.sortedKeywords.map((keyword, i) => {
                        return i < props.sortedKeywords.length - 1
                            ? <span className="saved-news-header__keyword" key={i}>{keyword},</span>
                            : <span className="saved-news-header__keyword" key={i}>{keyword}</span>
                    })
                }
                </p>
                :
                <p className="saved-news-header__keywords-list">По ключевым словам:&nbsp;{
                    props.sortedKeywords.map((keyword, i) => {
                        if (i === 0) {
                            return <span className="saved-news-header__keyword" key={i}>{keyword},</span>
                        } else if (i === 1) {
                            return <span className="saved-news-header__keyword" key={i}>{keyword}</span>
                        }
                    })
                }
                и {props.sortedKeywords.length - 2} двум другим
                </p>
            }
        </section>
    )
}

export default SavedNewsHeader;
