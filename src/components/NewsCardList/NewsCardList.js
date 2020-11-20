import React from 'react';

import './NewsCardList.css';
import notFoundIcon from '../../images/icons/not-found.svg';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
    return (
        <>
            {
                props.activePage === "main"
                    ?
                    <section className="news-card-list">
                        {props.searchNews.length > 0
                            ?
                            <div className="news-card-list__container">
                                <p className="news-card-list__subtitle">Результаты поиска</p>
                                <div className="news-card-list__results">
                                    {props.searchNews.map((card, i) => (
                                        <NewsCard 
                                            card={card} 
                                            key={i}
                                            loggedIn={props.loggedIn}
                                            activePage={props.activePage}
                                        />
                                    ))}
                                </div>
                                <button className="news-card-list__button" type="button">Показать ещё</button>
                            </div>
                            :
                            <>
                                <img className="news-card-list__not-found-image" src={notFoundIcon} alt="Грустный смайлик" />
                                <p className="news-card-list__not-found-subtitle">Ничего не найдено</p>
                                <p className="news-card-list__not-found-text">К сожалению по вашему запросу ничего не найдено.</p>
                            </>
                        }
                    </section>
                    :
                    <section className="news-card-list">
                        <div className="news-card-list__container">
                            <div className="news-card-list__results">
                                {props.savedNews.map((card, i) => (
                                    <NewsCard 
                                        card={card}
                                        key={i}
                                        loggedIn={props.loggedIn}
                                        activePage={props.activePage}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default NewsCardList;
