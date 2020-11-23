import React from 'react';

import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
    React.useEffect(() => {
        props.setSavedNewsPageActive();
    })

    React.useEffect(() => {
        props.getSavedNews();
    }, []);


    return (
        <>
            {
                props.savedNews.length > 0
                    ?
                    <>
                        <SavedNewsHeader savedNews={props.savedNews} sortedKeywords={props.sortedKeywords} />
                        <NewsCardList savedNews={props.savedNews} onDeleteButtonClick={props.onDeleteButtonClick} />
                    </>
                    :
                    <p>У Вас нет сохранённых статей</p>
            }
        </>
    )
}

export default SavedNews;
