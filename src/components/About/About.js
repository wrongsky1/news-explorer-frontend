import React from 'react';

import './About.css';
import avatar from '../../images/avatar.jpg';

function About(props) {
    return (
        <section className="about">
            <img className="about__avatar" src={avatar} alt="Фото автора" />
            <div className="about__container">
                <p className="about__subtitle">Об авторе</p>
                <p className="about__paragraph">
                Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, 
                чем вы занимаетесь, какими технологиями разработки владеете.
                </p>
                <p className="about__paragraph">
                Также можно рассказать о процессе обучения в Практикуме, 
                чему вы тут научились, и чем можете помочь потенциальным заказчикам.
                </p>
            </div>
        </section>
    )
}

export default About;
