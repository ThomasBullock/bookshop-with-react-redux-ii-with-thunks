//const baseUrl = PRODUCTION ? 'https://api.birdnerd.com/api/' : 'https://testing.birdnerd.com/api/';
const apiUrl = 'http://5979ace680bdcc0011d737c9.mockapi.io/api/';

export const GET = (url) => {
  return fetch(apiUrl + url, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(res => res)
};

export const POST = (url, body) => {
  return fetch(apiUrl + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(res => res)
};

export const PUT = (url, body) => {
  return fetch(apiUrl + url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(res => res)
};

export const DELETE = (url) => {
  return fetch(apiUrl + url, {
    method: 'DELETE',
  })
  .then(res => res)
};

// export const POSTBIRD = (body) => {
//   return fetch('https://api.cloudinary.com/v1_1/faiz/image/upload', {
//     method: 'POST',
//     headers: {
//       "X-Requested-With": "XMLHttpRequest"
//     },
//     body: body
//   })
//   .then(res => res.json())
//   .then(res =>  {
//     console.log(res);
//     return res;
//   })
// }

