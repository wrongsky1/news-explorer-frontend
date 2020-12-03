import { KEY_API_NEWS, URL_NEWS } from './constants';

export function searchNews(keyword) {
  let now = new Date();
  const firstDate = now.toISOString().slice(0, 10);
  now.setDate(now.getDate() - 7);
  const lastDate = now.toISOString().slice(0, 10);

  return fetch(`${URL_NEWS}q=${keyword}&apiKey=${KEY_API_NEWS}&from=${lastDate}&to=${firstDate}&sortBy=publishedAt&pageSize=100`, {
    method: 'GET',
    headers: {
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
