export default class Api {
  constructor(config) {
    this._config = config;
  }
  //check promise response
  _checkPromiseResponse (res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  //unified api request
  _apiRequest (url, options) {
    return fetch(url, options).then(this._checkPromiseResponse).catch((err) => console.log(err));
  }

  //user info
getProfileInfo = () => {
  return this._apiRequest (`${this._config.baseUrl}/users/me`,  {
    headers: this._config.headers
  });
}

//initial cards
getInitialCards = () => {
  return this._apiRequest (`${this._config.baseUrl}/cards`,  {
    headers: this._config.headers
  });
}

//Update profile data
updateProfileData (name, about) {
  return this._apiRequest (`${this._config.baseUrl}/users/me`,  {
    method: 'PATCH',
    headers: this._config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`
    })
});
}

//Change avatar
editAvatar (imgLink) {
  return this._apiRequest (`${this._config.baseUrl}/users/me/avatar`,  {
    method: 'PATCH',
    headers: this._config.headers,
    body: JSON.stringify({
      avatar: `${imgLink}`
    })
  });
}

//Post new cards
postNewCard (name, link) {
  return this._apiRequest (`${this._config.baseUrl}/cards`,  {
    method: 'POST',
    headers: this._config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`
    })
  });
}

//Delete my card
deleteCard (cardId) {
  return this._apiRequest (`${this._config.baseUrl}/cards/${cardId}`,  {
    method: 'DELETE',
    headers: this._config.headers
  });
}

//Like && remove like
likeAdd (cardId) {
  return this._apiRequest (`${this._config.baseUrl}/cards/likes/${cardId}`,  {
    method: 'PUT',
    headers: this._config.headers
  });
}

likeRemove (cardId) {
  return this._apiRequest (`${this._config.baseUrl}/cards/likes/${cardId}`,  {
    method: 'DELETE',
    headers: this._config.headers
  });
}
}