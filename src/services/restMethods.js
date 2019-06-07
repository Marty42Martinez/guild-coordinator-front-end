export const get = (url) => {
  return fetch(url, {
    method: 'GET'
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      
      if(!ok) throw 'Unable to perform GET fetch';

      return json;
    });
};

export const post = (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to perform POST fetch';

      return json;
    });
};
