import { KEY_API_NEWS, URL_NEWS } from './constans';

// Находим новости по запросу
export function searchNews(keyword) {
    let now = new Date();
  
    // переводим дату в формат 2020-11-23
    const startDate = now.toISOString().slice(0, 10);
  
    // ищем от даты начала минус 7 дней назад
    now.setDate(now.getDate() - 7);
    const finishDate = now.toISOString().slice(0, 10);
  
    return fetch(`${URL_NEWS}q=${keyword}&apiKey=${KEY_API_NEWS}&from=${finishDate}&to=${startDate}&sortBy=publishedAt&pageSize=100`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      });
  }
  