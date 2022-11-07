//config
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-16',
  headers: {
    authorization: 'd199741e-6b2f-4eec-b579-eb256c9f973a',
    'Content-Type': 'application/json'
  }
}

//unified api request
function apiRequest (url, options) {
  return fetch(url, options).then(checkPromiseResponse).catch((err) => console.log(err));
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
  return apiRequest (`${config.baseUrl}/users/me`,  {
    headers: config.headers
  });
}

//initial cards
export const getInitialCards = () => {
  return apiRequest (`${config.baseUrl}/cards`,  {
    headers: config.headers
  });
}

//Update profile data
export function updateProfileData (name, status) {
  return apiRequest (`${config.baseUrl}/users/me`,  {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${status}`
    })
});
}

//Change avatar
export function editAvatar (imgLink) {
  return apiRequest (`${config.baseUrl}/users/me/avatar`,  {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${imgLink}`
    })
  });
}

//Post new cards
export function postNewCard (name, link) {
  return apiRequest (`${config.baseUrl}/cards`,  {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`
    })
  });
}

//Delete my card
export function deleteCard (cardId) {
  return apiRequest (`${config.baseUrl}/cards/${cardId}`,  {
    method: 'DELETE',
    headers: config.headers
  });
}

//Like && remove like
export function likeAdd (cardId) {
  return apiRequest (`${config.baseUrl}/cards/likes/${cardId}`,  {
    method: 'PUT',
    headers: config.headers
  });
}

export function likeRemove (cardId) {
  return apiRequest (`${config.baseUrl}/cards/likes/${cardId}`,  {
    method: 'DELETE',
    headers: config.headers
  });
}

