import React from 'react';

import './Preloader.css';

function Preloader() {
    return (
        <section className="preloader">
            <i className="preloader__spinner" />
            <p className="preloader__message">Идёт поиск новостей...</p>
        </section>
    )
}

export default Preloader;
