//config
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
  headers: {
    authorization: 'd199741e-6b2f-4eec-b579-eb256c9f973a',
    'Content-Type': 'application/json'
  }
}

//check promise response
function checkPromiseResponse (res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

//user info
export const getProfileInfo = () => {
  return fetch (`${config.baseUrl}/users/me`,  {
    headers: config.headers
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

//initial cards
export const getInitialCards = () => {
  return fetch (`${config.baseUrl}/cards`,  {
    headers: config.headers
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

//Update profile data
export function updateProfileData (name, status) {
  return fetch (`${config.baseUrl}/users/me`,  {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${status}`
    })
})
    .then(res => {
      return checkPromiseResponse(res);
    })
}

//Change avatar
export function editAvatar (imgLink) {
  return fetch (`${config.baseUrl}/users/me/avatar`,  {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${imgLink}`
    })
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

//Post new cards
export function postNewCard (name, link) {
  return fetch (`${config.baseUrl}/cards`,  {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`
    })
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

//Delete my card
export function deleteCard (cardId) {
  return fetch (`${config.baseUrl}/cards/cardId`,  {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

//Like card
export function likeAdd (cardId) {
  return fetch (`${config.baseUrl}/cards/cardId`,  {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

export function likeRemove (cardId) {
  return fetch (`${config.baseUrl}/cards/cardId`,  {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => {
      return checkPromiseResponse(res);
    })
}

