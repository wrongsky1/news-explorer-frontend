import { BASE_URL_API } from './constants';

export const register = (email, password, name) => {
    console.log(email)
    return fetch(`${BASE_URL_API}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
      .then((res) => {
          if (res.ok) {
              return res.json();
          }
          else {
              return Promise.reject(`Произошла ошибка: ${res.status}`);
          }
      });
  };
  
  export const authorize = (email, password) => {
    return fetch(`${BASE_URL_API}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Произошла ошибка: ${res.status}`);
        }
    })
    .then((data) => {
        localStorage.setItem('jwt', data.token);
        return data;
    })
    .catch((err) => {
        console.log(err.message);
    })
  };
  
  export const getInfo = (token) => {
    return fetch(`${BASE_URL_API}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
    })
      .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
          return data;
      })
      .catch((err) => {
          console.log(err);
          return Promise.reject(`Ошибка: ${err.status}`);
      });
    };

  export function getSavedNews() {
    return fetch(`${BASE_URL_API}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      credentials: 'include'
    })
      .then((res) => {
        return res.json();
      })
  }
  
  export function saveArticle(article) {
    const {
        keyword,
        title,
        description,
        publishedAt,
        source,
        url,
        urlToImage,
    } = article
  
    return fetch(`${BASE_URL_API}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      credentials: 'include',
      body: JSON.stringify({
        keyword: keyword,
        title,
        text: description,
        date: publishedAt,
        source: source.name,
        link: url,
        image: urlToImage
      })
    })
      .then((res) => {
        return res.json();
      })
  }
  
  export function deleteArticle(article) {
    return fetch(`${BASE_URL_API}/articles/${article._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      credentials: 'include'
    })
  }